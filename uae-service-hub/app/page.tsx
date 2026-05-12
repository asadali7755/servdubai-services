import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { HeroSlide } from '@/components/Hero'
import { emirates } from '@/lib/data/emirates'
import { buildMetadata, buildLocalBusinessSchema, buildImageObjectSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

import WhatsAppButton from '@/components/WhatsAppButton'

// Dynamic imports — split JS bundle, deferred after above-the-fold content
const Hero = dynamic(() => import('@/components/Hero'))
const EmiratesSection = dynamic(() => import('@/components/EmiratesSection'))

export const metadata: Metadata = buildMetadata({
  title: 'Professional Cleaning Services Dubai | Top-Rated Villa & Sofa Cleaning',
  description:
    'Looking for the best professional cleaning services in Dubai? We offer expert villa & apartment cleaning, deep sofa & mattress cleaning, carpet care, and premium marble polishing. 100% Satisfaction Guaranteed. Book your deep clean today!',
  path: '/',
})

// Only 3 hero slides — reduces LCP and initial image requests
const heroSlides: HeroSlide[] = [
  {
    image: '/images/hero/professional-cleaning-services-UAE.webp',
    title: 'The Gold Standard for Professional Cleaning Services in Dubai',
    subtitle: 'Vetted, IICRC-trained technicians. Eco-friendly solutions. Same-day service across all 7 UAE Emirates.',
    imageAlt: 'Professional Cleaning Services Dubai — Al Haya certified cleaning technicians UAE',
    imageTitle: 'Professional Cleaning Services Dubai | Al Haya',
    tags: ['professional cleaning services Dubai','cleaning services Dubai','deep cleaning Dubai','Al Haya cleaning UAE','same day cleaning service Dubai'],
  },
  {
    image: '/images/hero/sofa-carpet-cleaning.webp',
    title: 'Sofa & Carpet Deep Cleaning Dubai',
    subtitle: 'IICRC-standard steam extraction. Allergen-free results for fabric, leather, and luxury rugs.',
    imageAlt: 'Sofa Carpet Cleaning Dubai — professional upholstery and carpet deep cleaning UAE',
    imageTitle: 'Sofa Cleaning Dubai | Carpet Cleaning Dubai by Al Haya',
    tags: ['sofa cleaning Dubai','carpet cleaning Dubai','upholstery cleaning UAE','leather sofa cleaning Dubai','rug cleaning services UAE'],
  },
  {
    image: '/images/hero/marble-polishing-dubai.webp',
    title: 'Premium Marble Polishing & Restoration Dubai',
    subtitle: 'Re-crystallization, grinding, and mirror-finish polishing. Restore your floors to hotel-lobby shine.',
    imageAlt: 'Marble Polishing Dubai — professional floor polishing and marble restoration UAE',
    imageTitle: 'Marble Polishing Dubai | Stone Restoration by Al Haya',
    tags: ['marble polishing Dubai','floor polishing services Dubai','marble restoration UAE','stone polishing UAE'],
  },
]

const schema = buildLocalBusinessSchema({})
const imageSchema = buildImageObjectSchema(
  heroSlides.map((s) => ({ url: s.image, name: s.imageTitle ?? s.title, description: s.imageAlt ?? s.title, tags: s.tags }))
)

const faqs = [
  { q: 'What is included in a villa deep cleaning service in Dubai?', a: "Our villa cleaning goes beyond standard dusting. It includes deep sanitization of all bathrooms and kitchens, cleaning of AC vents, internal window tracks, floor scrubbing, and detailed cleaning of baseboards and light switches to remove Dubai's fine desert dust." },
  { q: 'How often should I get my sofa and mattress professionally cleaned?', a: "Due to Dubai's high humidity and dust levels, we recommend professional sofa and mattress cleaning every 6 months. This helps eliminate dust mites, allergens, and sweat accumulation that can affect indoor air quality and sleep health." },
  { q: 'Is your marble polishing process dust-free?', a: 'Yes, we use a wet polishing method and advanced Italian machinery that ensures a dust-free environment. Whether you choose standard polishing or re-crystallization, your home remains clean throughout the restoration process.' },
  { q: 'How long does it take for carpets to dry after a professional clean?', a: 'Using our industrial-grade steam extraction or dry shampooing methods, most carpets are dry and ready to walk on within 3 to 6 hours, depending on the material and ventilation in the room.' },
  { q: 'Are the cleaning chemicals safe for children and pets?', a: 'Absolutely. We prioritize eco-friendly, non-toxic, and biodegradable cleaning solutions that are powerful against stains but completely safe for your family and pets.' },
  { q: 'How much does professional sofa cleaning cost in Dubai?', a: 'Prices typically range from AED 250 for a small sofa to AED 450+ for larger sectionals, depending on the material (fabric vs. leather) and cleaning method used.' },
  { q: 'What is the difference between marble polishing and crystallization?', a: "Standard polishing removes scratches and stains to restore the stone's surface, while crystallization is a chemical process that adds a high-gloss, protective mirror finish to the marble." },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

// 6 main cards with images — rest shown as text grid (no image requests)
const mainCards = [
  { slug: 'villa-deep-cleaning', image: '/images/services/villa-deep-cleaning.webp', badge: 'VILLA', h2: 'Bespoke Villa & Apartment Cleaning', h3: "Designed for Dubai's Finest Homes", p: "A typical 4-bedroom villa (3,500–8,000 sq ft) requires a team-based approach to handle multiple bathrooms, outdoor seating, pool decks, and sand accumulation. Our villa cleaning Dubai service covers every corner — AC vents, window tracks, and baseboards.", alt: 'Villa deep cleaning Dubai — professional residential cleaning UAE', kws: ['villa cleaning Dubai','move-in cleaning','deep cleaning villa Dubai','professional house cleaning UAE'] },
  { slug: 'sofa-cleaning', image: '/images/services/sofa-cleaning.webp', badge: 'SOFA', h2: 'Professional Sofa Cleaning Dubai', h3: 'Eliminating Allergens & Restoring Fabric', p: "In Dubai's humid climate, your sofa acts as a magnet for allergens. We use IICRC-standard techniques for all fabric types — including velvet, silk, and leather sofa cleaning. Prices range AED 250–400 for a standard 3-seater.", alt: 'Sofa cleaning Dubai — professional upholstery and couch deep cleaning UAE', kws: ['sofa cleaning Dubai','couch cleaning service','upholstery cleaning UAE','leather sofa cleaning'] },
  { slug: 'carpet-cleaning', image: '/images/services/carpet-cleaning.webp', badge: 'CARPET', h2: 'Deep Carpet Cleaning Dubai', h3: 'Preserving the Life of Your Luxury Rugs', p: "Sand particles act like sandpaper, wearing down carpet fibers with every step. Our process: industrial grooming, steam extraction to dissolve oils and spills, and rapid drying to prevent mold growth in Dubai's humidity.", alt: 'Carpet cleaning Dubai — professional steam extraction and rug cleaning UAE', kws: ['carpet cleaning Dubai','rug cleaning services UAE','steam carpet cleaning','professional carpet cleaners'] },
  { slug: 'marble-polishing', image: '/images/services/marble-polishing.webp', badge: 'MARBLE', h2: 'Premium Marble Polishing Dubai', h3: 'Re-Crystallization & Mirror-Like Restoration', p: "Marble floors are porous and prone to dullness. Our marble restoration UAE service includes standard polishing, re-crystallization (a chemical process creating a durable high-gloss finish), and expert stain removal for etch marks from acidic spills.", alt: 'Marble polishing Dubai — professional floor restoration and re-crystallization UAE', kws: ['marble polishing Dubai','floor polishing services','marble restoration UAE','stone polishing UAE'] },
  { slug: 'mattress-cleaning', image: '/images/services/mattress-cleaning.webp', badge: 'MATTRESS', h2: 'Specialized Mattress Cleaning Dubai', h3: 'UV-C Sanitization for a Healthier Sleep', p: "The average person releases 200ml of sweat nightly. In Dubai's heat, this creates a breeding ground for dust mites. We use high-powered UV-C sanitization and medical-grade HEPA vacuums to extract allergens deep within the foam.", alt: 'Mattress cleaning Dubai — UV-C sanitization and deep cleaning UAE', kws: ['mattress cleaning Dubai','mattress sanitization UAE','dust mite removal','UV-C mattress cleaning'] },
  { slug: 'office-cleaning', image: '/images/services/office-cleaning.webp', badge: 'OFFICE', h2: 'Professional Office & Commercial Cleaning', h3: 'Sanitized, Productive Work Environments', p: 'Our commercial cleaning Dubai service handles workstations, meeting rooms, washrooms, and reception areas — with flexible early-morning or after-hours scheduling. Available for daily, weekly, or one-off deep cleaning contracts.', alt: 'Office cleaning Dubai — professional commercial workspace cleaning UAE', kws: ['office cleaning Dubai','commercial cleaning UAE','workspace sanitization Dubai','office deep clean'] },
]

// 5 additional services — text-only, no extra image requests
const extraServices = [
  { slug: 'curtain-cleaning', name: 'Curtain & Blinds Cleaning', desc: 'On-site steam cleaning for linen, velvet, silk & blackout blinds. Remove Dubai dust without taking curtains off the rails.', kws: 'curtain cleaning Dubai, blinds cleaning UAE' },
  { slug: 'dining-chair-cleaning', name: 'Dining Chair & Furniture Cleaning', desc: 'Targeted stain treatment and steam extraction for fabric, leather & velvet chairs. Food-safe, eco-friendly solutions.', kws: 'dining chair cleaning Dubai, furniture upholstery UAE' },
  { slug: 'car-interior-detailing', name: 'Car Interior Detailing', desc: 'Full cabin sanitization, seat shampooing, dashboard deep clean & AC vent cleaning. Safe for leather and all trims.', kws: 'car interior cleaning Dubai, auto detailing UAE' },
  { slug: 'apartment-cleaning', name: 'Apartment Deep Cleaning', desc: 'High-rise apartment specialists. AC vents, balcony glass, kitchen, bathrooms — full deep clean for move-in or move-out.', kws: 'apartment cleaning Dubai, move-in cleaning services' },
  { slug: 'restaurant-kitchen-cleaning', name: 'Restaurant Kitchen Cleaning', desc: 'Industrial degreasers, steam cleaning & pressure washing for commercial kitchens. Dubai Municipality standards.', kws: 'restaurant kitchen cleaning Dubai, commercial kitchen UAE' },
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <Hero slides={heroSlides} />

      {/* ABOUT */}
      <section className="theme-about home-about-section" style={{ padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="home-about-grid">
            <div>
              <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>About Our Agency</div>
              <h2 className="home-section-h2">Dubai's Unique Cleaning Challenge — And How We Solve It</h2>
              <p className="home-section-p">In a city as fast-paced and glamorous as Dubai, maintaining a pristine home isn't just about aesthetics — it's a necessity. Frequent sandstorms, high humidity, and fine dust mean standard dusting simply isn't enough.</p>
              <p className="home-section-p" style={{ marginBottom: '1.5rem' }}>Whether you are a tenant in a Downtown apartment or a homeowner in Arabian Ranches, Al Haya delivers the gold standard of professional cleaning services in Dubai — across all 7 UAE Emirates.</p>
              <ul className="home-checklist">
                {['IICRC-trained & vetted technicians','Eco-friendly, non-toxic solutions','Same-day service available','All 7 UAE Emirates covered','100% Satisfaction Guaranteed'].map((item) => (
                  <li key={item} className="home-check-item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#c9a84c" aria-hidden="true" style={{ flexShrink: 0 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="p-btn-outline">Get Free Quote</a>
                <Link href="/about" className="p-btn-primary">About Us</Link>
              </div>
            </div>
            <div className="p-about-img home-about-img" style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
              <Image src="/images/hero/villa-apartment-cleaning-services.webp" alt="Professional cleaning team Dubai villa — Al Haya deep cleaning UAE" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services-section" style={{ padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>How We Help You</div>
            <h2 className="home-section-h2" style={{ textAlign: 'center' }}>Our Professional Cleaning Services in Dubai</h2>
            <p className="home-section-p" style={{ maxWidth: '580px', margin: '0 auto', textAlign: 'center' }}>From luxury villas to marble restoration — specialized cleaning built for Dubai's environment.</p>
          </div>

          {/* 6 main cards with images */}
          <div className="home-svc-grid">
            {mainCards.map((card) => (
              <div key={card.slug + card.badge} className="home-svc-card">
                <div style={{ position: 'relative', height: '170px', flexShrink: 0 }}>
                  <Image src={card.image} alt={card.alt} fill className="object-cover" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 380px" loading="lazy" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.6))' }} />
                  <span className="home-svc-badge">{card.badge}</span>
                </div>
                <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 className="home-svc-h2">{card.h2}</h2>
                  <h3 className="home-svc-h3">{card.h3}</h3>
                  <p className="home-svc-p" style={{ flex: 1 }}>{card.p}</p>
                  <div className="home-kw-row">
                    {card.kws.map((kw) => <span key={kw} className="home-kw-tag">{kw}</span>)}
                  </div>
                  <Link href={`/services/${card.slug}`} className="home-svc-link" style={{ marginTop: '0.5rem' }}>View Service →</Link>
                </div>
              </div>
            ))}
          </div>

          {/* 5 extra services — text only, no images = fast load */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Also Available</div>
            </div>
            <div className="home-extra-grid">
              {extraServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="home-extra-card">
                  <h3 className="home-extra-h3">{s.name}</h3>
                  <p className="home-extra-p">{s.desc}</p>
                  <span className="home-extra-kw">{s.kws}</span>
                  <span className="home-extra-arrow">View →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home-why-section" style={{ padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Our Promise</div>
            <h2 className="home-section-h2" style={{ textAlign: 'center' }}>Why Choose Our Professional Cleaning Services in Dubai?</h2>
            <p className="home-section-p" style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>Trusted by homeowners across Marina, Downtown, Palm Jumeirah, and Arabian Ranches.</p>
          </div>
          <div className="home-why-grid">
            {[
              { title: 'Vetted, Insured & IICRC-Trained', desc: 'Every technician is background-checked, insured, and trained to international IICRC standards — the gold standard in the cleaning industry.', icon: '🏅' },
              { title: 'Eco-Friendly & Non-Toxic', desc: 'We use biodegradable, non-toxic sanitization solutions safe for children, pets, and allergy sufferers — powerful on stains, gentle on your home.', icon: '🌿' },
              { title: 'Same-Day Service Available', desc: 'Book via WhatsApp and our team arrives the same day, fully equipped — across Dubai, Sharjah, Abu Dhabi, and all UAE Emirates.', icon: '⚡' },
              { title: '100% Satisfaction Guarantee', desc: "Not satisfied? We come back at no extra charge. Your satisfaction is our standard — not an exception.", icon: '✓' },
            ].map((item) => (
              <div key={item.title} className="home-why-card">
                <div style={{ fontSize: '1.4rem', marginBottom: '0.65rem' }}>{item.icon}</div>
                <h3 className="home-why-h3">{item.title}</h3>
                <p className="home-why-p">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="home-faq-section" style={{ padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Common Questions</div>
            <h2 className="home-section-h2" style={{ textAlign: 'center' }}>Frequently Asked Questions About Cleaning in Dubai</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <details key={i} className="home-faq-item">
                <summary className="home-faq-q">{faq.q}<span style={{ color: '#c9a84c', fontSize: '1.1rem', flexShrink: 0 }}>+</span></summary>
                <p className="home-faq-a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-cta" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(201,168,76,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(201,168,76,0.05)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[{ number: '11+', label: 'Services' },{ number: '7', label: 'Emirates' },{ number: '500+', label: 'Happy Clients' },{ number: 'Same Day', label: 'Availability' }].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center', minWidth: '80px' }}>
                <div className="cta-stat-number" style={{ fontSize: '1.65rem', fontWeight: 700, color: '#c9a84c', fontFamily: 'var(--font-josefin)', lineHeight: 1.1 }}>{stat.number}</div>
                <div className="cta-stat-label" style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div style={{ width: '50px', height: '2px', background: 'linear-gradient(90deg, #c9a84c, #25D366)', margin: '0 auto 2.25rem' }} />
          <div style={{ maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.63rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.65rem' }}>Book Today</div>
            <h2 className="home-section-h2" style={{ textAlign: 'center' }}>Ready to Refresh Your Space? Book a Deep Clean Today</h2>
            <p className="home-section-p" style={{ maxWidth: '540px', margin: '0 auto 2.25rem', textAlign: 'center' }}>Same-day service across Dubai, Sharjah, Abu Dhabi and all UAE Emirates. Free instant quote via WhatsApp.</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:'0.5rem',minWidth:'180px',justifyContent:'center',padding:'0.85rem 1.75rem',background:'linear-gradient(135deg,#25D366,#128C7E)',color:'#fff',fontWeight:700,borderRadius:'500px',textDecoration:'none',fontSize:'0.9rem',boxShadow:'0 4px 18px rgba(37,211,102,0.28)' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
                WhatsApp Now
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} style={{ display:'inline-flex',alignItems:'center',gap:'0.5rem',minWidth:'180px',justifyContent:'center',padding:'0.85rem 1.75rem',background:'transparent',color:'#c9a84c',fontWeight:700,borderRadius:'500px',textDecoration:'none',fontSize:'0.9rem',border:'2px solid #c9a84c' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/></svg>
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMIRATES */}
      <EmiratesSection emirates={emirates} />

      <WhatsAppButton />
    </>
  )
}
