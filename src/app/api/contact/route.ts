import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const RECIPIENT = "reamedklinika@gmail.com";

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter — max 5 submissions per IP per 10 minutes.
// ---------------------------------------------------------------------------
const RATE_WINDOW_MS = 10 * 60 * 1000;
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

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function stripControls(str: string): string {
  return str.replace(/[\r\n\t\0]/g, " ").trim();
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function smtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_PASS !== "ваш_пароль_от_почты"
  );
}

async function sendViaResend(params: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) return false;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from =
    process.env.RESEND_FROM ?? "ReaMed forma <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: RECIPIENT,
    replyTo: params.replyTo,
    subject: params.subject,
    html: params.html,
  });

  if (error) {
    console.error("Resend error:", error);
    return false;
  }

  return true;
}

async function sendViaSmtp(params: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  if (!smtpConfigured()) return false;

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

  try {
    await transporter.sendMail({
      from: `"ReaMed forma" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: params.replyTo,
      subject: params.subject,
      html: params.html,
    });
    return true;
  } catch (err) {
    console.error("SMTP error:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
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

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, contactDetail, contact, message, lang, phone, email } = body;

  if (
    typeof name !== "string" ||
    typeof contactDetail !== "string" ||
    !name.trim() ||
    !contactDetail.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (name.length > 100 || contactDetail.length > 200) {
    return NextResponse.json({ error: "Input too long" }, { status: 400 });
  }

  const messageStr = typeof message === "string" ? message.slice(0, 2000) : "";

  if (contact !== "phone" && contact !== "email") {
    return NextResponse.json({ error: "Invalid contact method" }, { status: 400 });
  }

  if (contact === "email" && !isValidEmail(contactDetail as string)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const safeLang: "lt" | "en" = lang === "en" ? "en" : "lt";

  // The form may send a phone and an email independently of the preferred
  // contact method, so collect both instead of relying on contactDetail alone.
  const extraPhone = typeof phone === "string" ? stripControls(phone).slice(0, 200) : "";
  const extraEmail = typeof email === "string" ? stripControls(email).slice(0, 200) : "";
  const detail = stripControls(contactDetail as string);

  const clientEmail = isValidEmail(extraEmail)
    ? extraEmail
    : isValidEmail(detail)
      ? detail
      : "";
  const clientPhone = extraPhone || (isValidEmail(detail) ? "" : detail);

  if (!process.env.RESEND_API_KEY && !smtpConfigured()) {
    console.error(
      "Email not configured — set RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS"
    );
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  const safeName = esc(stripControls(name));
  const safeMessage = esc(messageStr);
  const safeEmail = esc(clientEmail);
  const safePhone = esc(clientPhone);

  const contactLabel =
    safeLang === "en"
      ? contact === "phone" ? "By phone" : "By email"
      : contact === "phone" ? "Telefonu" : "El. paštu";

  const label =
    safeLang === "en"
      ? { phone: "Phone", email: "Email", reply: "Reply to client", call: "Call client" }
      : { phone: "Telefonas", email: "El. paštas", reply: "Atsakyti klientui", call: "Skambinti klientui" };

  const subject = stripControls(
    safeLang === "en"
      ? `Appointment request — ${name}`
      : `Registracija vizitui — ${name}`
  );

  const linkStyle = "color: #2f7d78; font-weight: 600; text-decoration: none;";
  const buttonStyle =
    "display: inline-block; background: #7DB9B5; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 10px 20px; border-radius: 8px;";

  const replyHref = clientEmail
    ? `mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${subject}`)}`
    : "";
  const callHref = clientPhone ? `tel:${clientPhone.replace(/[^\d+]/g, "")}` : "";

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
          ${safePhone ? `
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #6b7c7a;">${label.phone}</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="${callHref}" style="${linkStyle}">${safePhone}</a></td>
          </tr>` : ""}
          ${safeEmail ? `
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #6b7c7a;">${label.email}</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="${replyHref}" style="${linkStyle}">${safeEmail}</a></td>
          </tr>` : ""}
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
        ${replyHref || callHref ? `
        <div style="margin-top: 20px; padding-top: 18px; border-top: 1px solid #dde9e8;">
          ${replyHref ? `<a href="${replyHref}" style="${buttonStyle}">${label.reply}</a>` : ""}
          ${callHref ? `<a href="${callHref}" style="${buttonStyle} background: #ffffff; color: #2f7d78; border: 1px solid #90ceca; margin-left: ${replyHref ? "8px" : "0"};">${label.call}</a>` : ""}
        </div>` : ""}
      </div>
    </div>
  `;

  const mailParams = {
    subject,
    html,
    replyTo: clientEmail || undefined,
  };

  try {
    const sent =
      (await sendViaResend(mailParams)) || (await sendViaSmtp(mailParams));

    if (!sent) {
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
