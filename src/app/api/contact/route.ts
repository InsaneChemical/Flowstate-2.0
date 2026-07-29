import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, business, email, need, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Flowstate Contact Form <contact@flowstatemedia.co.za>",
    to: ["nuno@flowstatemedia.co.za"],
    replyTo: email,
    subject: `New enquiry from ${name} — ${business || "no business listed"}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px">
        <h2 style="margin:0 0 24px;font-size:20px;color:#0f172a">New enquiry via Flowstate Media</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;width:140px">Name</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:600">${name}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b">Business</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a">${business || "—"}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b">Email</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0"><a href="mailto:${email}" style="color:#06b6d4">${email}</a></td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b">Service needed</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a">${need || "—"}</td></tr>
        </table>
        ${message ? `<div style="margin-top:24px"><p style="color:#64748b;margin:0 0 8px;font-size:13px">MESSAGE</p><p style="color:#0f172a;background:#fff;padding:16px;border-radius:8px;border:1px solid #e2e8f0;margin:0;line-height:1.7">${message}</p></div>` : ""}
        <p style="margin:32px 0 0;font-size:12px;color:#94a3b8">Sent from flowstatemedia.co.za contact form</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
