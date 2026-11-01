#!/usr/bin/env node
// A stand-in for the clinic system's website API (klinika-system, /api/website/*), for
// developing /rezervacija without the real system: synthetic free times, an in-memory order
// book and a fake Paysera page. Nothing here is real data, and the catalogue below is a copy
// of the published one (reamed.lt/kainos, 2026-10-22); the real server stays the source of truth.
//
//   node scripts/mock-booking-api.mjs            # listens on 127.0.0.1:4100
//   KLINIKA_API_ORIGIN=http://127.0.0.1:4100 WEBSITE_API_KEY=mock-website-key-0123456789abcdef0123 npm run dev
//
// Sign-in code for every address: 123456. Order link token: <orderId>.9999999999.mock

import { createServer } from "node:http";
import { randomUUID } from "node:crypto";

const PORT = Number(process.env.PORT ?? 4100);
const KEY = process.env.WEBSITE_API_KEY ?? "mock-website-key-0123456789abcdef0123";
const SITE = process.env.WEBSITE_ORIGIN ?? "http://localhost:3000";
const HOLD_MINUTES = 20;
const TZ = "Europe/Vilnius";

const team = ["rm-kotryna", "rm-mangirdas", "rm-erikas"];
const people = {
  "rm-kotryna": "Kotryna Kairytė",
  "rm-mangirdas": "Mangirdas Kazačenko",
  "rm-piotr": "Piotr Dubrovskij",
  "rm-erikas": "Erikas Jatkauskas",
};
const services = [
  ["reamed-consultation", "consultation", "Pirminė konsultacija + ištyrimas + planas", 8000, 60, 60, team, true],
  ["reamed-kinesiotherapy", "kinesiotherapy", "Kineziterapija", 7000, 45, 60, team, false],
  ["reamed-complex", "kinesiotherapy", "Kompleksinė reabilitacija", 8500, 60, 60, team, false],
  ["reamed-extended", "kinesiotherapy", "Kompleksinė išplėstinė", 10000, 75, 75, team, false],
  ["reamed-piotr-consultation", "consultation", "Gydomasis seansas pas Piotr", 10000, 60, 60, ["rm-piotr"], true],
  ["reamed-piotr-individual", "kinesiotherapy", "Gydomasis seansas pas Piotr", 10000, 60, 60, ["rm-piotr"], false],
  ["reamed-massage-30", "massage", "Masažas", 4000, 30, 30, ["rm-mangirdas", "rm-erikas"], false],
  ["reamed-massage-60", "massage", "Masažas", 6500, 60, 60, ["rm-mangirdas", "rm-erikas"], false],
].map(([id, category, name, amountCents, durationMinutes, reservationMinutes, ids, firstVisitRecommended]) => ({
  id,
  category,
  name,
  amountCents,
  durationMinutes,
  reservationMinutes,
  status: "enabled",
  confirmationReasons: [],
  firstVisitRecommended,
  specialists: ids.map((sid) => ({ id: sid, name: people[sid], status: "enabled" })),
}));

const orders = new Map(); // id -> order
const sessions = new Map(); // token -> email
const codes = new Map(); // email -> code

const json = (res, status, body) => {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(body));
};
const html = (res, status, body) => {
  res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
  res.end(body);
};
const bad = (res, message) => json(res, 400, { error: message });

/** Vilnius wall clock → epoch ms (handles DST through Intl). */
function clinicInstant(day, hour, minute = 0) {
  const [y, m, d] = day.split("-").map(Number);
  let guess = Date.UTC(y, m - 1, d, hour, minute);
  for (let i = 0; i < 3; i++) {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ,
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).formatToParts(guess);
    const get = (t) => Number(parts.find((p) => p.type === t).value);
    const seen = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour") % 24, get("minute"));
    const want = Date.UTC(y, m - 1, d, hour, minute);
    if (seen === want) break;
    guess += want - seen;
  }
  return guess;
}
const addDays = (day, n) => {
  const [y, m, d] = day.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
};
const weekday = (day) => new Date(`${day}T12:00:00Z`).getUTCDay();
const clinicDayOf = (ms) => new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(ms);

function busy(specialistId, now) {
  const out = [];
  for (const o of orders.values()) {
    const active = o.status === "paid" || o.status === "paid_conflict" || ((o.status === "held" || o.status === "awaiting_payment") && o.expiresAt > now);
    if (!active) continue;
    for (const it of o.items) if (it.specialistId === specialistId && it.status !== "canceled") out.push([it.start, it.end]);
  }
  return out;
}

function slotsFor(service, specialistId, fromDay, toDay, now) {
  const slots = [];
  const taken = busy(specialistId, now);
  for (let day = fromDay; day < toDay; day = addDays(day, 1)) {
    const wd = weekday(day);
    if (wd === 0) continue; // Sunday
    // A different pattern per specialist so the page shows variety; Saturdays only mornings.
    const hours = wd === 6 ? [9, 10, 11] : specialistId === "rm-piotr" ? [10, 12, 14, 16] : [9, 10, 11, 13, 14, 15, 16, 17];
    for (const h of hours) {
      if ((h + day.charCodeAt(9)) % 5 === 0) continue;
      const start = clinicInstant(day, h);
      const end = start + service.reservationMinutes * 60_000;
      if (start <= now + 60 * 60_000) continue;
      if (taken.some(([a, b]) => a < end && b > start)) continue;
      slots.push({ start, end });
    }
  }
  return slots;
}

function expire(now) {
  for (const o of orders.values()) {
    if ((o.status === "held" || o.status === "awaiting_payment") && o.expiresAt <= now) {
      o.status = "expired";
      for (const it of o.items) it.status = "expired";
    }
  }
}

const canChange = (item, now) => item.status === "confirmed" && now <= item.start - 12 * 3_600_000;

function view(o, now, withPrivate) {
  const base = {
    id: o.id,
    status: o.status,
    locale: o.locale,
    totalCents: o.totalCents,
    amountPaidCents: o.status === "paid" || o.status === "paid_conflict" ? o.totalCents : 0,
    currency: "EUR",
    expiresAt: o.expiresAt,
    paidAt: o.paidAt,
    checkoutUrl: o.status === "awaiting_payment" ? o.checkoutUrl : null,
    items: o.items.map((it) => ({
      id: it.id,
      serviceId: it.serviceId,
      specialistId: it.specialistId,
      start: it.start,
      end: it.end,
      durationMinutes: it.durationMinutes,
      amountCents: it.amountCents,
      status: it.status,
      ...(withPrivate ? { canChange: canChange(it, now), changeDeadline: it.start - 12 * 3_600_000 } : {}),
    })),
    rules: { changeNoticeHours: 12, holdMinutes: HOLD_MINUTES },
  };
  if (!withPrivate) return base;
  return {
    ...base,
    visitType: o.visitType,
    patient: o.patient,
    manageUrl: `${SITE}/rezervacija/uzsakymas?t=${encodeURIComponent(`${o.id}.9999999999.mock`)}`,
  };
}

function owner(o, token, session) {
  if (typeof token === "string" && token === `${o.id}.9999999999.mock`) return "link";
  const email = session && sessions.get(session);
  if (email && email === o.patient.email) return "session";
  return null;
}

async function body(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : null;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  const now = Date.now();
  expire(now);

  // ---- the fake Paysera checkout ------------------------------------------------------------
  if (url.pathname === "/paysera-mock") {
    const o = orders.get(url.searchParams.get("order") ?? "");
    if (!o) return html(res, 404, "<p>No such order</p>");
    const action = url.searchParams.get("do");
    if (action === "pay") {
      // The callback arrives a moment after the return, as with the real thing.
      setTimeout(() => {
        if (o.status !== "awaiting_payment") return;
        o.status = "paid";
        o.paidAt = Date.now();
        for (const it of o.items) it.status = "confirmed";
      }, 2500);
      res.writeHead(303, { Location: `${SITE}/rezervacija/rezultatas?order=${o.id}` });
      return res.end();
    }
    if (action === "fail") {
      res.writeHead(303, { Location: `${SITE}/rezervacija/rezultatas?order=${o.id}&result=failure` });
      return res.end();
    }
    return html(
      res,
      200,
      `<!doctype html><meta charset="utf-8"><title>Paysera (mock)</title>
      <body style="font:18px system-ui;padding:40px;max-width:520px;margin:auto">
      <h1>Paysera – bandomasis mokėjimas</h1>
      <p>Užsakymas ${o.id}<br>Suma: ${(o.totalCents / 100).toFixed(2)} €</p>
      <p><a href="/paysera-mock?order=${o.id}&do=pay" style="display:inline-block;padding:12px 20px;background:#2a7;color:#fff;border-radius:8px;text-decoration:none">Apmokėti</a>
      &nbsp; <a href="/paysera-mock?order=${o.id}&do=fail" style="display:inline-block;padding:12px 20px;background:#c44;color:#fff;border-radius:8px;text-decoration:none">Atšaukti mokėjimą</a></p>
      </body>`,
    );
  }

  if (!url.pathname.startsWith("/api/website/")) return json(res, 404, { error: "Nerasta." });
  if (req.headers["x-website-key"] !== KEY) return json(res, 403, { error: "Neleista." });
  const route = url.pathname.slice("/api/website/".length);
  const session = req.headers["x-website-session"];
  let m;

  try {
    if (req.method === "GET" && route === "catalogue")
      return json(res, 200, {
        catalogue: {
          version: "mock-2026-11-01",
          brandId: "reamed",
          entityId: "mb",
          entityName: "MB „Kineziterapija“",
          bookingEnabled: false,
          initialConsultationRequired: true,
          defaultServiceId: "reamed-consultation",
          source: { url: "https://reamed.lt/kainos", checkedOn: "2026-10-22" },
          services,
        },
        paymentsEnabled: true,
        rules: { changeNoticeHours: 12, holdMinutes: HOLD_MINUTES },
      });

    if (req.method === "GET" && route === "availability") {
      const serviceId = url.searchParams.get("serviceId"),
        specialistId = url.searchParams.get("specialistId"),
        fromDay = url.searchParams.get("fromDay"),
        toDay = url.searchParams.get("toDay");
      const service = services.find((s) => s.id === serviceId);
      if (!service || !service.specialists.some((p) => p.id === specialistId)) return bad(res, "Pasirinkite paslaugą iš ReaMed katalogo.");
      if (!/^\d{4}-\d{2}-\d{2}$/.test(fromDay ?? "") || !/^\d{4}-\d{2}-\d{2}$/.test(toDay ?? "")) return bad(res, "Neteisinga data.");
      return json(res, 200, {
        serviceId,
        specialistId,
        fromDay,
        toDay,
        bookingEnabled: false,
        status: "ready",
        fetchedAt: now,
        slots: slotsFor(service, specialistId, fromDay, toDay, now),
      });
    }

    if (req.method === "POST" && route === "orders") {
      const input = await body(req);
      if (!input || input.acceptedTerms !== true) return bad(res, "Reikia sutikti su registracijos sąlygomis.");
      if (!["first_visit", "returning"].includes(input.visitType)) return bad(res, "Pasirinkite, ar tai pirmas vizitas.");
      if (!Array.isArray(input.items) || !input.items.length) return bad(res, "Pasirinkite bent vieną vizitą.");
      if (input.visitType === "first_visit" && input.items.length !== 1) return bad(res, "Pirmam vizitui užsakoma viena konsultacija.");
      const p = input.patient ?? {};
      for (const [k, msg] of [["firstName", "Įveskite vardą."], ["lastName", "Įveskite pavardę."], ["phone", "Įveskite telefono numerį."], ["email", "Įveskite el. pašto adresą."]])
        if (typeof p[k] !== "string" || !p[k].trim()) return bad(res, msg);
      const existing = [...orders.values()].find((o) => o.requestId === input.requestId);
      if (existing) return json(res, 200, view(existing, now, true));
      const items = [];
      for (const it of input.items) {
        const service = services.find((s) => s.id === it.serviceId);
        if (!service) return bad(res, "Pasirinkite paslaugą iš ReaMed katalogo.");
        if ((input.visitType === "first_visit") !== (service.category === "consultation")) return bad(res, "Pirmam vizitui – konsultacija, vėliau – procedūros.");
        if (typeof it.start !== "number") return bad(res, "Neteisingas vizito laikas arba paslauga.");
        const day = clinicDayOf(it.start);
        const offered = slotsFor(service, it.specialistId, addDays(day, -1), addDays(day, 2), now);
        const slot = offered.find((s) => s.start === it.start);
        if (!slot || items.some((x) => x.specialistId === it.specialistId && x.start < slot.end && x.end > slot.start))
          return bad(res, "Šis laikas jau užimtas arba nebesiūlomas. Pasirinkite kitą laiką.");
        items.push({
          id: randomUUID(),
          serviceId: service.id,
          specialistId: it.specialistId,
          start: slot.start,
          end: slot.end,
          durationMinutes: service.durationMinutes,
          amountCents: service.amountCents,
          status: "held",
        });
      }
      const o = {
        id: randomUUID(),
        requestId: input.requestId,
        status: "held",
        visitType: input.visitType,
        locale: input.locale === "en" ? "en" : "lt",
        patient: { firstName: p.firstName.trim(), lastName: p.lastName.trim(), phone: p.phone.trim(), email: p.email.trim().toLowerCase() },
        items,
        totalCents: items.reduce((s, it) => s + it.amountCents, 0),
        expiresAt: now + HOLD_MINUTES * 60_000,
        paidAt: null,
        checkoutUrl: null,
      };
      orders.set(o.id, o);
      return json(res, 200, view(o, now, true));
    }

    if (req.method === "POST" && (m = /^orders\/([^/]+)\/pay$/.exec(route))) {
      const o = orders.get(m[1]);
      if (!o) return bad(res, "Užsakymas nerastas.");
      if (o.status === "expired") return bad(res, "Rezervacijos laikas baigėsi. Pasirinkite laiką iš naujo.");
      if (o.status !== "held" && o.status !== "awaiting_payment") return bad(res, "Užsakymas jau apmokėtas.");
      o.status = "awaiting_payment";
      for (const it of o.items) it.status = "awaiting_payment";
      o.checkoutUrl = `http://127.0.0.1:${PORT}/paysera-mock?order=${o.id}`;
      return json(res, 200, { checkoutUrl: o.checkoutUrl, expiresAt: o.expiresAt, status: o.status });
    }

    if (req.method === "GET" && (m = /^orders\/([^/]+)\/status$/.exec(route))) {
      const o = orders.get(m[1]);
      if (!o) return bad(res, "Užsakymas nerastas.");
      return json(res, 200, view(o, now, false));
    }

    if (req.method === "GET" && (m = /^orders\/([^/]+)$/.exec(route))) {
      const o = orders.get(m[1]);
      if (!o) return bad(res, "Užsakymas nerastas.");
      if (o.status === "held" || o.status === "awaiting_payment" || o.status === "expired") return json(res, 200, { ...view(o, now, true), manageUrl: null });
      if (!owner(o, url.searchParams.get("t"), session)) return json(res, 403, { error: "Neleista." });
      return json(res, 200, view(o, now, true));
    }

    if (req.method === "POST" && (m = /^orders\/([^/]+)\/items\/([^/]+)\/(cancel|move)$/.exec(route))) {
      const o = orders.get(m[1]);
      const input = (await body(req)) ?? {};
      if (!o) return bad(res, "Vizitas nerastas.");
      if (!owner(o, input.token, session)) return json(res, 403, { error: "Neleista." });
      const it = o.items.find((x) => x.id === m[2]);
      if (!it) return bad(res, "Vizitas nerastas.");
      if (it.status !== "confirmed") return bad(res, "Šio vizito pakeisti nebegalima.");
      if (!canChange(it, now)) return bad(res, "Pakeisti ar atšaukti savitarnoje galima likus bent 12 valandoms iki vizito. Kreipkitės į administraciją.");
      if (m[3] === "cancel") {
        it.status = "canceled";
        return json(res, 200, view(o, now, true));
      }
      const service = services.find((s) => s.id === it.serviceId);
      const start = input.start;
      if (typeof start !== "number") return bad(res, "Pasirinkite naują laiką.");
      if (start === it.start) return bad(res, "Tai tas pats laikas.");
      const day = clinicDayOf(start);
      const offered = slotsFor(service, it.specialistId, day, addDays(day, 1), now).filter((s) => s.start !== it.start);
      const slot = offered.find((s) => s.start === start);
      if (!slot) return bad(res, "Šis laikas jau užimtas arba nebesiūlomas. Pasirinkite kitą laiką.");
      it.start = slot.start;
      it.end = slot.end;
      return json(res, 200, view(o, now, true));
    }

    if (req.method === "POST" && route === "sign-in/code") {
      const input = (await body(req)) ?? {};
      const email = String(input.email ?? "").trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad(res, "Neteisingas el. pašto adresas.");
      codes.set(email, "123456");
      console.log(`[mock] sign-in code for ${email}: 123456`);
      return json(res, 200, { sent: true, expiresInMinutes: 10 });
    }
    if (req.method === "POST" && route === "sign-in/verify") {
      const input = (await body(req)) ?? {};
      const email = String(input.email ?? "").trim().toLowerCase();
      if (codes.get(email) !== String(input.code ?? "").replace(/\s+/g, "")) return bad(res, "Neteisingas kodas.");
      codes.delete(email);
      const token = randomUUID().replaceAll("-", "") + randomUUID().replaceAll("-", "").slice(0, 11);
      sessions.set(token, email);
      return json(res, 200, { token, email, expiresAt: now + 30 * 86_400_000 });
    }
    if (req.method === "POST" && route === "sign-in/out") {
      if (typeof session === "string") sessions.delete(session);
      return json(res, 200, { signedOut: true });
    }
    if (req.method === "GET" && route === "me") {
      const email = typeof session === "string" && sessions.get(session);
      if (!email) return json(res, 403, { error: "Neleista." });
      return json(res, 200, { email, expiresAt: now + 30 * 86_400_000 });
    }
    if (req.method === "GET" && route === "me/orders") {
      const email = typeof session === "string" && sessions.get(session);
      if (!email) return json(res, 403, { error: "Neleista." });
      const mine = [...orders.values()].filter((o) => o.patient.email === email && (o.status === "paid" || o.status === "paid_conflict"));
      return json(res, 200, { email, orders: mine.map((o) => view(o, now, true)) });
    }
    return json(res, 404, { error: "Nerasta." });
  } catch (error) {
    console.error(error);
    return json(res, 500, { error: "Mock error." });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`[mock] clinic website API on http://127.0.0.1:${PORT} (key ${KEY.slice(0, 8)}…), site ${SITE}`);
});
