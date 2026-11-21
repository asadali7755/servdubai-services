import { arServices } from '@/lib/data/services.ar'
import type { Locale } from './translations'

/**
 * Which English pages have an Arabic version under /ar. Only these get an
 * hreflang pair and a language switch to the same page; every other page
 * stays English-only.
 */
const AR_SERVICE_SLUGS = new Set(arServices.map((s) => s.slug))

const stripSlash = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p)

export function isArPath(path: string): boolean {
  return path === '/ar' || path.startsWith('/ar/')
}

/** The /ar URL of an English page, or null when it has no Arabic version. */
export function arPathFor(enPath: string): string | null {
  const p = stripSlash(enPath)
  if (p === '/') return '/ar'
  if (p === '/contact') return '/ar/contact'
  const m = p.match(/^\/services\/([^/]+)$/)
  if (m && AR_SERVICE_SLUGS.has(m[1])) return `/ar/services/${m[1]}`
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
  return ['/ar', '/ar/contact', ...arServices.map((s) => `/ar/services/${s.slug}`)]
}
