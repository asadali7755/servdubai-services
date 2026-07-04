export const revalidate = 0
export const dynamic = 'force-dynamic'

import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { SERVICE_AREA_COMBOS } from '@/lib/data/serviceAreaCombos'
import { blogPosts } from '@/lib/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://servedubai.ae'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/areas`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/websites`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.dateModified ?? p.datePublished,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

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
    priority: 0.8,
  }))

  const cityRoutes: MetadataRoute.Sitemap = emirates.flatMap((e) =>
    e.cities.map((c) => ({
      url: `${base}/${e.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }))
  )

  // Service × area combo pages (e.g. /dubai/marina/sofa-cleaning) — high-intent long-tail
  const comboRoutes: MetadataRoute.Sitemap = SERVICE_AREA_COMBOS.map((c) => ({
    url: `${base}/${c.emirate}/${c.city}/${c.service}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...serviceRoutes, ...emirateRoutes, ...cityRoutes, ...comboRoutes, ...blogRoutes]
}
