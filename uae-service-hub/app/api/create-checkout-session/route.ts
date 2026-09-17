import { NextResponse } from 'next/server'
import { getStripe, QUOTE_FEE_AED_MINOR } from '@/lib/stripe'

export const runtime = 'nodejs'

/** Truncates free-text fields before they go into Stripe metadata (500-char value cap per key). */
const clip = (value: string, max = 450) =>
  value.length > max ? `${value.slice(0, max)}…` : value

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, service, message, returnPath } = body

    if (!name || !phone || !service || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const origin = req.headers.get('origin') ?? new URL(req.url).origin
    const path = typeof returnPath === 'string' && returnPath.startsWith('/') ? returnPath : '/'

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'aed',
            product_data: {
              name: 'Quote Request Fee',
              description: 'AED 50 — adjustable against your final booking',
            },
            unit_amount: QUOTE_FEE_AED_MINOR,
          },
          quantity: 1,
        },
      ],
      metadata: {
        name: clip(String(name)),
        phone: clip(String(phone)),
        service: clip(String(service)),
        message: clip(String(message)),
      },
      success_url: `${origin}${path}?quote=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${path}?quote=cancelled`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout session error:', err)
    return NextResponse.json({ error: 'Could not start checkout' }, { status: 500 })
  }
}
