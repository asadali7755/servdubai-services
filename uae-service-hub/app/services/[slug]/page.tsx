import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import SpecialistSitesBanner from '@/components/SpecialistSitesBanner'
import { services, getServiceBySlug } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { buildMetadata, buildLocalBusinessSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return buildMetadata({
    title: `${service.name} in UAE | Al Haya`,
    description: `${service.shortDescription} Available across all UAE Emirates. Call 0551275545.`,
    path: `/services/${slug}`,
  })
}

const stats = [
  { number: '7', label: 'Emirates' },
  { number: 'Same Day', label: 'Service' },
  { number: 'Free', label: 'Quote' },
  { number: 'Eco', label: 'Friendly' },
]

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const availableEmirates = emirates.filter((e) =>
    service.availableInEmirates.includes(e.id)
  )

  const schema = buildLocalBusinessSchema({ service: service.name })
  const paragraphs = service.fullDescription.split('\n\n').map((p) => p.trim()).filter(Boolean)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── FULL-WIDTH HERO ── */}
      <div className="page-hero-wrap" style={{ position: 'relative', width: '100%', height: 'clamp(340px, 55vh, 520px)', marginTop: 0 }}>
        <Image
          src={service.images[0]}
          alt={service.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="hero-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.9) 100%)',
        }} />

        {/* Breadcrumb top */}
        <nav
          style={{ position: 'absolute', top: '90px', left: '1.5rem', zIndex: 5, fontSize: '0.8rem', color: '#9ca3af' }}
          aria-label="Breadcrumb"
        >
          <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ color: '#e5e7eb' }}>{service.name}</span>
        </nav>

        {/* Category badge top-right */}
        <div style={{ position: 'absolute', top: '90px', right: '1.5rem', zIndex: 5 }}>
          <span style={{
            padding: '0.3rem 0.9rem',
            background: '#c9a84c',
            color: '#111',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            borderRadius: '2px',
          }}>
            {service.category}
          </span>
        </div>

        {/* Title overlay bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5,
          padding: '2rem 2rem 2.5rem',
          maxWidth: '1200px', margin: '0 auto',
        }}>
          <h1 style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '0.5rem',
            textShadow: '0 2px 12px rgba(0,0,0,0.6)',
          }}>
            {service.name}
          </h1>
          <h2 style={{ color: '#d1d5db', fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 }}>
            {service.shortDescription}
          </h2>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="svc-stats-bar" style={{ background: '#080e20', borderBottom: '1px solid rgba(201,168,76,0.2)', padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.75rem', padding: '1.25rem 0', flexWrap: 'wrap' }}>
          {stats.map((s) => (
            <div key={s.label} className="svc-stat-card">
              <div
                className="svc-stat-number"
                style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.3rem', fontWeight: 700, color: '#c9a84c', lineHeight: 1 }}
              >
                {s.number}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="theme-svc-body" style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem', background: '#132040' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: '2rem', alignItems: 'start' }}
          className="svc-grid">

          {/* Left: description */}
          <div>
            <div className="svc-desc-card" style={{ marginBottom: '2rem' }}>
              <h2 className="svc-content-h" style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '1.25rem',
                letterSpacing: '0.03em',
              }}>
                About This Service
              </h2>
              {paragraphs.map((para, i) => (
                <h3 key={i} className="svc-content-p" style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.9375rem', fontWeight: 400, marginTop: 0 }}>
                  {para}
                </h3>
              ))}
            </div>

            {/* Specialist site banner */}
            {service.externalWebsite && (
              <div className="svc-specialist-card" style={{
                background: 'linear-gradient(135deg, #1a1505 0%, #1e1e1e 100%)',
                border: '1px solid #c9a84c',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    Specialist Site
                  </div>
                  <div className="svc-content-h" style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-josefin)' }}>
                    {service.externalWebsite.name}
                  </div>
                </div>
                <a
                  href={service.externalWebsite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.6rem 1.5rem',
                    border: '1px solid #c9a84c',
                    color: '#c9a84c',
                    borderRadius: '4px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Visit Site ↗
                </a>
              </div>
            )}

            {/* SERVICE AREAS */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '3px', height: '1.5rem', background: '#c9a84c', borderRadius: '2px', flexShrink: 0 }} />
                <h2 style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }} className="svc-content-h">
                  Service Areas
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.875rem' }}>
                {availableEmirates.map((emirate) => (
                  <a
                    key={emirate.id}
                    href={`/${emirate.slug}`}
                    className="svc-area-card"
                    style={{ textDecoration: 'none', display: 'block', aspectRatio: '3/2' }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <div className="svc-area-img" style={{ position: 'absolute', inset: 0 }}>
                        <Image
                          src={emirate.image}
                          alt={emirate.name}
                          fill
                          className="object-cover"
                          sizes="180px"
                        />
                      </div>
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%)',
                      }} />
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        padding: '0.6rem 0.75rem',
                      }}>
                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', fontFamily: 'var(--font-josefin)', letterSpacing: '0.05em' }}>
                          {emirate.name}
                        </div>
                        <div style={{ color: '#c9a84c', fontSize: '0.65rem', letterSpacing: '0.08em' }}>
                          {emirate.cities.length} areas →
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: sticky booking sidebar */}
          <div className="svc-sidebar">
            <div style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Book Now
            </div>
            <h3 className="svc-content-h" style={{
              fontFamily: 'var(--font-josefin)',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              {service.name}
            </h3>

            <div className="svc-sidebar-divider" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
              {[
                'Free instant quote',
                'Same-day service available',
                'All 7 UAE Emirates covered',
                'Certified technicians',
                'Eco-friendly products',
              ].map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <div style={{ width: '6px', height: '6px', background: '#c9a84c', borderRadius: '50%', flexShrink: 0 }} />
                  <span className="svc-feat-txt" style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{feat}</span>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppLink(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="svc-book-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.9rem',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              Book via WhatsApp
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.75rem',
                background: 'transparent',
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#c9a84c',
                fontWeight: 600,
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        {/* ── BOTTOM CTA BANNER ── */}
        <div className="svc-cta-banner" style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #2d1b00 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(201,168,76,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(37,211,102,0.05)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
              Ready to Book {service.name}?
            </h2>
            <h3 style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '0.95rem', fontWeight: 400, marginTop: 0 }}>
              Same-day service across all UAE Emirates — free quote in minutes.
            </h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={getWhatsAppLink(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="svc-book-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff',
                  fontWeight: 700,
                  borderRadius: '500px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                }}
              >
                WhatsApp Now
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.875rem 2rem',
                  border: '2px solid #c9a84c',
                  color: '#c9a84c',
                  fontWeight: 700,
                  borderRadius: '500px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                }}
              >
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <SpecialistSitesBanner />
      <WhatsAppButton service={service.name} />

      <style>{`
        @media (max-width: 768px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-sidebar { position: static !important; top: auto !important; }
        }
      `}</style>
    </>
  )
}
