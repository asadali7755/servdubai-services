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
    <section className="theme-emirates" style={{ background: '#212529', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div className="p-title" style={{ textAlign: 'center' }}>
          <div className="p-title-center">
            <h5>{t.emirates_section.label}</h5>
            <h2>{t.emirates_section.title}</h2>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {emirates.map((emirate) => (
            <Link
              key={emirate.id}
              href={`/${emirate.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div className="team-item" style={{ cursor: 'pointer' }}>
                <div className="team-body">
                  <div className="team-before">
                    <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{t.emirates_section.cities}</span>
                    {emirate.cities.slice(0, 5).map((city) => (
                      <span key={city.id}>{city.name}</span>
                    ))}
                    {emirate.cities.length > 5 && (
                      <span style={{ color: '#c9a84c' }}>+{emirate.cities.length - 5} {t.emirates_section.more}</span>
                    )}
                  </div>

                  <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
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
                    <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{t.emirates_section.areas}</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{emirate.cities.length}</span>
                    <span>{t.emirates_section.covered}</span>
                    <span style={{ marginTop: '8px', color: '#c9a84c', fontSize: '0.65rem' }}>{t.emirates_section.viewAll}</span>
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
