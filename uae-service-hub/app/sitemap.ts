import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { SITE_CONFIG } from '@/lib/data/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.siteUrl || 'https://uae-service-hub.vercel.app'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const emirateRoutes: MetadataRoute.Sitemap = emirates.map((e) => ({
    url: `${base}/${e.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const cityRoutes: MetadataRoute.Sitemap = emirates.flatMap((e) =>
    e.cities.map((c) => ({
      url: `${base}/${e.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticRoutes, ...serviceRoutes, ...emirateRoutes, ...cityRoutes]
}
