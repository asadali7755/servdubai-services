// Cloudflare Pages Function: POST /api/lead-click
// Instant email alert when a visitor taps a WhatsApp or Call button (sent by
// components/LeadTracker.tsx with sendBeacon). A click is interest, not a
// confirmed lead. Replaces the Next.js route handler.
// Env: RESEND_API_KEY, optional LEAD_ALERT_EMAIL and RESEND_FROM.
const BOT = /bot|crawl|spider|slurp|preview|lighthouse|headless|facebookexternalhit|whatsapp\//i;
const recent = new Map(); // per-isolate de-dupe of rapid repeat taps

const esc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export async function onRequestPost({ request, env }) {
  const ua = request.headers.get('user-agent') ?? '';
  if (BOT.test(ua)) return new Response(null, { status: 204 });

  let body = {};
  try {
    body = JSON.parse(await request.text());
  } catch {
    return new Response(null, { status: 400 });
  }
  const method = body.method === 'whatsapp' ? 'WhatsApp' : body.method === 'phone' ? 'Call' : null;
  if (!method) return new Response(null, { status: 400 });
  const page = String(body.page ?? '/').slice(0, 200);
  const text = String(body.text ?? '').slice(0, 80);

  const ip = request.headers.get('cf-connecting-ip') ?? '';
  const key = `${ip}|${method}|${page}`;
  const now = Date.now();
  if ((recent.get(key) ?? 0) > now - 120_000) return new Response(null, { status: 204 });
  recent.set(key, now);
  if (recent.size > 500) for (const [k, t] of recent) if (t < now - 120_000) recent.delete(k);

  const city = request.cf?.city ?? '';
  const country = request.cf?.country ?? '';
  const device = /mobile|iphone|android/i.test(ua) ? 'Mobile' : 'Desktop';
  const time = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' });
  const url = `https://servedubai.ae${page.startsWith('/') ? page : '/'}`;

  const rows = [
    ['Button', esc(`${method}${text ? ` — “${text}”` : ''}`)],
    ['Page', `<a href="${esc(url)}">${esc(page)}</a>`],
    ['Visitor location', esc([city, country].filter(Boolean).join(', ') || 'Unknown')],
    ['Device', device],
    ['Time (Dubai)', time],
  ];

  if (!env.RESEND_API_KEY) return new Response(null, { status: 503 });
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.RESEND_FROM || 'ServeDubai Alerts <onboarding@resend.dev>',
      to: [env.LEAD_ALERT_EMAIL || 'marbleprodxb@gmail.com'],
      subject: `${method} click on servedubai.ae — ${page}`,
      html: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;background:#f6f8f9;border-radius:12px">
      <h2 style="margin:0 0 6px;font-size:19px;color:#16202a">Someone tapped ${method} on your website</h2>
      <p style="margin:0 0 16px;font-size:13px;color:#5b6672">This is a click, not a confirmed message — check WhatsApp / missed calls.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${rows
        .map(([k, v]) => `<tr><td style="padding:9px 0;border-bottom:1px solid #dde3e7;color:#5b6672;width:140px">${k}</td><td style="padding:9px 0;border-bottom:1px solid #dde3e7;color:#16202a;font-weight:600">${v}</td></tr>`)
        .join('')}</table>
    </div>`,
    }),
  });
  if (!res.ok) console.error('lead-click email error:', res.status, await res.text());
  return new Response(null, { status: res.ok ? 204 : 502 });
}
