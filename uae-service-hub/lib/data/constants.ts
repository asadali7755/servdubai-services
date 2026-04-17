export const SITE_CONFIG = {
  siteName: 'Al Haya Cleaning Services',
  phone: '0547199189',
  whatsapp: '+971547199189',
  whatsappDisplay: 'Call or WhatsApp: 0547199189',
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim(),
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+971547199189').trim(),
} as const
