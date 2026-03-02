// ─────────────────────────────────────────────────────────────────────────────
// Centflow Email Templates
// Paste each HTML block into the corresponding EmailJS template body.
// Available template variables: {{name}}, {{email}}, {{service}}, {{message}}
// ─────────────────────────────────────────────────────────────────────────────

export const LOGO_URL =
    "https://res.cloudinary.com/dddvmez6s/image/upload/v1769032878/Image_13-01-2026_at_21.43-Photoroom_u2pmtm.png";

// ── 1. INTERNAL NOTIFICATION (to enquiry@centflow-agency.com) ─────────────────
export const NOTIFY_TEMPLATE_HTML = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#000;border:1px solid rgba(45,71,255,0.3);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
            <img src="${LOGO_URL}" alt="Centflow" style="height:60px;width:auto;object-fit:contain;" />
            <p style="margin:16px 0 0;color:rgba(255,255,255,0.4);font-size:10px;letter-spacing:0.4em;text-transform:uppercase;">New Enquiry Received</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#0d0d0d;border-left:1px solid rgba(45,71,255,0.15);border-right:1px solid rgba(45,71,255,0.15);padding:40px;">

            <p style="margin:0 0 8px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">From</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(255,255,255,0.06);border-radius:12px;margin-bottom:24px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0 0 4px;color:#fff;font-size:16px;font-weight:700;">{{name}}</p>
                  <p style="margin:0;color:#2D47FF;font-size:13px;">{{email}}</p>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 8px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">Service Requested</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(255,255,255,0.06);border-radius:12px;margin-bottom:24px;">
              <tr><td style="padding:16px 24px;">
                <p style="margin:0;color:#fff;font-size:14px;">{{service}}</p>
              </td></tr>
            </table>

            <p style="margin:0 0 8px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">Message</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(255,255,255,0.06);border-radius:12px;margin-bottom:32px;">
              <tr><td style="padding:20px 24px;">
                <p style="margin:0;color:rgba(255,255,255,0.75);font-size:14px;line-height:1.7;">{{message}}</p>
              </td></tr>
            </table>

            <!-- Reply CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td align="center">
                <a href="mailto:{{email}}" style="display:inline-block;background:#2D47FF;color:#fff;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;padding:16px 40px;border-radius:100px;">
                  Reply to {{name}}
                </a>
              </td></tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#000;border:1px solid rgba(45,71,255,0.15);border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:rgba(255,255,255,0.2);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;">Centflow Growth Infrastructure · enquiries@centflow-agency.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`;

// ── 2. BRANDED CONFIRMATION (to the person who enquired) ─────────────────────
export const CONFIRM_TEMPLATE_HTML = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0d1540 0%,#000 60%);border:1px solid rgba(45,71,255,0.4);border-radius:16px 16px 0 0;padding:48px 40px;text-align:center;">
            <img src="${LOGO_URL}" alt="Centflow" style="height:64px;width:auto;object-fit:contain;margin-bottom:24px;" />
            <h1 style="margin:0 0 8px;color:#fff;font-size:28px;font-weight:800;letter-spacing:-0.03em;line-height:1.1;">Enquiry Received.</h1>
            <p style="margin:0;color:rgba(255,255,255,0.45);font-size:13px;letter-spacing:0.1em;">We'll be in touch within 24 hours.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#0d0d0d;border-left:1px solid rgba(45,71,255,0.15);border-right:1px solid rgba(45,71,255,0.15);padding:40px;">

            <p style="margin:0 0 24px;color:rgba(255,255,255,0.65);font-size:15px;line-height:1.7;">
              Hi {{name}},<br/><br/>
              Thank you for reaching out to Centflow. We've received your enquiry and a member of our team will review your details and respond within 24 hours.
            </p>

            <!-- Enquiry Summary -->
            <p style="margin:0 0 12px;color:#2D47FF;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;">Your Enquiry Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid rgba(45,71,255,0.2);border-radius:12px;margin-bottom:32px;">
              <tr>
                <td style="padding:24px;">
                  <table width="100%" cellpadding="0" cellspacing="4">
                    <tr>
                      <td style="color:rgba(255,255,255,0.3);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;padding-bottom:4px;width:140px;">Service</td>
                      <td style="color:#fff;font-size:13px;padding-bottom:4px;">{{service}}</td>
                    </tr>
                    <tr><td colspan="2" style="border-top:1px solid rgba(255,255,255,0.05);padding:8px 0;"></td></tr>
                    <tr>
                      <td style="color:rgba(255,255,255,0.3);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;padding-bottom:4px;" valign="top">Details</td>
                      <td style="color:rgba(255,255,255,0.7);font-size:13px;line-height:1.6;padding-bottom:4px;">{{message}}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Discovery Call CTA -->
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

        <!-- Footer -->
        <tr>
          <td style="background:#000;border:1px solid rgba(45,71,255,0.15);border-top:none;border-radius:0 0 16px 16px;padding:28px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <img src="${LOGO_URL}" alt="Centflow" style="height:36px;width:auto;object-fit:contain;" />
                </td>
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
</body>
</html>
`;
