import type { Metadata } from 'next'
import Image from 'next/image'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = buildMetadata({
  title: 'Our Specialist Cleaning Websites | UAE Cleaning Network',
  description: 'Explore our 4 specialist cleaning websites covering sofa cleaning, carpet cleaning, villa deep cleaning, and marble polishing across UAE.',
  path: '/websites',
})

const localSchema = buildLocalBusinessSchema({ path: '/websites' })
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Our Websites', url: '/websites' },
])

const sites = [
  {
    id: 'villa',
    name: 'Villa Deep Cleaning',
    tagline: 'The UAE\'s Premier Villa Cleaning Specialists',
    url: 'https://www.villadeepcleaning.com/',
    urlLabel: 'villadeepcleaning.com',
    image: '/images/hero/villa-apartment-cleaning-services.webp',
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
    image: '/images/hero/sofa-carpet-cleaning.webp',
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
    image: '/images/hero/professional-cleaning-services-UAE.webp',
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
    image: '/images/hero/marble-polishing-dubai.webp',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* PAGE HERO */}
      <div className="ws-hero">
        <div className="ws-hero-circle" />
        <div className="ws-hero-inner">
          <div className="ws-hero-label-row">
            <div className="ws-hero-line" />
            <span className="ws-hero-label">Madinat Alhaya Specialist Network</span>
            <div className="ws-hero-line" />
          </div>
          <h1 className="ws-hero-h1">Our Specialist Websites</h1>
          <h2 className="ws-hero-sub">
            4 dedicated websites. Each one a specialist in its field. All backed by Madinat Alhaya's certified cleaning professionals across UAE.
          </h2>
          <div className="ws-hero-dots">
            {sites.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="ws-hero-dot" />
            ))}
          </div>
        </div>
      </div>

      {/* 4 SITE SECTIONS */}
      {sites.map((site, idx) => {
        const isEven = idx % 2 === 0
        return (
          <section key={site.id} id={site.id} className={isEven ? 'ws-section-even' : 'ws-section-odd'}>
            <div className={`ws-section-inner site-section-grid${isEven ? '' : ' site-section-reverse'}`}>
              {/* Image side */}
              <div className="ws-img-col site-section-img-col" style={{ order: isEven ? 0 : 1 }}>
                <Image src={site.image} alt={site.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
                <div className={isEven ? 'ws-img-overlay-right' : 'ws-img-overlay-left'} />
                <div style={{ position: 'absolute', bottom: '1.5rem', ...(isEven ? { right: '1.5rem' } : { left: '1.5rem' }) }}>
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="ws-url-badge">
                    ↗ {site.urlLabel}
                  </a>
                </div>
              </div>

              {/* Content side */}
              <div className="ws-content-col site-section-content-col" style={{ order: isEven ? 1 : 0 }}>
                <div className="ws-idx-num">
                  {String(idx + 1).padStart(2, '0')} / {String(sites.length).padStart(2, '0')}
                </div>
                <h2 className="ws-site-h2">{site.name}</h2>
                <h3 className="ws-site-tagline">{site.tagline}</h3>
                <div className="ws-divider" />
                <h3 className="ws-site-desc">{site.description}</h3>

                <div className="site-feature-grid ws-feat-grid">
                  {site.features.map((f) => (
                    <div key={f} className="ws-feat-item">
                      <span className="ws-feat-check">✓</span>
                      <span className="ws-feat-txt">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="site-stats-row ws-stats-row">
                  {site.stats.map((s) => (
                    <div key={s.l} className="ws-stat-card">
                      <div className="ws-stat-num">{s.n}</div>
                      <div className="ws-stat-lbl">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="ws-cta-row">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="ws-cta-primary">
                    Visit Website ↗
                  </a>
                  <a href={getWhatsAppLink(site.name)} target="_blank" rel="noopener noreferrer" className="ws-cta-secondary">
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* BOTTOM CTA */}
      <section className="ws-bottom-cta">
        <h2 className="ws-bottom-h2">Not Sure Which Site to Visit?</h2>
        <h3 className="ws-bottom-sub">
          Message us on WhatsApp — we'll direct you to the right specialist and give you a free quote instantly.
        </h3>
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="svc-book-btn ws-bottom-wa">
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
