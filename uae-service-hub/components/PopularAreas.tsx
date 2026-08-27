import Link from 'next/link'
import { SERVICE_AREA_COMBOS } from '@/lib/data/serviceAreaCombos'
import { getServiceBySlug } from '@/lib/data/services'
import { getCityBySlug } from '@/lib/data/emirates'

export default function PopularAreas() {
  const order: string[] = []
  const groups: Record<string, { emirate: string; city: string }[]> = {}
  for (const c of SERVICE_AREA_COMBOS) {
    if (!groups[c.service]) {
      groups[c.service] = []
      order.push(c.service)
    }
    groups[c.service].push({ emirate: c.emirate, city: c.city })
  }

  return (
    <div className="pa-container">
      {order.map((slug) => {
        const service = getServiceBySlug(slug)
        if (!service) return null
        const shortName = service.name.split(/[&]/)[0].trim()
        return (
          <div key={slug} className="pa-group">
            <h3 className="pa-group-title">
              {shortName} in Dubai
            </h3>
            <div className="pa-links">
              {groups[slug].map(({ emirate, city }) => {
                const c = getCityBySlug(emirate, city)
                if (!c) return null
                return (
                  <Link
                    key={`${emirate}-${city}`}
                    href={`/${emirate}/${city}/${slug}`}
                    className="pa-pill"
                  >
                    <span className="pa-pill-arrow">→</span>
                    {shortName} in {c.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
