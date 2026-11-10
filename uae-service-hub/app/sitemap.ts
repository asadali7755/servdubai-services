export const revalidate = 0
export const dynamic = 'force-dynamic'

import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { SERVICE_AREA_COMBOS } from '@/lib/data/serviceAreaCombos'
import { blogPosts } from '@/lib/data/blog'
import { aiGuides } from '@/lib/data/aiGuides'
import { CAR_SHOWCASE } from '@/lib/data/carShowcase'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://servedubai.ae'
  // Fixed date of the last real content change. A lastmod that changes on every
  // request (new Date()) is ignored by Google; bump this when pages actually change.
  const now = new Date('2026-10-06')
  // Image sitemap entries: helps Google Images index the car showcase photos
  const carImgs = (filter?: string) =>
    CAR_SHOWCASE.filter((i) => !filter || i.service === filter).map((i) => `${base}${i.src}`)

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0, images: carImgs() },
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

  const guideRoutes: MetadataRoute.Sitemap = aiGuides.map((g) => ({
    url: `${base}/blog/${g.slug}`,
    lastModified: g.dateModified ?? g.datePublished,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    ...(s.slug.startsWith('car-') && carImgs(s.slug).length ? { images: carImgs(s.slug) } : {}),
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

  return [...staticRoutes, ...serviceRoutes, ...emirateRoutes, ...cityRoutes, ...comboRoutes, ...blogRoutes, ...guideRoutes]
}
