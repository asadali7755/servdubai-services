/**
 * Distinct diagonal gradient per combo-page area, tinting the hero photo —
 * same idea as marblepro.ae/locations' per-city CITY_GRAD banners: each area
 * gets its own dark-to-lighter jewel-tone diagonal instead of one flat look
 * repeated across all 24 pages.
 */
export const CITY_GRADIENTS: Record<string, string> = {
  marina: 'linear-gradient(135deg, #1c2c4b 0%, #3a4a6b 50%, #5b6c8e 100%)',
  jlt: 'linear-gradient(135deg, #1c3a4b 0%, #3a556b 50%, #5b768e 100%)',
  downtown: 'linear-gradient(135deg, #2d2a3a 0%, #4a4658 50%, #6e6779 100%)',
  jumeirah: 'linear-gradient(135deg, #4a2c1c 0%, #6b4a3a 50%, #8e6c5b 100%)',
  'business-bay': 'linear-gradient(135deg, #1c4b4a 0%, #3a6b6a 50%, #5b8e8c 100%)',
  'palm-jumeirah': 'linear-gradient(135deg, #1c3a2f 0%, #3a5c4e 50%, #5b8072 100%)',
  'al-barsha': 'linear-gradient(135deg, #4b3a1c 0%, #6b553a 50%, #8e745b 100%)',
  'bur-dubai': 'linear-gradient(135deg, #3a1c1c 0%, #553a3a 50%, #745b5b 100%)',
  mirdif: 'linear-gradient(135deg, #2c1c4b 0%, #4a3a6b 50%, #6c5b8e 100%)',
  'umm-suqeim': 'linear-gradient(135deg, #1c334b 0%, #3a516b 50%, #5b748e 100%)',
}

export const DEFAULT_CITY_GRADIENT =
  'linear-gradient(135deg, #1c2c4b 0%, #3a4a6b 50%, #5b6c8e 100%)'

export const getCityGradient = (citySlug: string): string =>
  CITY_GRADIENTS[citySlug] ?? DEFAULT_CITY_GRADIENT
