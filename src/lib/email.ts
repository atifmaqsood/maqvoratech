import "server-only";

import { Resend } from "resend";

import { site } from "@/data/site";
import type { ContactInput } from "@/lib/validations";

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function render(data: ContactInput) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "—"],
    ["Service", data.service],
    ["Budget", data.budget],
    ["Timeline", data.timeline],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`;
  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="margin:0 0 16px">New project enquiry</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#666">${k}</td><td style="padding:6px 0"><strong>${escape(v)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <p style="white-space:pre-wrap;line-height:1.6;margin-top:20px">${escape(data.message)}</p>
    </div>`;
  return { text, html };
}

export type SendResult = { ok: true; delivered: boolean } | { ok: false };

/**
 * Sends a contact enquiry via Resend. Without RESEND_API_KEY the submission
 * is logged (in development) and treated as a success.
 */
export async function sendContactEmail(data: ContactInput): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY missing — logging submission instead:\n", data);
    } else {
      console.warn("[contact] RESEND_API_KEY missing — submission was not emailed.");
    }
    return { ok: true, delivered: false };
  }

  const { text, html } = render(data);
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || `${site.name} <onboarding@resend.dev>`,
    to: process.env.CONTACT_TO_EMAIL || site.email,
    replyTo: data.email,
    subject: `New enquiry from ${data.name} — ${data.service}`,
    text,
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return { ok: false };
  }
  return { ok: true, delivered: true };
}
