import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, contactDetail, contact, message, lang } = await req.json();

  if (!name || !contactDetail) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || process.env.SMTP_PASS === "ваш_пароль_от_почты") {
    console.error("SMTP not configured — set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local");
    return NextResponse.json({ error: "SMTP not configured" }, { status: 503 });
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

  const contactLabel = lang === "en"
    ? (contact === "phone" ? "By phone" : "By email")
    : (contact === "phone" ? "Telefonu" : "El. paštu");

  const detailLabel = lang === "en"
    ? (contact === "phone" ? "Phone" : "Email")
    : (contact === "phone" ? "Telefonas" : "El. paštas");

  const subject = lang === "en"
    ? `Appointment request — ${name}`
    : `Registracija vizitui — ${name}`;

  const html = `
    <div style="font-family: sans-serif; max-width: 520px; color: #1a2120;">
      <div style="background: #7DB9B5; padding: 20px 28px; border-radius: 12px 12px 0 0;">
        <p style="margin: 0; color: white; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">
          ReaMed — ${lang === "en" ? "New appointment request" : "Nauja užklausa"}
        </p>
      </div>
      <div style="background: #f7faf9; padding: 24px 28px; border-radius: 0 0 12px 12px; border: 1px solid #dde9e8; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #6b7c7a; width: 140px;">${lang === "en" ? "Name" : "Vardas"}</td>
            <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #1a2120;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #6b7c7a;">${detailLabel}</td>
            <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #1a2120;">${contactDetail}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #6b7c7a;">${lang === "en" ? "Preferred contact" : "Susisiekimas"}</td>
            <td style="padding: 8px 0; font-size: 14px; color: #1a2120;">${contactLabel}</td>
          </tr>
          ${message ? `
          <tr>
            <td colspan="2" style="padding-top: 16px;">
              <p style="margin: 0 0 6px; font-size: 13px; color: #6b7c7a;">${lang === "en" ? "Message" : "Žinutė"}</p>
              <div style="background: white; border: 1px solid #dde9e8; border-radius: 8px; padding: 12px 14px; font-size: 14px; color: #1a2120; line-height: 1.6; white-space: pre-wrap;">${message}</div>
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
