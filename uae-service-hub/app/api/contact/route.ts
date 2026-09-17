import { NextResponse } from 'next/server'
import { notifyLead } from '@/lib/leadNotify'

/**
 * Free lead intake — used by the "Request a Call" modal (stays free) and
 * anything else that isn't the paid quote form. The paid quote flow goes
 * through /api/create-checkout-session instead and only reaches a lead
 * notification via the Stripe webhook, once payment is confirmed.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, service, message } = body

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    await notifyLead({ name, phone, service, message })

    return NextResponse.json(
      { success: true },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
