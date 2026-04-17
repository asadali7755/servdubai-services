export const SITE_CONFIG = {
  siteName: 'Al Haya Cleaning Services',
  phone: '0551275545',
  whatsapp: '+971551275545',
  whatsappDisplay: 'Call or WhatsApp: 0551275545',
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim(),
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+971551275545').trim(),
} as const
