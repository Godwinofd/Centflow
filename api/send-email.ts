import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { NOTIFY_TEMPLATE_HTML, CONFIRM_TEMPLATE_HTML } from '../utils/emailTemplates';

const CENTFLOW_EMAIL = process.env.GMAIL_USER!;
const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD!;

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS
    const origin = req.headers.origin ?? '';
    if (ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Vary', 'Origin');

    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const contentLength = parseInt(req.headers['content-length'] ?? '0', 10);
    if (contentLength > 16384) return res.status(413).json({ error: 'Request too large' });

    const name = sanitize(req.body?.name);
    const email = sanitize(req.body?.email);
    const service = sanitize(req.body?.service);
    const message = sanitize(req.body?.message);

    if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });
    if (name.length < 2) return res.status(400).json({ error: 'Name too short' });
    if (!isValidEmail(email)) return res.status(400).json({ error: 'Invalid email address' });
    if (message.length < 10) return res.status(400).json({ error: 'Message too short' });

    if (!CENTFLOW_EMAIL || !APP_PASSWORD) {
        console.error('[send-email] MISSING ENV VARS — GMAIL_USER or GMAIL_APP_PASSWORD not set');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    // Explicit SMTP config (more reliable than service:'gmail' in serverless)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: CENTFLOW_EMAIL,
            pass: APP_PASSWORD,
        },
    });

    const injectVars = (html: string) =>
        html
            .replace(/\{\{name\}\}/g, name)
            .replace(/\{\{email\}\}/g, email)
            .replace(/\{\{service\}\}/g, service || 'Not specified')
            .replace(/\{\{message\}\}/g, message.replace(/\n/g, '<br/>'));

    try {
        // Verify SMTP connection before sending
        await transporter.verify();

        await transporter.sendMail({
            from: `"Centflow Website" <${CENTFLOW_EMAIL}>`,
            to: CENTFLOW_EMAIL,
            replyTo: email,
            subject: `New Enquiry: ${name} — ${service || 'General'}`,
            html: injectVars(NOTIFY_TEMPLATE_HTML),
        });

        await transporter.sendMail({
            from: `"Centflow" <${CENTFLOW_EMAIL}>`,
            to: email,
            replyTo: CENTFLOW_EMAIL,
            subject: "We've received your enquiry — Centflow",
            html: injectVars(CONFIRM_TEMPLATE_HTML),
        });

        return res.status(200).json({ success: true });
    } catch (err: unknown) {
        // Log the full SMTP error server-side for Vercel function logs
        const smtpErr = err as { code?: string; responseCode?: number; response?: string; message?: string };
        console.error('[send-email] SMTP error:', {
            code: smtpErr?.code,
            responseCode: smtpErr?.responseCode,
            response: smtpErr?.response,
            message: smtpErr?.message,
        });
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
