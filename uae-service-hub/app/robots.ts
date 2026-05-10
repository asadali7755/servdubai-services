import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/data/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://servedubai.com/sitemap.xml',
  }
}
