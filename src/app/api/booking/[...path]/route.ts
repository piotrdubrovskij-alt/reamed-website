import { NextRequest, NextResponse } from "next/server";

/**
 * The only door between the browser and the clinic system's website API
 * (klinika-system, `/api/website/*`). The browser never sees the shared key or the
 * system's address; this handler forwards an allow-listed set of routes, adds the key,
 * the patient's IP (for the system's rate limits) and the patient's session token, which
 * lives only in an HttpOnly cookie set here after a successful e-mail code sign-in.
 *
 * Without KLINIKA_API_ORIGIN and WEBSITE_API_KEY every route answers 503 and the booking
 * page shows that online booking is not available yet.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_COOKIE = "reamed_patient";
const SESSION_DAYS = 30;
const MAX_BODY = 64 * 1024;
const UUID = "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}";

type Route = { method: "GET" | "POST"; pattern: RegExp; query?: readonly string[] };

const routes: Route[] = [
  { method: "GET", pattern: /^catalogue$/ },
  { method: "GET", pattern: /^availability$/, query: ["serviceId", "specialistId", "fromDay", "toDay"] },
  { method: "POST", pattern: /^orders$/ },
  { method: "POST", pattern: new RegExp(`^orders/${UUID}/pay$`) },
  { method: "GET", pattern: new RegExp(`^orders/${UUID}/status$`) },
  { method: "GET", pattern: new RegExp(`^orders/${UUID}$`), query: ["t"] },
  { method: "POST", pattern: new RegExp(`^orders/${UUID}/items/${UUID}/(cancel|move)$`) },
  { method: "POST", pattern: /^sign-in\/code$/ },
  { method: "POST", pattern: /^sign-in\/verify$/ },
  { method: "POST", pattern: /^sign-in\/out$/ },
  { method: "GET", pattern: /^me$/ },
  { method: "GET", pattern: /^me\/orders$/ },
];

function config(): { origin: string; key: string } | null {
  const origin = process.env.KLINIKA_API_ORIGIN?.replace(/\/+$/, "");
  const key = process.env.WEBSITE_API_KEY;
  // Plain http only towards a mock on this machine (scripts/mock-booking-api.mjs).
  if (!origin || !key || key.length < 32 || !/^(https:\/\/|http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$)/.test(origin))
    return null;
  return { origin, key };
}

function clientIp(req: NextRequest): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first && /^[0-9a-fA-F.:]{3,45}$/.test(first) ? first : null;
}

function json(status: number, body: unknown, extra?: (res: NextResponse) => void): NextResponse {
  const res = NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
  extra?.(res);
  return res;
}

const unavailable = () => json(503, { error: "Registracija internetu dar neįjungta." });

async function handle(req: NextRequest, params: Promise<{ path: string[] }>): Promise<NextResponse> {
  const { path } = await params;
  const route = path.join("/");
  const method = req.method === "GET" ? "GET" : req.method === "POST" ? "POST" : null;
  const matched = method && routes.find((r) => r.method === method && r.pattern.test(route));
  if (!matched) return json(404, { error: "Nerasta." });

  const cfg = config();
  if (!cfg) return unavailable();

  const url = new URL(`${cfg.origin}/api/website/${route}`);
  for (const name of matched.query ?? []) {
    const value = req.nextUrl.searchParams.get(name);
    if (value !== null) url.searchParams.set(name, value);
  }

  const headers: Record<string, string> = {
    "X-Website-Key": cfg.key,
    Accept: "application/json",
  };
  const ip = clientIp(req);
  if (ip) headers["X-Website-Client-Ip"] = ip;
  const session = req.cookies.get(SESSION_COOKIE)?.value;
  const signedIn = Boolean(session && /^[A-Za-z0-9_-]{32,64}$/.test(session));
  if (signedIn) headers["X-Website-Session"] = session!;
  // Nothing to ask upstream for a visitor who is not signed in.
  if (!signedIn && (route === "me" || route === "me/orders")) return json(403, { error: "Neleista." });

  let body: string | undefined;
  if (method === "POST") {
    const text = await req.text();
    if (text.length > MAX_BODY) return json(413, { error: "Per didelė užklausa." });
    if (text.length) {
      try {
        JSON.parse(text);
      } catch {
        return json(400, { error: "Neteisinga užklausa." });
      }
      body = text;
      headers["Content-Type"] = "application/json";
    }
  }

  let upstream: Response;
  try {
    upstream = await fetch(url, {
      method,
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    return json(503, { error: "Registracijos sistema šiuo metu nepasiekiama. Bandykite vėliau." });
  }

  let payload: unknown = null;
  const raw = await upstream.text();
  if (raw) {
    try {
      payload = JSON.parse(raw);
    } catch {
      payload = { error: "Netikėtas atsakymas." };
    }
  }
  // The system answers 404 while its website API is switched off: to the patient that is the
  // same as "not available yet". A 403 from the key gate would be our misconfiguration.
  if (upstream.status === 404 && (route === "catalogue" || route === "availability")) return unavailable();

  if (route === "sign-in/verify" && upstream.ok && payload && typeof payload === "object") {
    const { token, ...rest } = payload as { token?: string; email?: string; expiresAt?: number };
    if (typeof token !== "string") return json(502, { error: "Netikėtas atsakymas." });
    return json(200, rest, (res) => {
      res.cookies.set(SESSION_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/api/booking",
        maxAge: SESSION_DAYS * 86_400,
      });
    });
  }
  if (route === "sign-in/out") {
    return json(200, { signedOut: true }, (res) => {
      res.cookies.set(SESSION_COOKIE, "", { httpOnly: true, path: "/api/booking", maxAge: 0 });
    });
  }
  return json(upstream.status, payload ?? {});
}

export async function GET(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  return handle(req, ctx.params);
}
export async function POST(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  return handle(req, ctx.params);
}
