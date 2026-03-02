import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { NOTIFY_TEMPLATE_HTML, CONFIRM_TEMPLATE_HTML } from '../utils/emailTemplates';

const CENTFLOW_EMAIL = process.env.GMAIL_USER!;
const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD!;

// ── Allowed origins ──────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
    'https://centflow-agency.com',
    'https://www.centflow-agency.com',
    // Allow localhost during development
    'http://localhost:3000',
    'http://localhost:3001',
];

// ── Sanitization: strip HTML tags and trim whitespace ────────────────────────
function sanitize(input: unknown): string {
    if (typeof input !== 'string') return '';
    return input
        .replace(/<[^>]*>/g, '')     // strip HTML tags
        .replace(/[\r\n]{3,}/g, '\n\n') // collapse excessive newlines
        .trim()
        .slice(0, 2000);             // hard cap on length
}

// ── Email format validation ───────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // ── CORS ──────────────────────────────────────────────────────────────────
    const origin = req.headers.origin ?? '';
    if (ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Vary', 'Origin');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // ── Request size guard (reject bodies > 16 KB) ────────────────────────────
    const contentLength = parseInt(req.headers['content-length'] ?? '0', 10);
    if (contentLength > 16384) {
        return res.status(413).json({ error: 'Request too large' });
    }

    // ── Sanitize and validate inputs ──────────────────────────────────────────
    const name = sanitize(req.body?.name);
    const email = sanitize(req.body?.email);
    const service = sanitize(req.body?.service);
    const message = sanitize(req.body?.message);

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (name.length < 2) {
        return res.status(400).json({ error: 'Name too short' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    if (message.length < 10) {
        return res.status(400).json({ error: 'Message too short' });
    }

    // ── Env var guard ─────────────────────────────────────────────────────────
    if (!CENTFLOW_EMAIL || !APP_PASSWORD) {
        console.error('Missing email credentials in environment');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: CENTFLOW_EMAIL, pass: APP_PASSWORD },
    });

    // Inject sanitized values into HTML templates
    const injectVars = (html: string) =>
        html
            .replace(/\{\{name\}\}/g, name)
            .replace(/\{\{email\}\}/g, email)
            .replace(/\{\{service\}\}/g, service || 'Not specified')
            .replace(/\{\{message\}\}/g, message.replace(/\n/g, '<br/>'));

    try {
        // 1. Internal notification → enquiries@centflow-agency.com
        await transporter.sendMail({
            from: `"Centflow Website" <${CENTFLOW_EMAIL}>`,
            to: CENTFLOW_EMAIL,
            replyTo: email,
            subject: `New Enquiry: ${name} — ${service || 'General'}`,
            html: injectVars(NOTIFY_TEMPLATE_HTML),
        });

        // 2. Branded confirmation → submitter
        await transporter.sendMail({
            from: `"Centflow" <${CENTFLOW_EMAIL}>`,
            to: email,
            replyTo: CENTFLOW_EMAIL,
            subject: "We've received your enquiry — Centflow",
            html: injectVars(CONFIRM_TEMPLATE_HTML),
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        // Log full error server-side, return only generic message to client
        console.error('Email send error:', err);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
