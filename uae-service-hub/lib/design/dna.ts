/**
 * "Page DNA" — deterministic per-page design choices (Oct 2026 redesign).
 *
 * Every location / service page picks its own palette, hero style and block
 * styles from its position in the site, using a mixed-radix index so:
 *   - neighbouring pages (e.g. two areas in the same emirate) never share a
 *     hero style or palette, and
 *   - no two pages of the same type share the exact same combination.
 * The choice is stable (same URL → same design on every build).
 */
import type { CSSProperties } from 'react'

export interface Palette {
  name: string
  /** page background */
  bg: string
  /** primary accent */
  a: string
  /** darker accent */
  a2: string
  /** deep tone for dark sections */
  deep: string
  /** second deep tone for gradients */
  deep2: string
}

export const PALETTES: Palette[] = [
  { name: 'gold', bg: '#faf7f0', a: '#b8902f', a2: '#7a5c17', deep: '#17140d', deep2: '#3a2f17' },
  { name: 'lagoon', bg: '#f1f8f7', a: '#0f8b8d', a2: '#0a5e60', deep: '#062a2b', deep2: '#0e4a4b' },
  { name: 'desert-rose', bg: '#fbf3ef', a: '#c25b3a', a2: '#8a3c22', deep: '#2b130b', deep2: '#5a2a18' },
  { name: 'emerald', bg: '#f0f7f2', a: '#2e8b57', a2: '#1d5f3b', deep: '#0b2616', deep2: '#1a4a2e' },
  { name: 'royal', bg: '#f2f4fb', a: '#3355d1', a2: '#1f3591', deep: '#0a1433', deep2: '#1b2c66' },
  { name: 'plum', bg: '#f8f2f8', a: '#8e3f8a', a2: '#5e285b', deep: '#230e22', deep2: '#47204a' },
  { name: 'saffron', bg: '#fdf7ea', a: '#c98410', a2: '#8d5b07', deep: '#261803', deep2: '#5a3a0a' },
  { name: 'slate-mint', bg: '#f2f6f5', a: '#2f7d6d', a2: '#1f5449', deep: '#0f1f1b', deep2: '#23423b' },
]

export const HERO_STYLES = ['split3d', 'fullbleed', 'typo', 'stack', 'orbit', 'mapgrid'] as const
export const SERVICE_STYLES = ['bento', 'rows', 'flip'] as const
export const FAQ_STYLES = ['accordion', 'columns', 'cards'] as const
export const TIP_STYLES = ['checklist', 'notes', 'timeline'] as const
export const CTA_STYLES = ['band', 'card3d', 'split'] as const
export const LANDMARK_STYLES = ['marquee', 'cloud', 'grid'] as const

export type HeroStyle = (typeof HERO_STYLES)[number]
export type ServiceStyle = (typeof SERVICE_STYLES)[number]
export type FaqStyle = (typeof FAQ_STYLES)[number]
export type TipStyle = (typeof TIP_STYLES)[number]
export type CtaStyle = (typeof CTA_STYLES)[number]
export type LandmarkStyle = (typeof LANDMARK_STYLES)[number]

export interface PageDna {
  index: number
  palette: Palette
  hero: HeroStyle
  services: ServiceStyle
  faq: FaqStyle
  tips: TipStyle
  cta: CtaStyle
  landmarks: LandmarkStyle
  /** which section ordering to use (page decides what each order means) */
  order: number
  /** display font for headings on this page */
  font: 'serif' | 'sans' | 'display'
}

const KIND_OFFSET: Record<string, number> = { city: 0, combo: 3, emirate: 5, service: 1 }

export function makeDna(kind: 'city' | 'combo' | 'emirate' | 'service', index: number): PageDna {
  const k = KIND_OFFSET[kind] ?? 0
  const i = index
  return {
    index: i,
    // step of 3 through 8 palettes → neighbours always differ, full cycle every 8 pages
    palette: PALETTES[(i * 3 + k) % PALETTES.length],
    hero: HERO_STYLES[(i + k) % HERO_STYLES.length],
    services: SERVICE_STYLES[Math.floor(i / 6) % 3],
    faq: FAQ_STYLES[Math.floor(i / 18) % 3 === 0 ? i % 3 : (i + 1) % 3],
    tips: TIP_STYLES[(i + Math.floor(i / 3)) % 3],
    cta: CTA_STYLES[(i * 2 + k) % 3],
    landmarks: LANDMARK_STYLES[(i + 2) % 3],
    order: (i + Math.floor(i / 6)) % 4,
    font: (['serif', 'sans', 'display'] as const)[(i + Math.floor(i / 4)) % 3],
  }
}

/** CSS variables for a page wrapper. */
export function dnaStyle(dna: PageDna): CSSProperties {
  const p = dna.palette
  return {
    '--d-bg': p.bg,
    '--d-a': p.a,
    '--d-a2': p.a2,
    '--d-deep': p.deep,
    '--d-deep2': p.deep2,
  } as CSSProperties
}

/** Small deterministic hash for picking images / pin positions. */
export function hash(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  return h
}
