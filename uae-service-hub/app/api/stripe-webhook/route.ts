import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'
import { notifyLead } from '@/lib/leadNotify'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * The sole trigger for a paid-quote lead notification. The client-side
 * success redirect (?quote=success) is cosmetic only — it never sends the
 * lead itself, so a user can't fake a notification by visiting that URL
 * without actually paying.
 */
export async function POST(req: Request) {
  const rawBody = await req.text()
  const signature = req.headers.get('stripe-signature')

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(rawBody, signature!, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const { name, phone, service, message } = session.metadata ?? {}

    if (name && phone && service && message) {
      await notifyLead({ name, phone, service, message })
    } else {
      console.error('Stripe webhook: checkout.session.completed missing expected metadata', session.id)
    }
  }

  return NextResponse.json({ received: true })
}
