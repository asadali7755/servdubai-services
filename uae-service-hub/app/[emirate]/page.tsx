import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import Reveal from '@/components/Reveal'
import DnaHero from '@/components/dna/Hero'
import Pointer3D from '@/components/dna/Pointer3D'
import { SectionHead, FaqBlock, CtaBlock, StickyBar } from '@/components/dna/Blocks'
import { emirates, getEmirateBySlug } from '@/lib/data/emirates'
import { services } from '@/lib/data/services'
import { EMIRATE_PROFILES } from '@/lib/data/emirateProfiles'
import { getCityProfile } from '@/lib/data/cityProfiles'
import { getServiceHoverImage } from '@/lib/data/serviceGalleryImages'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, shortServiceName } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { getEmirateCoords } from '@/lib/data/cityCoordinates'
import { SITE_CONFIG } from '@/lib/data/constants'
import { makeDna, dnaStyle } from '@/lib/design/dna'
import { fraunces } from '@/lib/design/fonts'
import '../dna.css'

type Props = { params: Promise<{ emirate: string }> }

export async function generateStaticParams(): Promise<{ emirate: string }[]> {
  return emirates.map((e) => ({ emirate: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: emirateSlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  if (!emirate) return {}
  const profile = EMIRATE_PROFILES[emirateSlug]
  return buildMetadata({
    title: `Cleaning Services in ${emirate.name} — Sofa, Carpet & Villa Cleaning`,
    description: profile?.tagline ?? `Professional cleaning services in ${emirate.name}. Free WhatsApp quote: ${SITE_CONFIG.phoneDisplay}.`,
    path: `/${emirateSlug}`,
  })
}

export default async function EmiratePage({ params }: Props) {
  const { emirate: emirateSlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  if (!emirate) notFound()
  const profile = EMIRATE_PROFILES[emirateSlug]
  const idx = emirates.findIndex((e) => e.slug === emirateSlug)
  const dna = makeDna('emirate', idx)
  const v = idx % 4

  const emirateCoords = getEmirateCoords(emirateSlug)
  const schema = buildLocalBusinessSchema({
    emirate: emirate.name,
    path: `/${emirateSlug}`,
    coords: emirateCoords
      ? { lat: emirateCoords.lat, lng: emirateCoords.lng, radiusMeters: emirateCoords.radiusMeters, addressLocality: emirate.name, addressRegion: emirateCoords.addressRegion }
      : undefined,
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: emirate.name, url: `/${emirateSlug}` },
  ])
  const faqSchema = profile ? buildFAQSchema(profile.faqs) : null
  const heroImage = emirate.image
  const waLink = getWhatsAppLink(undefined, emirate.name)
  const waMessage = `Hi Madinat Alhaya, I want to book a cleaning service in ${emirate.name}. Please share your services and pricing.`

  const crumb = (
    <nav className={`dn-crumb ${dna.hero === 'fullbleed' || dna.hero === 'mapgrid' ? 'dn-crumb-light' : ''}`} aria-label="Breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{emirate.name}</span>
    </nav>
  )

  const aboutSec: ReactNode = profile && (
    <section className="dn-sec" key="about">
      <div className="dn-wrap dn-story">
        <Reveal>
          <div className="dn-eyebrow">About {emirate.name}</div>
          <h2 className="dn-h dn-h2" style={{ marginBottom: '1.2rem' }}>
            {['How we work in', 'Cleaning across', 'What to expect in', 'Our teams in'][v]} {emirate.name}
          </h2>
          <div className="dn-stats" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div><b>{emirate.cities.length}</b><span>areas with their own page</span></div>
            <div><b>{services.length}</b><span>services available</span></div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="dn-p dn-dropcap">{profile.about[0]}</p>
          <p className="dn-p">{profile.about[1]}</p>
        </Reveal>
      </div>
    </section>
  )

  const areasSec: ReactNode = (
    <section className={`dn-sec ${v % 2 === 1 ? 'dn-dark' : ''}`} key="areas">
      <div className="dn-wrap">
        <SectionHead eyebrow="Choose your area" title={`Areas we cover in ${emirate.name}`} lead="Each area page has local tips, the services most booked there, and answers to questions from that neighbourhood." />
        <div className="dn-bento" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {emirate.cities.map((c, i) => {
            const cp = getCityProfile(emirate.slug, c.slug)
            const img = getServiceHoverImage(cp?.picks[0].service ?? 'sofa-cleaning', c.slug) ?? heroImage
            return (
              <Pointer3D key={c.slug} className="dn-bento-cell" style={{ gridColumn: 'auto', gridRow: 'auto' }}>
                <Link href={`/${emirate.slug}/${c.slug}`} className="dn-bento-card" style={{ minHeight: 250 }}>
                  <Image src={img} alt={`Cleaning services in ${c.name}`} fill sizes="(max-width: 760px) 100vw, 300px" />
                  <span className="dn-bento-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="dn-h">{c.name}</h3>
                  {cp && <p>{cp.tagline}</p>}
                </Link>
              </Pointer3D>
            )
          })}
        </div>
      </div>
    </section>
  )

  const highlightsSec: ReactNode = profile && (
    <section className="dn-sec" key="highlights">
      <div className="dn-wrap">
        <SectionHead eyebrow={`Why ${emirate.name} homes book us`} title={['What makes it work', 'Four things we get right', 'Built for local homes', 'The details that matter'][v]} />
        <div className="dn-qcards">
          {profile.highlights.map((h) => (
            <div key={h.title} className="dn-qcard" style={{ paddingRight: 24 }}>
              <h3 className="dn-h">{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const servicesSec: ReactNode = (
    <section className="dn-sec dn-sec-tight" key="services">
      <div className="dn-wrap">
        <div className="dn-eyebrow">All services in {emirate.name}</div>
        <div className="dn-chips" style={{ marginTop: 6 }}>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="dn-chip">{shortServiceName(s.name)}</Link>
          ))}
        </div>
      </div>
    </section>
  )

  const faqSec: ReactNode = profile && (
    <section className="dn-sec" key="faq">
      <div className="dn-wrap">
        <SectionHead eyebrow="FAQ" title={`${emirate.name}: common questions`} />
        <FaqBlock style={dna.faq} faqs={profile.faqs} />
      </div>
    </section>
  )

  const ctaSec: ReactNode = (
    <section className="dn-sec" key="cta">
      <div className="dn-wrap">
        <CtaBlock
          style={dna.cta}
          title={`Book a cleaning anywhere in ${emirate.name}`}
          text={`Tell us your area and what needs cleaning. You get a clear price and the next available slot in ${emirate.name}.`}
          waLink={waLink}
          waMessage={waMessage}
          phone={SITE_CONFIG.phone}
          phoneDisplay={SITE_CONFIG.phoneDisplay}
          quoteId={`quote-${emirate.slug}`}
          quoteSource={`Emirate page — ${emirate.name}`}
          quoteHeading={`Free quote in ${emirate.name}`}
        />
      </div>
    </section>
  )

  const ORDERS: ReactNode[][] = [
    [areasSec, aboutSec, highlightsSec, servicesSec, faqSec, ctaSec],
    [aboutSec, areasSec, servicesSec, highlightsSec, ctaSec, faqSec],
    [aboutSec, highlightsSec, areasSec, faqSec, servicesSec, ctaSec],
    [areasSec, highlightsSec, aboutSec, ctaSec, servicesSec, faqSec],
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className={`dn-page dn-f-${dna.font} ${fraunces.variable}`} style={dnaStyle(dna)} data-dna={`${dna.hero}-${dna.palette.name}-${dna.order}`}>
        <DnaHero
          style={dna.hero}
          badge={`${emirate.cities.length} areas · ${emirate.name}`}
          title={`Cleaning Services in ${emirate.name}`}
          highlight={emirate.name}
          tagline={profile?.tagline ?? ''}
          image={heroImage}
          imageAlt={`${emirate.name} — cleaning services by Madinat Alhaya`}
          extraImages={['/images/hero/sofa-carpet-cleaning.webp', '/images/hero/villa-apartment-cleaning-services.webp']}
          chips={emirate.cities.map((c) => c.name.replace(/ \(.*\)/, ''))}
          waLink={waLink}
          phone={SITE_CONFIG.phone}
          phoneDisplay={SITE_CONFIG.phoneDisplay}
          meta={[
            { value: String(emirate.cities.length), label: 'areas covered' },
            { value: 'Free', label: 'WhatsApp quote' },
          ]}
          coords={emirateCoords ? { lat: emirateCoords.lat, lng: emirateCoords.lng } : undefined}
          crumb={crumb}
          seed={emirate.slug}
        />
        {ORDERS[dna.order]}
        <StickyBar waLink={waLink} phone={SITE_CONFIG.phone} />
      </div>
      <WhatsAppButton />
    </>
  )
}
