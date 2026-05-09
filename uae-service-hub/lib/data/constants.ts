export const SITE_CONFIG = {
  siteName: 'Al Haya Cleaning Services',
  phone: '+971547199189',
  phoneDisplay: '+971-54-719-9189',
  whatsapp: '+97154719189',
  whatsappDisplay: 'Call or WhatsApp: +971-54-719-9189',
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim(),
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+97154719189').trim(),
} as const
