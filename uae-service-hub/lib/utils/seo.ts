import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/data/constants'

export interface SeoOptions {
  title: string
  description: string
  path: string
  imageUrl?: string
}

export const buildMetadata = (options: SeoOptions): Metadata => {
  const { title, description, path, imageUrl } = options
  const url = `${SITE_CONFIG.siteUrl}${path}`
  const ogImage = imageUrl ?? `${SITE_CONFIG.siteUrl}/images/hero/slide-1.jpg`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export const buildLocalBusinessSchema = (options: {
  name?: string
  service?: string
  city?: string
  emirate?: string
}): Record<string, unknown> => {
  const areaServed = options.city && options.emirate
    ? [{ '@type': 'City', name: options.city }, { '@type': 'State', name: options.emirate }]
    : ['Dubai', 'Sharjah', 'Abu Dhabi', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map(
        (n) => ({ '@type': 'State', name: n })
      )

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: options.name ?? SITE_CONFIG.siteName,
    description: options.service
      ? `Professional ${options.service} service in UAE`
      : 'Professional cleaning and restoration services across UAE',
    telephone: SITE_CONFIG.phone,
    url: SITE_CONFIG.siteUrl,
    areaServed,
    priceRange: '$$',
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Credit Card',
    openingHours: 'Mo-Su 08:00-20:00',
  }
}

export const buildBreadcrumbSchema = (
  crumbs: Array<{ name: string; url: string }>
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.name,
    item: `${SITE_CONFIG.siteUrl}${crumb.url}`,
  })),
})
