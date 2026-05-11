import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero, { type HeroSlide } from '@/components/Hero'
import EmiratesSection from '@/components/EmiratesSection'
import WhatsAppButton from '@/components/WhatsAppButton'
import { services } from '@/lib/data/services'
import { emirates } from '@/lib/data/emirates'
import { buildMetadata, buildLocalBusinessSchema, buildImageObjectSchema } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Professional Cleaning Services Dubai | Top-Rated Villa & Sofa Cleaning',
  description:
    'Looking for the best professional cleaning services in Dubai? We offer expert villa & apartment cleaning, deep sofa & mattress cleaning, carpet care, and premium marble polishing. 100% Satisfaction Guaranteed. Book your deep clean today!',
  path: '/',
})

const heroSlides: HeroSlide[] = [
  {
    image: '/images/hero/professional-cleaning-services-UAE.webp',
    title: 'The Gold Standard for Professional Cleaning Services in Dubai',
    subtitle: 'Vetted, IICRC-trained technicians. Eco-friendly solutions. Same-day service across all 7 UAE Emirates.',
    imageAlt: 'Professional Cleaning Services Dubai — Al Haya certified cleaning technicians UAE',
    imageTitle: 'Professional Cleaning Services Dubai | Al Haya',
    tags: [
      'professional cleaning services Dubai',
      'cleaning services Dubai',
      'deep cleaning Dubai',
      'Al Haya cleaning UAE',
      'home cleaning services UAE',
      'certified cleaning technicians Dubai',
      'eco-friendly cleaning Dubai',
      'same day cleaning service Dubai',
    ],
  },
  {
    image: '/images/hero/sofa-carpet-cleaning.webp',
    title: 'Sofa & Carpet Deep Cleaning Dubai',
    subtitle: 'IICRC-standard steam extraction and dry shampooing. Allergen-free results for fabric, leather, and luxury rugs.',
    imageAlt: 'Sofa Carpet Cleaning Dubai — professional upholstery and carpet deep cleaning UAE',
    imageTitle: 'Sofa Cleaning Dubai | Carpet Cleaning Dubai by Al Haya',
    tags: [
      'sofa cleaning Dubai',
      'couch cleaning service Dubai',
      'carpet cleaning Dubai',
      'upholstery cleaning UAE',
      'sofa shampooing Dubai',
      'steam carpet cleaning Dubai',
      'leather sofa cleaning Dubai',
      'rug cleaning services UAE',
    ],
  },
  {
    image: '/images/hero/villa-apartment-cleaning-services.webp',
    title: 'Villa & Apartment Cleaning Dubai',
    subtitle: 'Move-in, move-out, and post-sandstorm deep cleaning for villas, high-rises, and commercial spaces.',
    imageAlt: 'Villa Apartment Cleaning Dubai — residential deep cleaning services UAE',
    imageTitle: 'Villa Cleaning Dubai | Apartment Cleaning by Al Haya',
    tags: [
      'villa cleaning Dubai',
      'villa deep cleaning UAE',
      'apartment cleaning Dubai',
      'move in cleaning services Dubai',
      'move out cleaning Dubai',
      'deep cleaning villa Dubai',
      'house cleaning services Dubai',
      'professional house cleaning UAE',
    ],
  },
  {
    image: '/images/hero/marble-polishing-dubai.webp',
    title: 'Premium Marble Polishing & Restoration Dubai',
    subtitle: 'Re-crystallization, grinding, and mirror-finish polishing. Restore your floors to hotel-lobby shine.',
    imageAlt: 'Marble Polishing Dubai — professional floor polishing and marble restoration UAE',
    imageTitle: 'Marble Polishing Dubai | Stone Restoration by Al Haya',
    tags: [
      'marble polishing Dubai',
      'floor polishing services Dubai',
      'marble restoration UAE',
      'stone polishing UAE',
      'marble floor cleaning Dubai',
      'marble re-crystallization Dubai',
      'floor restoration UAE',
      'professional marble polishing Dubai',
    ],
  },
  {
    image: '/images/hero/cleaning-services-UAE.webp',
    title: 'Serving Dubai, Abu Dhabi & All UAE Emirates',
    subtitle: 'Marina, Downtown, Arabian Ranches, Palm Jumeirah — and across Sharjah, Ajman, RAK, Fujairah, UAQ.',
    imageAlt: 'Cleaning Services UAE — Al Haya serving all seven Emirates including Dubai and Abu Dhabi',
    imageTitle: 'Cleaning Services UAE | All Emirates by Al Haya',
    tags: [
      'cleaning services UAE',
      'cleaning services Dubai Marina',
      'cleaning services Downtown Dubai',
      'cleaning services Abu Dhabi',
      'cleaning services Sharjah',
      'cleaning services Ajman',
      'Al Haya cleaning UAE',
      'professional cleaners all emirates',
    ],
  },
]

const schema = buildLocalBusinessSchema({})
const imageSchema = buildImageObjectSchema(
  heroSlides.map((slide) => ({
    url: slide.image,
    name: slide.imageTitle ?? slide.title,
    description: slide.imageAlt ?? slide.title,
    tags: slide.tags,
  }))
)

const faqs = [
  {
    q: 'What is included in a villa deep cleaning service in Dubai?',
    a: 'Our villa cleaning goes beyond standard dusting. It includes deep sanitization of all bathrooms and kitchens, cleaning of AC vents, internal window tracks, floor scrubbing, and detailed cleaning of baseboards and light switches to remove Dubai\'s fine desert dust.',
  },
  {
    q: 'How often should I get my sofa and mattress professionally cleaned?',
    a: 'Due to Dubai\'s high humidity and dust levels, we recommend professional sofa and mattress cleaning every 6 months. This helps eliminate dust mites, allergens, and sweat accumulation that can affect indoor air quality and sleep health.',
  },
  {
    q: 'Is your marble polishing process dust-free?',
    a: 'Yes, we use a wet polishing method and advanced Italian machinery that ensures a dust-free environment. Whether you choose standard polishing or re-crystallization, your home remains clean throughout the restoration process.',
  },
  {
    q: 'How long does it take for carpets to dry after a professional clean?',
    a: 'Using our industrial-grade steam extraction or dry shampooing methods, most carpets are dry and ready to walk on within 3 to 6 hours, depending on the material and ventilation in the room.',
  },
  {
    q: 'Are the cleaning chemicals safe for children and pets?',
    a: 'Absolutely. We prioritize eco-friendly, non-toxic, and biodegradable cleaning solutions that are powerful against stains but completely safe for your family and pets.',
  },
  {
    q: 'How much does professional sofa cleaning cost in Dubai?',
    a: 'Prices typically range from AED 250 for a small sofa to AED 450+ for larger sectionals, depending on the material (fabric vs. leather) and cleaning method used.',
  },
  {
    q: 'What is the difference between marble polishing and crystallization?',
    a: 'Standard polishing removes scratches and stains to restore the stone\'s surface, while crystallization is a chemical process that adds a high-gloss, protective mirror finish to the marble.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <Hero slides={heroSlides} />

      {/* ══════════════════════════════════════
          ABOUT OUR AGENCY
      ══════════════════════════════════════ */}
      <section style={{ background: '#132040', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>

            <div style={{ padding: '2rem 0' }}>
              <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                About Our Agency
              </div>
              <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Dubai's Unique Cleaning Challenge — And How We Solve It
              </h2>
              <p style={{ color: '#9ca3af', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.9375rem' }}>
                In a city as fast-paced and glamorous as Dubai, maintaining a pristine home isn't just about aesthetics — it's a necessity. The unique challenges of the desert climate, including frequent sandstorms, high humidity, and fine dust, mean standard dusting simply isn't enough.
              </p>
              <p style={{ color: '#9ca3af', lineHeight: 1.85, marginBottom: '1.75rem', fontSize: '0.9375rem' }}>
                Whether you are a tenant in a Downtown apartment or a homeowner in Arabian Ranches, finding professional cleaning services in Dubai that understand the true standard of care is vital for your health and the longevity of your property. Al Haya delivers that standard — across all 7 UAE Emirates.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'IICRC-trained & vetted technicians',
                  'Eco-friendly, non-toxic solutions',
                  'Same-day service available',
                  'All 7 UAE Emirates covered',
                  '100% Satisfaction Guaranteed',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#d1d5db', fontSize: '0.9rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a84c" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="p-btn-outline">
                  Get Free Quote
                </a>
                <Link href="/about" className="p-btn-primary">
                  About Us
                </Link>
              </div>
            </div>

            <div className="p-about-img" style={{ aspectRatio: '4/3', minHeight: '280px', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
              <Image
                src="/images/hero/villa-apartment-cleaning-services.webp"
                alt="Professional cleaning team in Dubai villa — Al Haya deep cleaning services UAE"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — RICH CONTENT SECTIONS
      ══════════════════════════════════════ */}
      <section style={{ background: '#0d1b35', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              How We Help You
            </div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Our Professional Cleaning Services in Dubai
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto' }}>
              From luxury villas to marble restoration — specialized cleaning solutions built for Dubai's environment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.5rem' }}>

            {/* Villa & Apartment */}
            <div style={{ background: 'linear-gradient(160deg, #0e1b40 0%, #1c2f58 100%)', border: '1px solid rgba(80,140,255,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '180px' }}>
                <Image src="/images/services/villa-deep-cleaning.webp" alt="Villa deep cleaning Dubai — professional residential cleaning services UAE" fill className="object-cover" sizes="380px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))' }} />
                <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: '#c9a84c', color: '#111', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.25rem 0.65rem', borderRadius: '2px' }}>VILLA & APARTMENT</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  Bespoke Villa & Apartment Cleaning
                </h2>
                <h3 style={{ fontSize: '0.8rem', color: '#c9a84c', fontWeight: 600, marginBottom: '0.65rem', marginTop: 0 }}>
                  Designed for Dubai's Finest Homes
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  A typical 4-bedroom villa (3,500–8,000 sq ft) requires a team-based approach to handle multiple bathrooms, outdoor seating, pool decks, and the sand accumulation that occurs in garden-facing properties. Our villa cleaning Dubai service covers every corner.
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  For apartment cleaning, we focus on AC vents, balcony glass, and space-efficient deep cleaning — tackling the dust that enters through every gap. Over 55% of Dubai expats now opt for recurring maid services.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {['villa cleaning Dubai', 'move-in cleaning', 'move-out cleaning', 'deep cleaning villa Dubai', 'professional house cleaning UAE'].map((kw) => (
                    <span key={kw} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', fontSize: '0.6rem', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>{kw}</span>
                  ))}
                </div>
                <Link href="/services/villa-deep-cleaning" style={{ color: '#c9a84c', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>View Service →</Link>
              </div>
            </div>

            {/* Sofa Cleaning */}
            <div style={{ background: 'linear-gradient(160deg, #0e1b40 0%, #1c2f58 100%)', border: '1px solid rgba(80,140,255,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '180px' }}>
                <Image src="/images/services/sofa-cleaning.webp" alt="Sofa cleaning Dubai — professional upholstery and couch deep cleaning UAE" fill className="object-cover" sizes="380px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))' }} />
                <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: '#c9a84c', color: '#111', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.25rem 0.65rem', borderRadius: '2px' }}>SOFA CLEANING</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  Professional Sofa Cleaning Dubai
                </h2>
                <h3 style={{ fontSize: '0.8rem', color: '#c9a84c', fontWeight: 600, marginBottom: '0.65rem', marginTop: 0 }}>
                  Eliminating Allergens & Restoring Fabric
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  In Dubai's humid climate, your sofa acts as a magnet for allergens. 73% of residents now prioritize sofa cleaning using steam or dry shampoo methods over traditional vacuuming. We use IICRC-standard techniques for all fabric types — including velvet, silk, and leather sofa cleaning.
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  In 2026, professional cleaning of a standard 3-seater sofa in Dubai ranges between AED 250 and AED 400, depending on material.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {['sofa cleaning Dubai', 'couch cleaning service', 'upholstery cleaning UAE', 'leather sofa cleaning', 'sofa shampooing Dubai'].map((kw) => (
                    <span key={kw} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', fontSize: '0.6rem', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>{kw}</span>
                  ))}
                </div>
                <Link href="/services/sofa-cleaning" style={{ color: '#c9a84c', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>View Service →</Link>
              </div>
            </div>

            {/* Mattress Cleaning */}
            <div style={{ background: 'linear-gradient(160deg, #0e1b40 0%, #1c2f58 100%)', border: '1px solid rgba(80,140,255,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '180px' }}>
                <Image src="/images/services/mattress-cleaning.webp" alt="Mattress cleaning Dubai — UV-C sanitization and HEPA vacuum deep cleaning UAE" fill className="object-cover" sizes="380px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))' }} />
                <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: '#c9a84c', color: '#111', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.25rem 0.65rem', borderRadius: '2px' }}>MATTRESS</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  Specialized Mattress Cleaning Dubai
                </h2>
                <h3 style={{ fontSize: '0.8rem', color: '#c9a84c', fontWeight: 600, marginBottom: '0.65rem', marginTop: 0 }}>
                  UV-C Sanitization for a Healthier Sleep
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  The average person releases nearly 200ml of sweat every night. In Dubai's heat, this moisture — combined with dead skin cells — creates the perfect breeding ground for dust mites. Mattress cleaning is no longer a luxury; it's a health requirement.
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  We use high-powered UV-C sanitization and medical-grade HEPA vacuums to extract allergens from deep within the foam, significantly improving sleep quality and reducing respiratory issues like asthma.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {['mattress cleaning Dubai', 'mattress sanitization UAE', 'dust mite removal', 'UV-C mattress cleaning', 'allergen removal Dubai'].map((kw) => (
                    <span key={kw} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', fontSize: '0.6rem', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>{kw}</span>
                  ))}
                </div>
                <Link href="/services/mattress-cleaning" style={{ color: '#c9a84c', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>View Service →</Link>
              </div>
            </div>

            {/* Carpet Cleaning */}
            <div style={{ background: 'linear-gradient(160deg, #0e1b40 0%, #1c2f58 100%)', border: '1px solid rgba(80,140,255,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '180px' }}>
                <Image src="/images/services/carpet-cleaning.webp" alt="Carpet cleaning Dubai — professional steam extraction and rug cleaning UAE" fill className="object-cover" sizes="380px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))' }} />
                <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: '#c9a84c', color: '#111', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.25rem 0.65rem', borderRadius: '2px' }}>CARPET</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  Deep Carpet Cleaning Dubai
                </h2>
                <h3 style={{ fontSize: '0.8rem', color: '#c9a84c', fontWeight: 600, marginBottom: '0.65rem', marginTop: 0 }}>
                  Preserving the Life of Your Luxury Rugs
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  Sand particles are abrasive — left in carpet fibers, they act like sandpaper, wearing the rug down with every step. Our process: industrial grooming to lift the pile, steam extraction to dissolve oils and spills, and rapid drying to prevent mold growth.
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  From machine-made rugs to priceless Persian carpets, we provide pet-safe and eco-friendly solutions for every carpet type.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {['carpet cleaning Dubai', 'rug cleaning services UAE', 'steam carpet cleaning', 'professional carpet cleaners', 'carpet stain removal Dubai'].map((kw) => (
                    <span key={kw} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', fontSize: '0.6rem', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>{kw}</span>
                  ))}
                </div>
                <Link href="/services/carpet-cleaning" style={{ color: '#c9a84c', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>View Service →</Link>
              </div>
            </div>

            {/* Marble Polishing */}
            <div style={{ background: 'linear-gradient(160deg, #0e1b40 0%, #1c2f58 100%)', border: '1px solid rgba(80,140,255,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '180px' }}>
                <Image src="/images/services/marble-polishing.webp" alt="Marble polishing Dubai — professional floor restoration and re-crystallization UAE" fill className="object-cover" sizes="380px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))' }} />
                <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: '#c9a84c', color: '#111', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.25rem 0.65rem', borderRadius: '2px' }}>MARBLE</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  Premium Marble Polishing Dubai
                </h2>
                <h3 style={{ fontSize: '0.8rem', color: '#c9a84c', fontWeight: 600, marginBottom: '0.65rem', marginTop: 0 }}>
                  Re-Crystallization & Mirror-Like Restoration
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  Marble floors are a staple of luxury Dubai real estate, but they're porous and prone to dullness. Standard mopping leaves a film that hides the stone's natural veins. Our marble restoration UAE service includes standard polishing, re-crystallization (a chemical process creating a durable high-gloss skin), and expert stain removal for etch marks from acidic spills.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {['marble polishing Dubai', 'floor polishing services', 'marble restoration UAE', 'stone polishing UAE', 'marble re-crystallization Dubai'].map((kw) => (
                    <span key={kw} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', fontSize: '0.6rem', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>{kw}</span>
                  ))}
                </div>
                <Link href="/services/marble-polishing" style={{ color: '#c9a84c', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>View Service →</Link>
              </div>
            </div>

            {/* Seasonal / More Services */}
            <div style={{ background: 'linear-gradient(160deg, #0e1b40 0%, #1c2f58 100%)', border: '1px solid rgba(80,140,255,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '180px' }}>
                <Image src="/images/hero/cleaning-services-UAE.webp" alt="Seasonal cleaning Dubai — post-sandstorm deep clean and AC duct cleaning UAE" fill className="object-cover" sizes="380px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))' }} />
                <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: '#c9a84c', color: '#111', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.25rem 0.65rem', borderRadius: '2px' }}>SEASONAL</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  The Seasonal Approach to Dubai Cleaning
                </h2>
                <h3 style={{ fontSize: '0.8rem', color: '#c9a84c', fontWeight: 600, marginBottom: '0.65rem', marginTop: 0 }}>
                  Post-Sandstorm Recovery & AC Duct Cleaning
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#d1d5db' }}>Summer (May–Sept):</strong> Focus on AC duct cleaning and filter changes to manage humidity and prevent mold buildup in your home.
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  <strong style={{ color: '#d1d5db' }}>Autumn / Spring:</strong> Schedule a post-sandstorm deep clean to remove the fine dust that settles on every ledge, window track, and upholstered surface throughout your property.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {['post-sandstorm cleaning Dubai', 'AC duct cleaning UAE', 'deep cleaning Dubai', 'seasonal cleaning service', 'move-in cleaning services'].map((kw) => (
                    <span key={kw} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', fontSize: '0.6rem', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>{kw}</span>
                  ))}
                </div>
                <Link href="/services/apartment-cleaning" style={{ color: '#c9a84c', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>View All Services →</Link>
              </div>
            </div>

          </div>

          {/* All Services CTA */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ color: '#6b7280', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              Also available: Curtain Cleaning, Dining Chair Cleaning, Car Interior Detailing, Office Cleaning & Restaurant Kitchen Cleaning
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {services.slice(0, 5).map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`} style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c', fontSize: '0.75rem', fontWeight: 600, padding: '0.4rem 1rem', borderRadius: '500px', textDecoration: 'none' }}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section style={{ background: '#132040', padding: '5rem 0', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Our Promise</div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Why Choose Our Professional Cleaning Services in Dubai?
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', maxWidth: '580px', margin: '0 auto' }}>
              Trusted by homeowners across Marina, Downtown, Palm Jumeirah, and Arabian Ranches.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                title: 'Vetted, Insured & IICRC-Trained',
                desc: 'Every technician is background-checked, insured, and trained to international IICRC standards — the gold standard in the cleaning industry.',
                icon: '🏅',
              },
              {
                title: 'Eco-Friendly & Non-Toxic',
                desc: 'We use biodegradable, non-toxic sanitization solutions safe for children, pets, and allergy sufferers — powerful on stains, gentle on your home.',
                icon: '🌿',
              },
              {
                title: 'Same-Day Service Available',
                desc: 'Need a clean today? Book via WhatsApp and our team arrives the same day, fully equipped — across Dubai, Sharjah, Abu Dhabi, and all UAE Emirates.',
                icon: '⚡',
              },
              {
                title: '100% Satisfaction Guarantee',
                desc: 'Not satisfied with the result? We come back at no extra charge. Your satisfaction is our standard — not an exception.',
                icon: '✓',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: 'linear-gradient(160deg, #0e1b40, #1c2f58)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '10px', padding: '1.75rem 1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-josefin)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section style={{ background: '#0d1b35', padding: '5rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Common Questions</div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff' }}>
              Frequently Asked Questions About Cleaning in Dubai
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: 'linear-gradient(160deg, #0e1b40, #1c2f58)', border: '1px solid rgba(80,140,255,0.2)', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
                <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-josefin)', fontSize: '0.95rem', fontWeight: 700, color: '#fff', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  {faq.q}
                  <span style={{ color: '#c9a84c', fontSize: '1.2rem', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.75, marginTop: '0.875rem', marginBottom: 0 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1b35 0%, #1a0a2e 45%, #2d1b00 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '380px', height: '380px', borderRadius: '50%', background: 'rgba(201,168,76,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(201,168,76,0.05)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {[
              { number: '11+', label: 'Services' },
              { number: '7', label: 'Emirates' },
              { number: '500+', label: 'Happy Clients' },
              { number: 'Same Day', label: 'Availability' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center', minWidth: '90px' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#c9a84c', fontFamily: 'var(--font-josefin)', lineHeight: 1.1 }}>{stat.number}</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #c9a84c, #25D366)', margin: '0 auto 2.5rem' }} />

          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Book Today</div>
            <h2 style={{ fontFamily: 'var(--font-josefin)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Ready to Refresh Your Space? Book a Deep Clean Today
            </h2>
            <p style={{ fontSize: '1rem', color: '#9ca3af', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Same-day service across Dubai, Sharjah, Abu Dhabi and all UAE Emirates. Message us on WhatsApp for a free instant quote — we respond in minutes.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                minWidth: '200px', justifyContent: 'center',
                padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff', fontWeight: 700, borderRadius: '500px',
                textDecoration: 'none', fontSize: '0.95rem',
                boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.103 1.523 5.83L.057 23.547a.5.5 0 00.612.611l5.718-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.386l-.36-.214-3.737.978.997-3.643-.235-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                </svg>
                WhatsApp Now
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                minWidth: '200px', justifyContent: 'center',
                padding: '0.875rem 2rem',
                background: 'transparent', color: '#c9a84c', fontWeight: 700,
                borderRadius: '500px', textDecoration: 'none', fontSize: '0.95rem',
                border: '2px solid #c9a84c', boxShadow: '0 4px 20px rgba(201,168,76,0.15)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
                </svg>
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EMIRATES
      ══════════════════════════════════════ */}
      <EmiratesSection emirates={emirates} />

      <WhatsAppButton />
    </>
  )
}
