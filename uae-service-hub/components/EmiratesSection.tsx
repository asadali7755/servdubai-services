'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Emirate } from '@/lib/data/emirates'
import { useLocale } from '@/lib/i18n/LanguageProvider'
import translations from '@/lib/i18n/translations'

export default function EmiratesSection({ emirates }: { emirates: Emirate[] }) {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <section className="theme-emirates emir-section">
      <div className="emir-container">

        <div className="p-title text-center">
          <div className="p-title-center">
            <h5>{t.emirates_section.label}</h5>
            <h2>{t.emirates_section.title}</h2>
          </div>
        </div>

        <div className="emir-grid">
          {emirates.map((emirate) => (
            <Link
              key={emirate.id}
              href={`/${emirate.slug}`}
              className="emir-link"
            >
              <div className="team-item" style={{ cursor: 'pointer' }}>
                <div className="team-body">
                  <div className="team-before">
                    <span className="emir-gold-sm">{t.emirates_section.cities}</span>
                    {emirate.cities.slice(0, 5).map((city) => (
                      <span key={city.id}>{city.name}</span>
                    ))}
                    {emirate.cities.length > 5 && (
                      <span style={{ color: '#c9a84c' }}>+{emirate.cities.length - 5} {t.emirates_section.more}</span>
                    )}
                  </div>

                  <div className="emir-img-wrap">
                    <Image
                      src={emirate.image}
                      alt={emirate.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 220px"
                      style={{ transition: 'transform 0.4s ease' }}
                    />
                  </div>

                  <div className="team-after">
                    <span className="emir-gold-sm">{t.emirates_section.areas}</span>
                    <span className="emir-areas-count">{emirate.cities.length}</span>
                    <span>{t.emirates_section.covered}</span>
                    <span className="emir-view-all">{t.emirates_section.viewAll}</span>
                  </div>
                </div>

                <div className="team-name">
                  <h5>{t.emirateNames[emirate.slug as keyof typeof t.emirateNames] ?? emirate.name}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
