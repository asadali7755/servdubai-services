export const SITE_CONFIG = {
  siteName: 'Al Haya Cleaning Services',
  phone: '+971551275545',
  phoneDisplay: '+971 55 127 5545',
  whatsapp: '+971551275545',
  whatsappDisplay: 'Call or WhatsApp: +971 55 127 5545',
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim(),
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+971551275545').trim(),
} as const
