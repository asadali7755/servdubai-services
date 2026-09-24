/**
 * Unique intro-paragraph copy per (emirate, city, service) combo page.
 *
 * Every /[emirate]/[city]/[service] page used to build its intro paragraph
 * from one fixed template sentence with only the city/service name swapped
 * in — visually identical prose across every page for a service, which read
 * as duplicate content (client-flagged). This file holds a genuinely unique,
 * researched paragraph per combo instead. Falls back to the old template in
 * app/[emirate]/[city]/[service]/page.tsx for any combo not yet covered here.
 *
 * Key format: `${emirateSlug}-${citySlug}-${serviceSlug}`, e.g. 'dubai-marina-sofa-cleaning'.
 */

export interface ComboIntro {
  /** ~70-120 word intro paragraph for the combo page's intro card. */
  intro: string
  /** ~150-160 char meta description for <meta name="description"> — also unique per combo. */
  metaDescription: string
}

const comboIntros: Record<string, ComboIntro> = {}

export const getComboIntro = (emirateSlug: string, citySlug: string, serviceSlug: string): ComboIntro | undefined =>
  comboIntros[`${emirateSlug}-${citySlug}-${serviceSlug}`]

export default comboIntros
