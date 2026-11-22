import { SITE_CONFIG } from '@/lib/data/constants'
import { AR_BRAND_SHORT } from '@/lib/data/services.ar'

/** WhatsApp link with an Arabic message, for the /ar pages. */
export const arWhatsAppLink = (service?: string, area?: string): string => {
  const number = SITE_CONFIG.whatsappNumber.replace('+', '')
  const what = service ? `خدمة ${service}` : 'خدمة تنظيف'
  const where = area ? ` في ${area}` : ''
  const msg = `مرحباً ${AR_BRAND_SHORT}، أريد حجز ${what}${where}. أرجو إرسال السعر والمواعيد المتاحة.`
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`
}
