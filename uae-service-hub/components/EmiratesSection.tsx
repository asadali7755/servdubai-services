import Image from 'next/image'
import Link from 'next/link'
import type { Emirate } from '@/lib/data/emirates'

export default function EmiratesSection({ emirates }: { emirates: Emirate[] }) {
  return (
    <section className="theme-emirates" style={{ background: '#212529', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Poseify title */}
        <div className="p-title" style={{ textAlign: 'center' }}>
          <div className="p-title-center">
            <h5>Coverage</h5>
            <h1>We Serve All UAE</h1>
          </div>
        </div>

        {/* Team-item grid — 4 columns */}
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
              {/* Poseify team-item */}
              <div className="team-item" style={{ cursor: 'pointer' }}>
                <div className="team-body">
                  {/* Left panel: slides in from left — shows city names */}
                  <div className="team-before">
                    <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '0.1em' }}>CITIES</span>
                    {emirate.cities.slice(0, 5).map((city) => (
                      <span key={city.id}>{city.name}</span>
                    ))}
                    {emirate.cities.length > 5 && (
                      <span style={{ color: '#c9a84c' }}>+{emirate.cities.length - 5} more</span>
                    )}
                  </div>

                  {/* The emirate image */}
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

                  {/* Right panel: slides in from right */}
                  <div className="team-after">
                    <span style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '0.1em' }}>AREAS</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{emirate.cities.length}</span>
                    <span>covered</span>
                    <span style={{ marginTop: '8px', color: '#c9a84c', fontSize: '0.65rem' }}>VIEW ALL →</span>
                  </div>
                </div>

                {/* Bottom name bar */}
                <div className="team-name">
                  <h5>{emirate.name}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
