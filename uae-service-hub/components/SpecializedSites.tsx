import Image from 'next/image'
import type { SpecializedSite } from '@/lib/data/specialized-sites'

export default function SpecializedSites({ sites }: { sites: SpecializedSite[] }) {
  return (
    <section className="theme-sites" style={{ background: '#343a40', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Poseify title */}
        <div className="p-title" style={{ textAlign: 'center' }}>
          <div className="p-title-center">
            <h5>Deep Expertise</h5>
            <h1>Specialist Sites</h1>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {sites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-card"
              style={{
                background: 'rgba(33,37,41,0.6)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '4px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
            >
              {/* Card image */}
              <div className="site-card-img" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 300px"
                  style={{ transition: 'transform 0.4s ease' }}
                />
                {/* Dark overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
                {/* Gold top bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#c9a84c' }} />
              </div>

              {/* Card body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.6rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {site.name}
                </h3>
                <h3 style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1, fontWeight: 400, marginTop: 0 }}>
                  {site.description}
                </h3>
                <span
                  className="site-card-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#c9a84c',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  Visit Site ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
