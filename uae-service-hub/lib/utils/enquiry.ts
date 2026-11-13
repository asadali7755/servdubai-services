import { SITE_CONFIG } from '@/lib/data/constants'
import { trackLead } from './track'

type EnquiryPayload = { name: string; phone: string; service: string; message: string }
type FormMethod = 'quote_form' | 'callback_form'

export const ENQUIRY_FAILED_MSG = `Not sent. Please WhatsApp or call ${SITE_CONFIG.phoneDisplay}.`

/**
 * Posts a lead to /api/contact. Returns true only when the server confirms the
 * email went out, so a form never shows "sent" for a lead that was lost.
 * Success pushes `generate_lead`; failure pushes `enquiry_failed` to GTM.
 */
export async function sendEnquiry(
  payload: EnquiryPayload,
  method: FormMethod,
  detail: Record<string, string> = {},
): Promise<boolean> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      trackLead(method, detail)
      return true
    }
  } catch {
    // network error: fall through to the failure path
  }
  if (typeof window !== 'undefined') {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event: 'enquiry_failed', lead_method: method, page_path: window.location.pathname })
  }
  return false
}
