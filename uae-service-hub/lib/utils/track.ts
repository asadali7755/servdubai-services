/**
 * Pushes lead events to Google Tag Manager's dataLayer (GTM-5MXKNSJ4).
 * In GTM, create a Custom Event trigger on `lead_click` / `generate_lead` and
 * forward it to GA4 (and Google Ads conversions if ads are running).
 */
type LeadMethod = 'whatsapp' | 'phone' | 'quote_form' | 'callback_form'

export function trackLead(method: LeadMethod, detail: Record<string, string> = {}) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({
    event: method === 'quote_form' || method === 'callback_form' ? 'generate_lead' : 'lead_click',
    lead_method: method,
    page_path: window.location.pathname,
    ...detail,
  })
}
