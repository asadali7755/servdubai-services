import type { Metadata } from 'next'
import Image from 'next/image'
import StockMedia from '@/components/dna/StockMedia'
import { getCarMedia } from '@/lib/data/carMedia'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import ServiceVideoShowcase from '@/components/ServiceVideoShowcase'
import Reveal from '@/components/Reveal'
import DnaHero from '@/components/dna/Hero'
import BeforeAfter from '@/components/dna/BeforeAfter'
import Pointer3D from '@/components/dna/Pointer3D'
import { SectionHead, FaqBlock, CtaBlock, StickyBar } from '@/components/dna/Blocks'
import { services, getServiceBySlug } from '@/lib/data/services'
import { emirates, getCityBySlug } from '@/lib/data/emirates'
import { combosForService } from '@/lib/data/serviceAreaCombos'
import { buildMetadata, buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema, shortServiceName } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import { makeDna, dnaStyle } from '@/lib/design/dna'
import { fraunces } from '@/lib/design/fonts'
import '../../dna.css'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return services.map((s) => ({ slug: s.slug }))
}

/**
 * Real work photos per service. Marble-gallery images are deliberately NOT used:
 * they are another brand's ad graphics (own logo + phone number), which would
 * put a different business's contact details on this site.
 */
const GALLERY: Record<string, { src: string; alt: string }[]> = {
  'carpet-cleaning': [1, 2, 3, 4, 5, 6].map((n) => ({ src: `/images/carpet-gallery/carpet-${n}.jpeg`, alt: `Carpet cleaning job ${n} by Madinat Alhaya` })),
  'mattress-cleaning': [1, 2, 3].map((n) => ({ src: `/images/mattress-gallery/mattress-${n}.webp`, alt: `Mattress cleaning job ${n} by Madinat Alhaya` })),
  'villa-deep-cleaning': [1, 2].map((n) => ({ src: `/images/villa-gallery/villa-${n}.jpg`, alt: `Villa deep cleaning job ${n} by Madinat Alhaya` })),
  'office-cleaning': [1, 2].map((n) => ({ src: `/images/office-gallery/office-${n}.jpg`, alt: `Office cleaning job ${n} by Madinat Alhaya` })),
  'restaurant-kitchen-cleaning': [1, 2].map((n) => ({ src: `/images/kitchen-gallery/kitchen-${n}.jpg`, alt: `Kitchen deep cleaning job ${n} by Madinat Alhaya` })),
  'curtain-cleaning': [
    { src: '/galary-images-pics/curtain/blinds-steam-cleaning-dubai-1-poster.jpg', alt: 'Blinds steam cleaning by Madinat Alhaya' },
    { src: '/galary-images-pics/curtain/curtain-dry-steam-cleaning-dubai-2-poster.jpg', alt: 'Curtain dry steam cleaning by Madinat Alhaya' },
    { src: '/galary-images-pics/curtain/kitchen-blinds-steam-cleaning-dubai-3-poster.jpg', alt: 'Kitchen blinds cleaning by Madinat Alhaya' },
  ],
  'car-interior-detailing': [
    { src: '/galary-images-pics/car/car-floor-mat-cleaning-dubai-poster.jpg', alt: 'Car floor mat cleaning by Madinat Alhaya' },
    { src: '/galary-images-pics/car/car-interior-steam-cleaning-dubai-poster.jpg', alt: 'Car interior steam cleaning by Madinat Alhaya' },
  ],
}

const BEFORE_AFTER: Record<string, { before: string; after: string }> = {
  'sofa-cleaning': { before: '/images/sofa-before-after/before-4.jpeg', after: '/images/sofa-before-after/after-4.jpeg' },
  'mattress-cleaning': { before: '/images/mattress-gallery/mattress-before.jpeg', after: '/images/mattress-gallery/mattress-after.jpeg' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return buildMetadata({
    title: service.heroTitle || `${service.name} in Dubai & UAE`,
    description: service.shortDescription,
    path: `/services/${slug}`,
    imageUrl: service.images[0] ? `https://servedubai.ae${service.images[0]}` : undefined,
  })
}

/** fullDescription mixes short heading lines and paragraphs — split them. */
function parseDescription(text: string): { type: 'h' | 'p'; text: string }[] {
  return text
    .split('\n\n')
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => ({ type: t.length < 90 && !/[.!?:]$/.test(t) ? 'h' : 'p', text: t }))
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const idx = services.findIndex((s) => s.slug === slug)
  const dna = makeDna('service', idx)
  const v = idx % 4
  const blocks = parseDescription(service.fullDescription)
  const titleBlock = blocks[0]?.type === 'h' ? blocks.shift() : undefined
  const availableEmirates = emirates.filter((e) => service.availableInEmirates.includes(e.id))
  const areaPages = combosForService(slug)
    .map(({ emirate, city }) => ({ emirate, c: getCityBySlug(emirate, city) }))
    .filter((x) => x.c) as { emirate: string; c: NonNullable<ReturnType<typeof getCityBySlug>> }[]
  const gallery = GALLERY[slug] ?? []
  const ba = BEFORE_AFTER[slug]
  const heroImage = service.images[0]
  const stockPhotos = getCarMedia(slug)?.photos.map((p) => p.src).filter((src) => src !== heroImage) ?? []
  const extraImages = gallery.length ? gallery.slice(0, 2).map((g) => g.src) : stockPhotos.length ? stockPhotos.slice(0, 2) : [heroImage]
  const waLink = getWhatsAppLink(service.name)
  const waMessage = `Hi Madinat Alhaya, I want to book ${service.name}. Please share your pricing and available slots.`
  const shortName = shortServiceName(service.name)

  const serviceSchema = buildServiceSchema({ serviceName: service.name, description: service.shortDescription, url: `/services/${slug}` })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: service.name, url: `/services/${slug}` },
  ])
  const faqSchema = service.faqs.length > 0 ? buildFAQSchema(service.faqs) : null

  const crumb = (
    <nav className={`dn-crumb ${dna.hero === 'fullbleed' || dna.hero === 'mapgrid' ? 'dn-crumb-light' : ''}`} aria-label="Breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{shortName}</span>
    </nav>
  )

  /* ---------------- sections ---------------- */
  const aboutSec: ReactNode = (
    <section className="dn-sec" key="about">
      <div className="dn-wrap" style={{ maxWidth: 860 }}>
        <Reveal>
          <div className="dn-eyebrow">About this service</div>
          <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>{titleBlock?.text ?? `About ${shortName}`}</h2>
        </Reveal>
        {blocks.map((b, i) =>
          b.type === 'h' ? (
            <h3 key={i} className="dn-h dn-h3" style={{ margin: '2rem 0 .7rem' }}>{b.text}</h3>
          ) : (
            <p key={i} className={`dn-p ${i === 0 ? 'dn-dropcap' : ''}`}>{b.text}</p>
          )
        )}
        {service.contentSections?.map((s, i) => (
          <div key={`cs-${i}`}>
            {s.heading && (s.headingLevel === 'h2'
              ? <h2 className="dn-h dn-h2" style={{ margin: '2.6rem 0 1rem', fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)' }}>{s.heading}</h2>
              : <h3 className="dn-h dn-h3" style={{ margin: '1.6rem 0 .6rem' }}>{s.heading}</h3>)}
            {s.text && <p className="dn-p">{s.text}</p>}
          </div>
        ))}
        {service.externalWebsite && (
          <div className="dn-visit" style={{ marginTop: '2rem' }}>
            <span aria-hidden="true">↗</span>
            <div>
              <strong>Specialist site</strong>
              More on this service at{' '}
              <a href={service.externalWebsite.url} target="_blank" rel="noopener" style={{ color: 'var(--d-a2)', fontWeight: 600 }}>{service.externalWebsite.name}</a>.
            </div>
          </div>
        )}
      </div>
    </section>
  )

  const benefitsSec: ReactNode = service.benefits.length > 0 && (
    <section className={`dn-sec ${v % 2 === 0 ? 'dn-dark' : ''}`} key="benefits">
      <div className="dn-wrap dn-2col" style={{ alignItems: 'start' }}>
        <Reveal>
          <SectionHead eyebrow="What you get" title={['Included with every booking', 'What the service covers', 'Why clients choose this', 'The essentials'][v]} />
          {ba ? (
            <BeforeAfter before={ba.before} after={ba.after} alt={`${service.name} result by Madinat Alhaya`} />
          ) : (
            <Pointer3D className="dn-frame3d">
              <div className="dn-frame3d-inner" style={{ aspectRatio: '4/3' }}>
                <Image src={extraImages[0]} alt={`${service.name} by Madinat Alhaya`} fill sizes="(max-width: 860px) 100vw, 520px" style={{ objectFit: 'cover' }} />
              </div>
            </Pointer3D>
          )}
        </Reveal>
        <Reveal delay={80}>
          <ul className="dn-check">
            {service.benefits.map((b) => <li key={b}><span>{b}</span></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )

  const processSec: ReactNode = service.process.length > 0 && (
    <section className="dn-sec" key="process">
      <div className="dn-wrap">
        <SectionHead eyebrow="How it works" title={['Step by step', 'From booking to finish', 'Our process', 'What happens on the day'][(v + 1) % 4]} />
        <ol className="dn-notes" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))' }}>
          {service.process.map((p, i) => <li key={i}><b>STEP {i + 1}</b>{p}</li>)}
        </ol>
      </div>
    </section>
  )

  const gallerySec: ReactNode = gallery.length > 0 && (
    <section className="dn-sec dn-sec-tight" key="gallery">
      <div className="dn-wrap">
        <div className="dn-eyebrow">Our own work</div>
        <div className="dn-bento" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
          {gallery.map((g) => (
            <Pointer3D key={g.src} className="dn-bento-cell" style={{ gridColumn: 'auto', gridRow: 'auto' }}>
              <div className="dn-bento-card" style={{ minHeight: 220 }}>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 760px) 100vw, 300px" />
              </div>
            </Pointer3D>
          ))}
        </div>
      </div>
    </section>
  )

  const areasSec: ReactNode = (
    <section className="dn-sec dn-sec-tight" key="areas">
      <div className="dn-wrap" style={{ display: 'grid', gap: 22 }}>
        <div>
          <div className="dn-eyebrow">Available across {availableEmirates.length} emirates</div>
          <div className="dn-areas">
            {availableEmirates.map((e) => <Link key={e.slug} href={`/${e.slug}`}>{e.name}</Link>)}
          </div>
        </div>
        {areaPages.length > 0 && (
          <div>
            <div className="dn-eyebrow">{shortName} by area</div>
            <div className="dn-areas">
              {areaPages.map(({ emirate, c }) => (
                <Link key={`${emirate}-${c.slug}`} href={`/${emirate}/${c.slug}/${service.slug}`}>{c.name}</Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )

  const faqSec: ReactNode = service.faqs.length > 0 && (
    <section className="dn-sec" key="faq">
      <div className="dn-wrap">
        <SectionHead eyebrow="FAQ" title={`${shortName}: your questions`} />
        <FaqBlock style={dna.faq} faqs={service.faqs} />
      </div>
    </section>
  )

  const ctaSec: ReactNode = (
    <section className="dn-sec" key="cta">
      <div className="dn-wrap">
        <CtaBlock
          style={dna.cta}
          title={`Book ${shortName.toLowerCase()} today`}
          text="Send a photo and your area on WhatsApp — we reply with a clear price and the next available slot."
          waLink={waLink}
          waMessage={waMessage}
          phone={SITE_CONFIG.phone}
          phoneDisplay={SITE_CONFIG.phoneDisplay}
          quoteId={`quote-${slug}`}
          quoteSource={`Service page — ${service.name}`}
          quoteHeading={`Free ${shortName.toLowerCase()} quote`}
          defaultService={service.name}
        />
      </div>
    </section>
  )

  const videoSec: ReactNode = <ServiceVideoShowcase key="video" serviceSlug={slug} serviceName={service.name} />

  const carMedia = getCarMedia(slug)
  const stockSec: ReactNode = carMedia && (
    <StockMedia key="stock" media={carMedia} eyebrow="How it looks" heading={`What ${shortName.toLowerCase()} involves`} dark={dna.order % 2 === 1} />
  )

  const ORDERS: ReactNode[][] = [
    [benefitsSec, processSec, videoSec, stockSec, aboutSec, gallerySec, faqSec, ctaSec, areasSec],
    [benefitsSec, videoSec, stockSec, aboutSec, gallerySec, processSec, ctaSec, faqSec, areasSec],
    [processSec, benefitsSec, videoSec, stockSec, aboutSec, faqSec, gallerySec, ctaSec, areasSec],
    [benefitsSec, gallerySec, processSec, videoSec, stockSec, aboutSec, faqSec, ctaSec, areasSec],
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className={`dn-page dn-f-${dna.font} ${fraunces.variable}`} style={dnaStyle(dna)} data-dna={`${dna.hero}-${dna.palette.name}-${dna.order}`}>
        <DnaHero
          style={dna.hero}
          badge={`${service.category} · all 7 emirates`}
          title={(service.heroTitle ?? service.name).split('|')[0].trim()}
          highlight={shortName.split(' ')[0]}
          tagline={service.heroSubtitle ?? service.shortDescription}
          image={heroImage}
          imageAlt={`${service.name} by Madinat Alhaya`}
          extraImages={extraImages}
          chips={availableEmirates.map((e) => e.name)}
          waLink={waLink}
          phone={SITE_CONFIG.phone}
          phoneDisplay={SITE_CONFIG.phoneDisplay}
          meta={[
            { value: String(availableEmirates.length), label: 'emirates' },
            { value: 'Free', label: 'quote from a photo' },
          ]}
          crumb={crumb}
          seed={slug}
        />
        {ORDERS[dna.order]}
        <StickyBar waLink={waLink} phone={SITE_CONFIG.phone} />
      </div>
      <WhatsAppButton service={service.name} />
    </>
  )
}
