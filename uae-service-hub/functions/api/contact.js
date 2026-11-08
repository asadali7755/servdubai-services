// Cloudflare Pages Function: POST /api/contact
// Emails a website lead through the Resend API. Replaces the Next.js route
// handler, which a static export cannot run. Set RESEND_API_KEY (and
// optionally ENQUIRY_TO / ENQUIRY_FROM) in the Pages project settings.

const ALLOWED_HOSTS = ['servedubai.ae', 'www.servedubai.ae', 'servedubai.com', 'www.servedubai.com', 'localhost', '127.0.0.1'];

// Best-effort per-isolate throttle.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (v) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : typeof v === 'number' ? String(v) : '');

function sameOrigin(request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    const host = new URL(origin).hostname;
    return ALLOWED_HOSTS.includes(host) || host.endsWith('.pages.dev');
  } catch {
    return false;
  }
}

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ ok: false, error: 'forbidden' }, 403);
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  if (rateLimited(ip)) return json({ ok: false, error: 'too_many_requests' }, 429);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }
  if (!body || typeof body !== 'object') return json({ ok: false, error: 'invalid_body' }, 400);
  if (clean(body.website, 200) || clean(body.company_website, 200)) return json({ ok: true }); // honeypot

  // Every submitted field is listed in the email, so the form can change
  // without this function changing.
  const rows = Object.entries(body)
    .filter(([k, v]) => !['website', 'company_website'].includes(k) && (typeof v === 'string' || typeof v === 'number'))
    .slice(0, 20)
    .map(([k, v]) => [escapeHtml(clean(k, 40)), escapeHtml(clean(v, 1500)) || '—']);
  if (!rows.length) return json({ ok: false, error: 'empty' }, 400);

  const type = clean(body.type, 60) || clean(body.service, 60) || 'Enquiry';
  const page = escapeHtml(clean(request.headers.get('referer'), 300) || '—');
  const time = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' });
  const tr = (k, v) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#666;width:130px;text-transform:capitalize;">${k}</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111;">${v}</td></tr>`;
  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:12px;border-top:4px solid #b8892d;">
      <div style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#b8892d;font-weight:700;">ServeDubai.ae</div>
      <h2 style="margin:0 0 24px;font-size:22px;color:#111;">New ${escapeHtml(type)}</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${rows.map(([k, v]) => tr(k, v)).join('')}
        ${tr('Page', page)}
        ${tr('Time (Dubai)', escapeHtml(time))}
      </table>
    </div>`;

  if (!env.RESEND_API_KEY) return json({ ok: false, error: 'email_not_configured' }, 503);
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.ENQUIRY_FROM || 'ServeDubai Website <onboarding@resend.dev>',
        to: [env.ENQUIRY_TO || 'marbleprodxb@gmail.com'],
        subject: `[ServeDubai] New ${type.replace(/[\r\n]/g, ' ')}`,
        html,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    return json({ ok: true, success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return json({ ok: false, success: false, error: 'send_failed' }, 502);
  }
}
