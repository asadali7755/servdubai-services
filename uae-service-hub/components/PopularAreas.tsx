import { emirates } from '@/lib/data/emirates'
import { SERVICE_AREA_COMBOS, hasCombo } from '@/lib/data/serviceAreaCombos'
import { getServiceBySlug } from '@/lib/data/services'
import { getCityBySlug } from '@/lib/data/emirates'
import { getServiceHoverImage } from '@/lib/data/serviceGalleryImages'
import { HoverImageLink } from '@/components/ui/hover-image-link'

// Core services shown for every emirate — the ones customers actually search
// per-area for (sofa / carpet / villa / marble), matching the site's main
// service lineup rather than the full 12-service list.
const CORE_SERVICES = ['sofa-cleaning', 'carpet-cleaning', 'villa-deep-cleaning', 'marble-polishing']

// Deterministic shuffle so every (emirate, service) pill list gets its own
// mixed-up order — otherwise all 4 service blocks under an emirate show the
// exact same city sequence back to back, which reads as repetitive/templated.
// Seeded (not Math.random) so the order is stable across server/client
// renders and rebuilds instead of flickering or breaking hydration.
const seededShuffle = <T,>(items: T[], seed: string): T[] => {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0
    const j = h % (i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/** Cities (from emirates.ts) whose keyword pills we surface for each emirate's card. */
const EMIRATE_SHOWCASE_CITIES: Record<string, string[]> = {
  dubai: [], // Dubai pulls its real curated combo cities from SERVICE_AREA_COMBOS below
  sharjah: ['sharjah-city', 'al-nahda', 'al-majaz', 'al-qasimia', 'al-khan', 'al-taawun', 'muwaileh', 'abu-shagara', 'al-yarmook', 'al-nabba'],
  'abu-dhabi': ['abu-dhabi-city', 'khalifa-city', 'yas-island', 'mohamed-bin-zayed-city', 'al-shamkha', 'shakhbout-city', 'baniyas', 'al-reef'],
  ajman: ['ajman-city', 'al-nuaimiya', 'al-rashidiya', 'al-jerf', 'al-rawda', 'al-hamidiya', 'al-zahya', 'al-mowaihat', 'musherief'],
  'ras-al-khaimah': ['rak-city', 'al-hamra', 'al-nakheel', 'al-dhait', 'mina-al-arab', 'al-rams', 'digdaga', 'khatt'],
  fujairah: ['fujairah-city', 'kalba', 'al-faseel', 'al-sharyah', 'madab', 'merashid', 'qidfa'],
  'umm-al-quwain': ['uaq-city', 'falaj-al-mualla', 'al-salamah', 'al-ramlah', 'al-humrah', 'khor-al-beidah'],
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
                const rawCities = emirate.slug === 'dubai' ? dubaiCitiesByService[slug] ?? [] : cities ?? []
                const serviceCities = seededShuffle(rawCities, `${emirate.slug}-${slug}`)
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
                          <HoverImageLink
                            key={`${emirate.slug}-${citySlug}`}
                            href={href}
                            image={getServiceHoverImage(slug, citySlug)}
                            alt={`${shortName} in ${city.name}, ${emirate.name}`}
                            className="pa-pill"
                          >
                            <span className="pa-pill-arrow">→</span>
                            {shortName} in {city.name}
                          </HoverImageLink>
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
