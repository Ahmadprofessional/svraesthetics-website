import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENTS = (process.env.LEAD_RECIPIENTS ?? "Svraesthetics@gmail.com,Ahmadmumtazprofessional@gmail.com,svraesthetics84@gmail.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const FROM = process.env.LEAD_FROM ?? "SVR Aesthetics Website <onboarding@resend.dev>";

interface LeadPayload {
  name?: string;
  phone?: string;
  email?: string;
  treatment?: string;
  message?: string;
  source?: string;
  page?: string;
  website?: string; // honeypot
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // bot filled the honeypot

  const name = (body.name ?? "").trim().slice(0, 120);
  const phone = (body.phone ?? "").trim().slice(0, 40);
  const email = (body.email ?? "").trim().slice(0, 160);
  const treatment = (body.treatment ?? "").trim().slice(0, 80);
  const message = (body.message ?? "").trim().slice(0, 2000);
  const source = (body.source ?? "website").trim().slice(0, 80);
  const page = (body.page ?? "").trim().slice(0, 300);

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Name and phone are required" }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[lead] RESEND_API_KEY is not set — lead not emailed:", { name, phone, email, treatment, source, page });
    return NextResponse.json({ ok: false, error: "Email service is not configured" }, { status: 503 });
  }

  const rows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "—"],
    ["Treatment of interest", treatment || "—"],
    ["Message", message || "—"],
    ["Source", source],
    ["Page", page || "—"],
    ["Received", new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;color:#2b2530">
      <h2 style="color:#4b2a63;margin:0 0 16px">New consultation request</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 10px;border:1px solid #e9e0d4;background:#fbf8f4;font-weight:bold;width:38%">${esc(k)}</td><td style="padding:8px 10px;border:1px solid #e9e0d4">${esc(v).replace(/\n/g, "<br>")}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin-top:16px;font-size:12px;color:#6f6577">Reply to this email to respond directly to the client${email ? "" : " (no email supplied — please call)"}.</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: RECIPIENTS,
      replyTo: email || undefined,
      subject: `New lead: ${name}${treatment ? ` — ${treatment}` : ""} (${source})`,
      html,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    });
    if (error) {
      console.error("[lead] Resend error", error);
      return NextResponse.json({ ok: false, error: "Could not send email" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] send failed", err);
    return NextResponse.json({ ok: false, error: "Could not send email" }, { status: 502 });
  }
}
