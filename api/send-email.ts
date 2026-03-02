import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// ── Email credentials ────────────────────────────────────────────────────────
const CENTFLOW_EMAIL = process.env.GMAIL_USER!;
const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD!;

const LOGO_URL = 'https://res.cloudinary.com/dddvmez6s/image/upload/v1769032878/Image_13-01-2026_at_21.43-Photoroom_u2pmtm.png';

// ── Internal notification email template ─────────────────────────────────────
function notifyTemplate(name: string, email: string, phone: string, service: string, message: string): string {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:#000;border:1px solid rgba(45,71,255,0.3);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
            <img src="${LOGO_URL}" alt="Centflow" style="height:60px;width:auto;object-fit:contain;"/>
            <p style="margin:16px 0 0;color:rgba(255,255,255,0.4);font-size:10px;letter-spacing:0.4em;text-transform:uppercase;">New Enquiry Received</p>
          </td>
        </tr>
        <tr>
          <td style="background:#0d0d0d;border-left:1px solid rgba(45,71,255,0.15);border-right:1px solid rgba(45,71,255,0.15);padding:40px;">
            <p style="margin:0 0 8px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">From</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(255,255,255,0.06);border-radius:12px;margin-bottom:24px;">
              <tr><td style="padding:20px 24px;">
                <p style="margin:0 0 4px;color:#fff;font-size:16px;font-weight:700;">${name}</p>
                <p style="margin:0;color:#2D47FF;font-size:13px;">${email}</p>
                <p style="margin:4px 0 0;color:rgba(255,255,255,0.5);font-size:12px;">Tel: ${phone}</p>
              </td></tr>
            </table>
            <p style="margin:0 0 8px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">Service Requested</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(255,255,255,0.06);border-radius:12px;margin-bottom:24px;">
              <tr><td style="padding:16px 24px;">
                <p style="margin:0;color:#fff;font-size:14px;">${service}</p>
              </td></tr>
            </table>
            <p style="margin:0 0 8px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">Message</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(255,255,255,0.06);border-radius:12px;margin-bottom:32px;">
              <tr><td style="padding:20px 24px;">
                <p style="margin:0;color:rgba(255,255,255,0.75);font-size:14px;line-height:1.7;">${message}</p>
              </td></tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td align="center">
                <a href="mailto:${email}" style="display:inline-block;background:#2D47FF;color:#fff;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;padding:16px 40px;border-radius:100px;">
                  Reply to ${name}
                </a>
              </td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#000;border:1px solid rgba(45,71,255,0.15);border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:rgba(255,255,255,0.2);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;">Centflow Growth Infrastructure · enquiries@centflow-agency.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

// ── Confirmation email template ───────────────────────────────────────────────
function confirmTemplate(name: string, service: string, phone: string, message: string): string {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:linear-gradient(135deg,#0d1540 0%,#000 60%);border:1px solid rgba(45,71,255,0.4);border-radius:16px 16px 0 0;padding:48px 40px;text-align:center;">
            <img src="${LOGO_URL}" alt="Centflow" style="height:64px;width:auto;object-fit:contain;margin-bottom:24px;"/>
            <h1 style="margin:0 0 8px;color:#fff;font-size:28px;font-weight:800;letter-spacing:-0.03em;line-height:1.1;">Enquiry Received.</h1>
            <p style="margin:0;color:rgba(255,255,255,0.45);font-size:13px;letter-spacing:0.1em;">We'll be in touch within 24 hours.</p>
          </td>
        </tr>
        <tr>
          <td style="background:#0d0d0d;border-left:1px solid rgba(45,71,255,0.15);border-right:1px solid rgba(45,71,255,0.15);padding:40px;">
            <p style="margin:0 0 24px;color:rgba(255,255,255,0.65);font-size:15px;line-height:1.7;">
              Hi ${name},<br/><br/>
              Thank you for reaching out to Centflow. We've received your enquiry and a member of our team will review your details and respond within 24 hours.
            </p>
            <p style="margin:0 0 12px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">Your Enquiry Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(45,71,255,0.2);border-radius:12px;margin-bottom:32px;">
              <tr><td style="padding:24px;">
                <table width="100%" cellpadding="0" cellspacing="4">
                  <tr>
                    <td style="color:rgba(255,255,255,0.3);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;padding-bottom:4px;width:140px;">Service</td>
                    <td style="color:#fff;font-size:13px;padding-bottom:4px;">${service}</td>
                  </tr>
                  <tr><td colspan="2" style="border-top:1px solid rgba(255,255,255,0.05);padding:8px 0;"></td></tr>
                  <tr>
                    <td style="color:rgba(255,255,255,0.3);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;padding-bottom:4px;">Phone</td>
                    <td style="color:#fff;font-size:13px;padding-bottom:4px;">${phone}</td>
                  </tr>
                  <tr><td colspan="2" style="border-top:1px solid rgba(255,255,255,0.05);padding:8px 0;"></td></tr>
                  <tr>
                    <td style="color:rgba(255,255,255,0.3);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;padding-bottom:4px;" valign="top">Details</td>
                    <td style="color:rgba(255,255,255,0.7);font-size:13px;line-height:1.6;padding-bottom:4px;">${message}</td>
                  </tr>
                </table>
              </td></tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(45,71,255,0.06);border:1px solid rgba(45,71,255,0.2);border-radius:12px;margin-bottom:32px;">
              <tr><td style="padding:28px 32px;text-align:center;">
                <p style="margin:0 0 6px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">Want to speak sooner?</p>
                <p style="margin:0 0 20px;color:#fff;font-size:16px;font-weight:700;">Book a 30-minute discovery call</p>
                <a href="https://calendar.app.google/nxhNSQ1mE7rXg7Lu7" style="display:inline-block;background:#2D47FF;color:#fff;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;padding:14px 36px;border-radius:100px;">
                  Book a Discovery Call
                </a>
              </td></tr>
            </table>
            <p style="margin:0;color:rgba(255,255,255,0.35);font-size:12px;line-height:1.6;">
              This email was sent because you submitted an enquiry on centflow-agency.com. We will only contact you in relation to your enquiry.
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#000;border:1px solid rgba(45,71,255,0.15);border-top:none;border-radius:0 0 16px 16px;padding:28px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td><img src="${LOGO_URL}" alt="Centflow" style="height:36px;width:auto;object-fit:contain;"/></td>
                <td align="right">
                  <p style="margin:0;color:rgba(255,255,255,0.2);font-size:10px;letter-spacing:0.15em;text-transform:uppercase;line-height:1.6;">
                    Growth Infrastructure<br/>enquiries@centflow-agency.com
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'https://centflow-agency.com',
  'https://www.centflow-agency.com',
  'http://localhost:3000',
  'http://localhost:3001',
];

function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input.replace(/<[^>]*>/g, '').replace(/[\r\n]{3,}/g, '\n\n').trim().slice(0, 2000);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  // Basic validation: at least 7 digits, allowed chars: 0-9, +, -, space, brackets
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

// ── Handler ───────────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin ?? '';
  if (ALLOWED_ORIGINS.includes(origin)) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const contentLength = parseInt(req.headers['content-length'] ?? '0', 10);
  if (contentLength > 16384) return res.status(413).json({ error: 'Request too large' });

  const name = sanitize(req.body?.name);
  const email = sanitize(req.body?.email);
  const phone = sanitize(req.body?.phone);
  const service = sanitize(req.body?.service) || 'Not specified';
  const message = sanitize(req.body?.message);

  if (!name || !email || !phone || !message) return res.status(400).json({ error: 'Missing required fields' });
  if (name.length < 2) return res.status(400).json({ error: 'Name too short' });
  if (!isValidEmail(email)) return res.status(400).json({ error: 'Invalid email address' });
  if (!isValidPhone(phone)) return res.status(400).json({ error: 'Invalid phone number' });
  if (message.length < 10) return res.status(400).json({ error: 'Message too short' });

  if (!CENTFLOW_EMAIL || !APP_PASSWORD) {
    console.error('[send-email] MISSING ENV VARS — GMAIL_USER or GMAIL_APP_PASSWORD not set in Vercel');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: CENTFLOW_EMAIL, pass: APP_PASSWORD },
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: `"Centflow Website" <${CENTFLOW_EMAIL}>`,
      to: CENTFLOW_EMAIL,
      replyTo: email,
      subject: `New Enquiry: ${name} — ${service}`,
      html: notifyTemplate(name, email, phone, service, message.replace(/\n/g, '<br/>')),
    });

    await transporter.sendMail({
      from: `"Centflow" <${CENTFLOW_EMAIL}>`,
      to: email,
      replyTo: CENTFLOW_EMAIL,
      subject: "We've received your enquiry — Centflow",
      html: confirmTemplate(name, service, phone, message.replace(/\n/g, '<br/>')),
    });

    return res.status(200).json({ success: true });
  } catch (err: unknown) {
    const e = err as { code?: string; responseCode?: number; response?: string; message?: string };
    console.error('[send-email] SMTP error:', { code: e?.code, responseCode: e?.responseCode, response: e?.response, message: e?.message });
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
