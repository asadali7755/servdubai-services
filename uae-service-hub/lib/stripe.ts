import Stripe from 'stripe'

let _stripe: Stripe | null = null

/**
 * Lazy singleton — constructing Stripe eagerly at module scope crashes
 * `next build`'s page-data collection whenever STRIPE_SECRET_KEY is unset
 * (the SDK validates the key in its constructor). Call this inside a route
 * handler instead, so a missing key only fails that request, not the build.
 */
export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2026-08-26.dahlia' })
  }
  return _stripe
}

/** AED 50.00 — Stripe amounts are in fils (AED is a standard 2-decimal currency). */
export const QUOTE_FEE_AED_MINOR = 5000
