import Link from 'next/link'
import { emirates } from '@/lib/data/emirates'
import { SERVICE_AREA_COMBOS, hasCombo } from '@/lib/data/serviceAreaCombos'
import { getServiceBySlug } from '@/lib/data/services'
import { getCityBySlug } from '@/lib/data/emirates'

// Core services shown for every emirate — the ones customers actually search
// per-area for (sofa / carpet / villa / marble), matching the site's main
// service lineup rather than the full 12-service list.
const CORE_SERVICES = ['sofa-cleaning', 'carpet-cleaning', 'villa-deep-cleaning', 'marble-polishing']

/** Cities (from emirates.ts) whose keyword pills we surface for each emirate's card. */
const EMIRATE_SHOWCASE_CITIES: Record<string, string[]> = {
  dubai: [], // Dubai pulls its real curated combo cities from SERVICE_AREA_COMBOS below
  sharjah: ['sharjah-city', 'al-nahda', 'al-majaz'],
  'abu-dhabi': ['abu-dhabi-city', 'khalifa-city', 'yas-island'],
  ajman: ['ajman-city', 'al-nuaimiya', 'al-rashidiya'],
  'ras-al-khaimah': ['rak-city', 'al-hamra', 'al-nakheel'],
  fujairah: ['fujairah-city', 'kalba'],
  'umm-al-quwain': ['uaq-city', 'falaj-al-mualla'],
}

export default function PopularAreas() {
  // Dubai keeps its real curated (service -> cities) combos, since every one
  // of those links to a dedicated, already-indexed /dubai/[city]/[service] page.
  const dubaiCitiesByService: Record<string, string[]> = {}
  for (const c of SERVICE_AREA_COMBOS) {
    if (!dubaiCitiesByService[c.service]) dubaiCitiesByService[c.service] = []
    dubaiCitiesByService[c.service].push(c.city)
  }

  return (
    <div className="pa-container">
      {emirates.map((emirate) => {
        const cities =
          emirate.slug === 'dubai'
            ? null // handled per-service below from the curated combos
            : EMIRATE_SHOWCASE_CITIES[emirate.slug] ?? []

        return (
          <div key={emirate.slug} className="pa-emirate-group">
            <h3 className="pa-emirate-title">Cleaning Services {emirate.name}</h3>
            <div className="pa-container pa-emirate-services">
              {CORE_SERVICES.map((slug) => {
                const service = getServiceBySlug(slug)
                if (!service) return null
                const shortName = service.name.split(/[&]/)[0].trim()
                const serviceCities = emirate.slug === 'dubai' ? dubaiCitiesByService[slug] ?? [] : cities ?? []
                if (serviceCities.length === 0) return null

                return (
                  <div key={slug} className="pa-group">
                    <h4 className="pa-group-title">
                      {shortName} in {emirate.name}
                    </h4>
                    <div className="pa-links">
                      {serviceCities.map((citySlug) => {
                        const city = getCityBySlug(emirate.slug, citySlug)
                        if (!city) return null
                        const href = hasCombo(emirate.slug, citySlug, slug)
                          ? `/${emirate.slug}/${citySlug}/${slug}`
                          : `/${emirate.slug}/${citySlug}`
                        return (
                          <Link key={`${emirate.slug}-${citySlug}`} href={href} className="pa-pill">
                            <span className="pa-pill-arrow">→</span>
                            {shortName} in {city.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
