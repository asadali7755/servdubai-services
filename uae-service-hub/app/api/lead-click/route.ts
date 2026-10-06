import { NextResponse } from 'next/server'
import { Resend } from 'resend'

/**
 * Instant email alert when a visitor taps a WhatsApp or Call button.
 * A click is interest, not a confirmed lead — the visitor may not actually send a message.
 *
 * Env (Vercel): RESEND_API_KEY (already used by /api/contact),
 * optional LEAD_ALERT_EMAIL (recipient) and RESEND_FROM (verified sender).
 * Note: Resend's shared sender onboarding@resend.dev can only deliver to the
 * Resend account owner's own address — other recipients need a verified domain.
 */
const TO = process.env.LEAD_ALERT_EMAIL || 'marbleprodxb@gmail.com'
const FROM = process.env.RESEND_FROM || 'ServeDubai Alerts <onboarding@resend.dev>'
const BOT = /bot|crawl|spider|slurp|preview|lighthouse|headless|facebookexternalhit|whatsapp\//i
const recent = new Map<string, number>() // per-instance de-dupe of rapid repeat taps

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

export async function POST(req: Request) {
  const ua = req.headers.get('user-agent') ?? ''
  if (BOT.test(ua)) return new NextResponse(null, { status: 204 })

  let body: { method?: string; page?: string; text?: string } = {}
  try {
    body = JSON.parse(await req.text())
  } catch {
    return new NextResponse(null, { status: 400 })
  }
  const method = body.method === 'whatsapp' ? 'WhatsApp' : body.method === 'phone' ? 'Call' : null
  if (!method) return new NextResponse(null, { status: 400 })
  const page = String(body.page ?? '/').slice(0, 200)
  const text = String(body.text ?? '').slice(0, 80)

  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim()
  const key = `${ip}|${method}|${page}`
  const now = Date.now()
  if ((recent.get(key) ?? 0) > now - 120_000) return new NextResponse(null, { status: 204 })
  recent.set(key, now)
  if (recent.size > 500) for (const [k, t] of recent) if (t < now - 120_000) recent.delete(k)

  const city = decodeURIComponent(req.headers.get('x-vercel-ip-city') ?? '')
  const country = req.headers.get('x-vercel-ip-country') ?? ''
  const device = /mobile|iphone|android/i.test(ua) ? 'Mobile' : 'Desktop'
  const time = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
  const url = `https://servedubai.ae${page.startsWith('/') ? page : '/'}`

  const rows: [string, string][] = [
    ['Button', `${method}${text ? ` — “${text}”` : ''}`],
    ['Page', `<a href="${esc(url)}">${esc(page)}</a>`],
    ['Visitor location', esc([city, country].filter(Boolean).join(', ') || 'Unknown')],
    ['Device', device],
    ['Time (Dubai)', time],
  ]

  const resend = new Resend(process.env.RESEND_API_KEY ?? '')
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `${method} click on servedubai.ae — ${page}`,
    html: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;background:#f6f8f9;border-radius:12px">
      <h2 style="margin:0 0 6px;font-size:19px;color:#16202a">Someone tapped ${method} on your website</h2>
      <p style="margin:0 0 16px;font-size:13px;color:#5b6672">This is a click, not a confirmed message — check WhatsApp / missed calls.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${rows
        .map(([k, v]) => `<tr><td style="padding:9px 0;border-bottom:1px solid #dde3e7;color:#5b6672;width:140px">${k}</td><td style="padding:9px 0;border-bottom:1px solid #dde3e7;color:#16202a;font-weight:600">${k === 'Button' ? esc(v) : v}</td></tr>`)
        .join('')}</table>
    </div>`,
  })
  if (error) console.error('lead-click email error:', error)
  return new NextResponse(null, { status: error ? 502 : 204 })
}
