import { SITE_CONFIG } from '@/lib/data/constants'

/**
 * Generates a WhatsApp deep-link with a pre-filled area-specific message.
 *
 * WHY: Including the city/service in the message lets the business owner
 * immediately identify WHICH area the lead is coming from — without asking.
 * This is the tracking mechanism mentioned in the SEO brief.
 *
 * Message format precedence:
 *  1. service + city  → booking intent for specific service in specific area
 *  2. service only    → booking intent for specific service
 *  3. city only       → general enquiry from specific area (CTA buttons)
 *  4. none            → generic enquiry (fallback)
 */
export const getWhatsAppLink = (service?: string, city?: string): string => {
  const number = SITE_CONFIG.whatsappNumber.replace('+', '')
  let msg: string

  if (service && city) {
    msg = `Hi Al Haya, I want to book ${service} in ${city}. Please share pricing and available time slots.`
  } else if (service) {
    msg = `Hi Al Haya, I want to book ${service}. Please share your pricing and available slots.`
  } else if (city) {
    msg = `Hi Al Haya, I want to book a cleaning service in ${city}. Please share your services and pricing.`
  } else {
    msg = `Hi Al Haya, I need cleaning services. Please contact me with details and pricing.`
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`
}
