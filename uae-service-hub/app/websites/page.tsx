import type { Metadata } from 'next'
import Image from 'next/image'
import { buildMetadata } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = buildMetadata({
  title: 'Our Specialist Websites | Al Haya Cleaning UAE',
  description: 'Explore our 4 specialist cleaning websites covering sofa cleaning, carpet cleaning, villa deep cleaning, and marble polishing across UAE.',
  path: '/websites',
})

const sites = [
  {
    id: 'villa',
    name: 'Villa Deep Cleaning',
    tagline: 'The UAE\'s Premier Villa Cleaning Specialists',
    url: 'https://www.villadeepcleaning.com/',
    urlLabel: 'villadeepcleaning.com',
    image: '/images/hero/villa-apartment-cleaning.jpg',
    accentColor: '#c9a84c',
    description: 'Our dedicated villa deep cleaning website serves homeowners, landlords, and property managers across all 7 UAE Emirates. From move-in and move-out cleans to post-construction and periodic deep cleans, we handle every corner of your villa with meticulous attention to detail.',
    features: [
      'Move-in & move-out deep cleans',
      'Post-construction cleaning',
      'Periodic villa maintenance cleans',
      'Kitchen degreasing & appliance cleaning',
      'Bathroom deep scrubbing & sanitization',
      'Balcony & outdoor area cleaning',
    ],
    stats: [{ n: 'All 7', l: 'Emirates' }, { n: 'Same Day', l: 'Service' }, { n: '100%', l: 'Guaranteed' }],
  },
  {
    id: 'sofa',
    name: 'Sofa Shampooing Dubai',
    tagline: 'Dubai\'s Leading Sofa Deep Cleaning Experts',
    url: 'https://sofashampooingdubai.com',
    urlLabel: 'sofashampooingdubai.com',
    image: '/images/hero/sofa-carpet.webp',
    accentColor: '#c9a84c',
    description: 'Dedicated entirely to sofa and upholstery cleaning across Dubai and the wider UAE, our specialist site brings deep-cleaning expertise to every fabric type — velvet, linen, cotton, microfiber, leather, and faux leather. We use hot-water extraction combined with eco-friendly shampoos for a truly hygienic result.',
    features: [
      'Hot-water extraction deep clean',
      'All fabric types: velvet, linen, microfiber',
      'Leather & faux leather conditioning',
      'L-shaped, sectional & corner sofas',
      'Stain, odor & dust mite removal',
      'Quick-dry technology (3–4 hours)',
    ],
    stats: [{ n: 'Dubai', l: 'Based' }, { n: '3–4h', l: 'Dry Time' }, { n: 'Eco', l: 'Friendly' }],
  },
  {
    id: 'carpet',
    name: 'Carpet Cleaning Dubai',
    tagline: 'Expert Carpet & Rug Cleaning Across Dubai',
    url: 'https://carpetcleaningdubai.com',
    urlLabel: 'carpetcleaningdubai.com',
    image: '/images/hero/professional-cleaning-services.webp',
    accentColor: '#c9a84c',
    description: 'Our carpet cleaning specialist site covers every type of carpet and rug in Dubai — from wall-to-wall carpets and area rugs to delicate Persian and handmade rugs. Using professional steam cleaning (hot-water extraction) and specialist shampoo solutions, we remove embedded dirt, pet hair, food stains, and allergens deep from the carpet fibers.',
    features: [
      'Wall-to-wall & area carpet cleaning',
      'Persian & handmade rug specialists',
      'Hot-water extraction steam cleaning',
      'Pet hair & allergen removal',
      'Protective post-clean treatment',
      'Dry within 2–6 hours',
    ],
    stats: [{ n: 'Dubai', l: 'Wide' }, { n: '2–6h', l: 'Dry Time' }, { n: 'Deep', l: 'Clean' }],
  },
  {
    id: 'marble',
    name: 'Marble Pro UAE',
    tagline: 'Premium Marble Polishing & Restoration Across UAE',
    url: 'https://marblepro.ae',
    urlLabel: 'marblepro.ae',
    image: '/images/hero/marble-polishing.jpg',
    accentColor: '#c9a84c',
    description: 'Marble Pro UAE is our dedicated specialist site for marble polishing, restoration, and sealing services across the UAE. Marble requires expert care to maintain its natural luster and prevent damage from etching, scratching, and staining. Our certified technicians use diamond abrasive pads and professional polishing compounds to restore your marble to factory finish.',
    features: [
      'Diamond grinding for deep scratches',
      'Honing to remove surface etch marks',
      'High-gloss polishing & crystallization',
      'Professional marble sealing',
      'Floors, countertops, walls & staircases',
      'All UAE Emirates covered',
    ],
    stats: [{ n: 'UAE', l: 'Wide' }, { n: 'Diamond', l: 'Pads' }, { n: 'Sealed', l: 'Protection' }],
  },
]

export default function WebsitesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <div style={{
        paddingTop: '100px',
        background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #111 100%)',
        padding: '7rem 1.5rem 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(201,168,76,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Al Haya Specialist Network</span>
            <div style={{ width: '40px', height: '1px', background: '#c9a84c' }} />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, color: '#fff',
            marginBottom: '1rem', lineHeight: 1.15,
          }}>
            Our Specialist Websites
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            4 dedicated websites. Each one a specialist in its field. All backed by Al Haya's certified cleaning professionals across UAE.
          </p>
          {/* 4 dots representing 4 sites */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem' }}>
            {sites.map((s) => (
              <a key={s.id} href={`#${s.id}`} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c9a84c', display: 'block', opacity: 0.7, textDecoration: 'none' }} />
            ))}
          </div>
        </div>
      </div>

      {/* ── 4 SITE SECTIONS ── */}
      {sites.map((site, idx) => {
        const isEven = idx % 2 === 0
        return (
          <section
            key={site.id}
            id={site.id}
            style={{
              background: isEven ? '#111' : '#0d0d0d',
              borderTop: '1px solid rgba(201,168,76,0.1)',
              padding: '0',
              overflow: 'hidden',
            }}
          >
            <div style={{
              maxWidth: '1200px', margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
              minHeight: '520px',
            }}
              className={isEven ? 'site-section-grid' : 'site-section-grid site-section-reverse'}
            >
              {/* Image side */}
              <div style={{
                position: 'relative',
                minHeight: '400px',
                order: isEven ? 0 : 1,
              }} className="site-section-img-col">
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                {/* Gradient toward content side */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: isEven
                    ? 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(17,17,17,0.6) 100%)'
                    : 'linear-gradient(to left, rgba(0,0,0,0.1) 0%, rgba(13,13,13,0.6) 100%)',
                }} />
                {/* URL badge over image */}
                <div style={{
                  position: 'absolute', bottom: '1.5rem',
                  left: isEven ? 'auto' : '1.5rem',
                  right: isEven ? '1.5rem' : 'auto',
                }}>
                  <a
                    href={site.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.4rem 1rem',
                      background: 'rgba(0,0,0,0.75)',
                      border: '1px solid rgba(201,168,76,0.5)',
                      borderRadius: '4px',
                      color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700,
                      textDecoration: 'none', letterSpacing: '0.04em',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    ↗ {site.urlLabel}
                  </a>
                </div>
              </div>

              {/* Content side */}
              <div style={{
                padding: '3.5rem 3rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                order: isEven ? 1 : 0,
              }} className="site-section-content-col">
                {/* Index number */}
                <div style={{
                  fontFamily: 'var(--font-josefin)', fontSize: '0.7rem', fontWeight: 700,
                  color: 'rgba(201,168,76,0.5)', letterSpacing: '0.2em', marginBottom: '0.75rem',
                }}>
                  {String(idx + 1).padStart(2, '0')} / {String(sites.length).padStart(2, '0')}
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontWeight: 700, color: '#fff',
                  lineHeight: 1.15, marginBottom: '0.5rem',
                }}>
                  {site.name}
                </h2>
                <p style={{ color: '#c9a84c', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
                  {site.tagline}
                </p>

                <div style={{ width: '40px', height: '2px', background: '#c9a84c', borderRadius: '2px', marginBottom: '1.25rem' }} />

                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                  {site.description}
                </p>

                {/* Features */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem 1rem', marginBottom: '2rem' }}>
                  {site.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      <span style={{ color: '#d1d5db', fontSize: '0.8rem', lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  {site.stats.map((s) => (
                    <div key={s.l} style={{
                      background: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      borderRadius: '6px', padding: '0.5rem 1rem', textAlign: 'center',
                    }}>
                      <div style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700, color: '#c9a84c', fontSize: '0.95rem' }}>{s.n}</div>
                      <div style={{ color: '#6b7280', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={site.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.8rem 1.75rem',
                      background: '#c9a84c', color: '#111',
                      fontWeight: 700, borderRadius: '500px',
                      textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.03em',
                    }}
                  >
                    Visit Website ↗
                  </a>
                  <a
                    href={getWhatsAppLink(site.name)} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.8rem 1.75rem',
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#fff', fontWeight: 600, borderRadius: '500px',
                      textDecoration: 'none', fontSize: '0.9rem',
                    }}
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── BOTTOM CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 50%, #2d1b00 100%)',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(201,168,76,0.2)',
      }}>
        <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
          Not Sure Which Site to Visit?
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
          Message us on WhatsApp — we'll direct you to the right specialist and give you a free quote instantly.
        </p>
        <a
          href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
          className="svc-book-btn"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.95rem 2.5rem',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: '#fff', fontWeight: 700, borderRadius: '500px',
            textDecoration: 'none', fontSize: '1rem',
          }}
        >
          WhatsApp Us Now
        </a>
      </section>

      <WhatsAppButton />

      <style>{`
        .site-section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .site-section-img-col { min-height: 420px; }
        @media (max-width: 768px) {
          .site-section-grid { grid-template-columns: 1fr !important; }
          .site-section-img-col { min-height: 260px; order: 0 !important; }
          .site-section-content-col { order: 1 !important; padding: 2rem 1.5rem !important; }
        }
      `}</style>
    </>
  )
}
