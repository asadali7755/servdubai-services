/**
 * Second layer of hand-written, per-area copy for the /[emirate]/[city] pages
 * (Oct 2026 redesign). cityContent.ts holds the original description, landmarks
 * and FAQs; this file adds the parts that used to be filled with the SAME
 * boilerplate on every area page (12 identical service cards, generic trust
 * bullets). Every field here is written for that one area only.
 *
 * Key format: `${emirateSlug}-${citySlug}` (same as cityContent.ts).
 */

export interface CityPick {
  /** service slug from lib/data/services.ts */
  service: string
  /** one sentence: why this service matters in THIS area */
  why: string
}

export interface CityProfile {
  /** short hero line, unique per area */
  tagline: string
  /** two short paragraphs — what wears out first here and how a visit runs */
  story: [string, string]
  /** the 3 services most worth booking in this area, with a local reason */
  picks: [CityPick, CityPick, CityPick]
  /** 3 practical care tips specific to the area's homes/climate */
  tips: [string, string, string]
  /** one line on access / timing / logistics for a visit here */
  visit: string
}

import { DUBAI_PROFILES } from './cityProfiles.dubai'
import { SHARJAH_PROFILES } from './cityProfiles.sharjah'
import { ABU_DHABI_PROFILES } from './cityProfiles.abudhabi'
import { NORTH_PROFILES } from './cityProfiles.north'

const ALL: Record<string, CityProfile> = {
  ...DUBAI_PROFILES,
  ...SHARJAH_PROFILES,
  ...ABU_DHABI_PROFILES,
  ...NORTH_PROFILES,
}

export const getCityProfile = (emirateSlug: string, citySlug: string): CityProfile | undefined =>
  ALL[`${emirateSlug}-${citySlug}`]
