import Image from 'next/image'
import { specializedSites } from '@/lib/data/specialized-sites'

export default function SpecialistSitesBanner() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 40%, #0a0a0a 100%)',
      borderTop: '1px solid rgba(201,168,76,0.2)',
      borderBottom: '1px solid rgba(201,168,76,0.2)',
      padding: '3rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorative elements */}
      <div style={{ position: 'absolute', top: '-60px', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(201,168,76,0.04)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-40px', right: '5%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(201,168,76,0.03)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
            <div style={{ width: '30px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
              Our Specialist Websites
            </span>
            <div style={{ width: '30px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.03em',
          }}>
            Deep Expertise. Dedicated Sites.
          </h2>
        </div>

        {/* Site cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1rem',
        }}>
          {specializedSites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="specialist-banner-card"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              {/* Image strip */}
              <div style={{ position: 'relative', height: '120px', overflow: 'hidden', borderRadius: '6px 6px 0 0' }}>
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover specialist-banner-img"
                  sizes="280px"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)',
                }} />
                {/* Live badge */}
                <div style={{ position: 'absolute', top: '0.6rem', right: '0.6rem' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    padding: '0.2rem 0.55rem',
                    background: 'rgba(37,211,102,0.9)',
                    color: '#fff', fontSize: '0.55rem', fontWeight: 700,
                    letterSpacing: '0.1em', borderRadius: '20px',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff', display: 'inline-block' }} />
                    LIVE
                  </span>
                </div>
                {/* Site name over image */}
                <div style={{ position: 'absolute', bottom: '0.6rem', left: '0.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700, color: '#fff', fontSize: '0.85rem', letterSpacing: '0.03em' }}>
                    {site.name}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div style={{
                background: 'linear-gradient(135deg, #1a1a1a, #1e1e1e)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderTop: 'none',
                borderRadius: '0 0 6px 6px',
                padding: '0.875rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}>
                <h3 style={{ color: '#9ca3af', fontSize: '0.75rem', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                  {site.description}
                </h3>
                <span style={{
                  flexShrink: 0,
                  display: 'inline-flex', alignItems: 'center', gap: '0.2rem',
                  color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}>
                  Visit ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
