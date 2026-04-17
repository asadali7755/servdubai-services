import { SITE_CONFIG } from '@/lib/data/constants'

export const getWhatsAppLink = (service?: string, city?: string): string => {
  const number = SITE_CONFIG.whatsappNumber.replace('+', '')
  let msg: string

  if (service && city) {
    msg = `Hello, I'm interested in ${service} in ${city}`
  } else if (service) {
    msg = `Hello, I'm interested in ${service}`
  } else {
    msg = `Hello, I'd like to know more about your services`
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`
}
