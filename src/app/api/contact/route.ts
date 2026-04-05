import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter — max 5 submissions per IP per 10 minutes.
// Good enough for a single-instance clinic site; swap for Redis on multi-node.
// ---------------------------------------------------------------------------
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT = 5;
const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

// ---------------------------------------------------------------------------
// HTML-escape user-supplied strings before inserting into email HTML
// ---------------------------------------------------------------------------
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Strip control characters (CR/LF etc.) to prevent email header injection
function stripControls(str: string): string {
  return str.replace(/[\r\n\t\0]/g, " ").trim();
}

// Basic email format check (not exhaustive — just guards replyTo header)
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  // ── Rate limiting ────────────────────────────────────────────────────────
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // ── Parse & validate body ────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, contactDetail, contact, message, lang } = body;

  // Type and presence checks
  if (
    typeof name !== "string" ||
    typeof contactDetail !== "string" ||
    !name.trim() ||
    !contactDetail.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Length limits
  if (name.length > 100 || contactDetail.length > 200) {
    return NextResponse.json({ error: "Input too long" }, { status: 400 });
  }
  const messageStr =
    typeof message === "string" ? message.slice(0, 2000) : "";

  // Validate contact method
  if (contact !== "phone" && contact !== "email") {
    return NextResponse.json({ error: "Invalid contact method" }, { status: 400 });
  }

  // Validate email format when contact is email (prevents replyTo injection)
  if (contact === "email" && !isValidEmail(contactDetail)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // Validate lang
  const safeLang: "lt" | "en" = lang === "en" ? "en" : "lt";

  // ── SMTP config check ────────────────────────────────────────────────────
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    process.env.SMTP_PASS === "ваш_пароль_от_почты"
  ) {
    console.error("SMTP not configured — set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local");
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 5000,
    socketTimeout: 8000,
  });

  // ── Build email (escape all user data) ──────────────────────────────────
  const safeName = esc(stripControls(name));
  const safeDetail = esc(stripControls(contactDetail));
  const safeMessage = esc(messageStr);

  const contactLabel =
    safeLang === "en"
      ? contact === "phone" ? "By phone" : "By email"
      : contact === "phone" ? "Telefonu" : "El. paštu";

  const detailLabel =
    safeLang === "en"
      ? contact === "phone" ? "Phone" : "Email"
      : contact === "phone" ? "Telefonas" : "El. paštas";

  // Subject: strip controls to prevent header injection
  const subject = stripControls(
    safeLang === "en"
      ? `Appointment request — ${name}`
      : `Registracija vizitui — ${name}`
  );

  const html = `
    <div style="font-family: sans-serif; max-width: 520px; color: #1a2120;">
      <div style="background: #7DB9B5; padding: 20px 28px; border-radius: 12px 12px 0 0;">
        <p style="margin: 0; color: white; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">
          ReaMed — ${safeLang === "en" ? "New appointment request" : "Nauja užklausa"}
        </p>
      </div>
      <div style="background: #f7faf9; padding: 24px 28px; border-radius: 0 0 12px 12px; border: 1px solid #dde9e8; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #6b7c7a; width: 140px;">${safeLang === "en" ? "Name" : "Vardas"}</td>
            <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #1a2120;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #6b7c7a;">${detailLabel}</td>
            <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #1a2120;">${safeDetail}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #6b7c7a;">${safeLang === "en" ? "Preferred contact" : "Susisiekimas"}</td>
            <td style="padding: 8px 0; font-size: 14px; color: #1a2120;">${contactLabel}</td>
          </tr>
          ${safeMessage ? `
          <tr>
            <td colspan="2" style="padding-top: 16px;">
              <p style="margin: 0 0 6px; font-size: 13px; color: #6b7c7a;">${safeLang === "en" ? "Message" : "Žinutė"}</p>
              <div style="background: white; border: 1px solid #dde9e8; border-radius: 8px; padding: 12px 14px; font-size: 14px; color: #1a2120; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</div>
            </td>
          </tr>` : ""}
        </table>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ReaMed forma" <${process.env.SMTP_USER}>`,
      to: "info@reamed.lt",
      replyTo: contact === "email" ? contactDetail : undefined,
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
