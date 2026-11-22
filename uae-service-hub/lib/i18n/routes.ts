import { arServices } from '@/lib/data/services.ar'
import { emirates } from '@/lib/data/emirates'
import type { Locale } from './translations'

/**
 * Which English pages have an Arabic version under /ar. Only these get an
 * hreflang pair and a language switch to the same page; every other page
 * (blog, service-by-area pages, websites) stays English-only.
 */
const AR_SERVICE_SLUGS = new Set(arServices.map((s) => s.slug))
const AR_STATIC = new Set(['/contact', '/about', '/areas', '/gallery'])
const EMIRATE_SLUGS = new Set(emirates.map((e) => e.slug))
const CITY_PATHS = new Set(emirates.flatMap((e) => e.cities.map((c) => `/${e.slug}/${c.slug}`)))

const stripSlash = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p)

export function isArPath(path: string): boolean {
  return path === '/ar' || path.startsWith('/ar/')
}

/** The /ar URL of an English page, or null when it has no Arabic version. */
export function arPathFor(enPath: string): string | null {
  const p = stripSlash(enPath)
  if (p === '/') return '/ar'
  if (AR_STATIC.has(p)) return `/ar${p}`
  const m = p.match(/^\/services\/([^/]+)$/)
  if (m && AR_SERVICE_SLUGS.has(m[1])) return `/ar/services/${m[1]}`
  const seg = p.split('/').filter(Boolean)
  if (seg.length === 1 && EMIRATE_SLUGS.has(seg[0])) return `/ar${p}`
  if (seg.length === 2 && CITY_PATHS.has(p)) return `/ar${p}`
  return null
}

/** The English URL of an /ar page. */
export function enPathFor(arPath: string): string {
  const p = stripSlash(arPath)
  if (p === '/ar') return '/'
  return p.replace(/^\/ar/, '')
}

/** Link target for the current language: the /ar version where one exists. */
export function localHref(enPath: string, locale: Locale): string {
  if (locale !== 'ar') return enPath
  return arPathFor(enPath) ?? enPath
}

/** Every Arabic path, for the sitemap. */
export function allArPaths(): string[] {
  return [
    '/ar',
    ...[...AR_STATIC].map((p) => `/ar${p}`),
    ...arServices.map((s) => `/ar/services/${s.slug}`),
    ...emirates.map((e) => `/ar/${e.slug}`),
    ...[...CITY_PATHS].map((p) => `/ar${p}`),
  ]
}
