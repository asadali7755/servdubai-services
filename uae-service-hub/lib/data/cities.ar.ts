/**
 * Arabic copy for the 64 area pages (/ar/[emirate]/[city]), written from
 * cityProfiles*.ts so every area page has its own text. Same claim rules as
 * services.ar.ts. Key format: `${emirateSlug}-${citySlug}`.
 */
import { AR_DUBAI } from './cities.ar.dubai'
import { AR_SHARJAH } from './cities.ar.sharjah'
import { AR_ABU_DHABI } from './cities.ar.abudhabi'
import { AR_NORTH } from './cities.ar.north'
import { AR_EAST } from './cities.ar.east'

export interface ArCityProfile {
  name: string
  tagline: string
  story: [string, string]
  picks: [{ service: string; why: string }, { service: string; why: string }, { service: string; why: string }]
  tips: [string, string, string]
  visit: string
}

const ALL: Record<string, ArCityProfile> = { ...AR_DUBAI, ...AR_SHARJAH, ...AR_ABU_DHABI, ...AR_NORTH, ...AR_EAST }

export const getArCity = (emirateSlug: string, citySlug: string): ArCityProfile | undefined =>
  ALL[`${emirateSlug}-${citySlug}`]
