import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/data/constants'

export default function robots(): MetadataRoute.Robots {
  const base = SITE_CONFIG.siteUrl || 'https://uae-service-hub.vercel.app'
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  }
}
