import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import Reveal from '@/components/Reveal'
import DnaHero from '@/components/dna/Hero'
import BeforeAfter from '@/components/dna/BeforeAfter'
import { SectionHead, ServicesBlock, TipsBlock, FaqBlock, LandmarksBlock, CtaBlock, StickyBar } from '@/components/dna/Blocks'
import { emirates, getEmirateBySlug, getCityBySlug } from '@/lib/data/emirates'
import { services, getServiceBySlug } from '@/lib/data/services'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, shortServiceName } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { getCityContent } from '@/lib/data/cityContent'
import { getCityProfile } from '@/lib/data/cityProfiles'
import { getCityCoords } from '@/lib/data/cityCoordinates'
import { hasCombo } from '@/lib/data/serviceAreaCombos'
import { getServiceHoverImage } from '@/lib/data/serviceGalleryImages'
import { SITE_CONFIG } from '@/lib/data/constants'
import { makeDna, dnaStyle, hash } from '@/lib/design/dna'
import { fraunces } from '@/lib/design/fonts'
import '../../dna.css'

type Props = { params: Promise<{ emirate: string; city: string }> }

const ALL_CITIES = emirates.flatMap((e) => e.cities.map((c) => `${e.slug}/${c.slug}`))

// Real before/after job photos with matching framing (see public/images/sofa-before-after)
const BA_PAIRS = [2, 4, 5, 6, 7]

// Section-title pools — rotated per page so headings don't repeat word-for-word site-wide
const T = {
  story: [
    (c: string) => `What homes in ${c} actually need`,
    (c: string) => `Cleaning in ${c}, the local way`,
    (c: string) => `Inside a typical ${c} visit`,
    (c: string) => `${c} homes, up close`,
  ],
  services: [
    (c: string) => `Most-booked in ${c}`,
    (c: string) => `Where to start in ${c}`,
    (c: string) => `Three jobs ${c} residents ask for most`,
    (c: string) => `Our top picks for ${c}`,
  ],
  tips: [
    (c: string) => `Keeping a ${c} home fresh between visits`,
    (c: string) => `Local care tips for ${c}`,
    (c: string) => `Small habits that help in ${c}`,
    (c: string) => `${c}: what we tell our clients`,
  ],
  faq: [
    (c: string) => `${c} questions, answered`,
    (c: string) => `Asked by ${c} residents`,
    (c: string) => `Before you book in ${c}`,
    (c: string) => `Good to know in ${c}`,
  ],
  servicesLead: [
    (c: string, pt: string) => `Every service is available in ${c}. These three make the biggest difference for ${pt}.`,
    (c: string, pt: string) => `Picked for ${pt} — the jobs we are booked for most often in ${c}.`,
    (c: string) => `If you only book one thing this season in ${c}, start here.`,
    (c: string, pt: string) => `Based on the ${pt} we clean every week in ${c}.`,
  ],
  tipsLead: [
    'Practical habits that keep fabric, floors and air fresher for longer.',
    'Simple things our technicians suggest after cleaning homes in this area.',
    'None of these replace a deep clean — but they stretch the time between one and the next.',
    'Small changes, noticeable difference — especially in the hotter months.',
  ],
  proofText: [
    'Send a photo of the sofa, rug or room on WhatsApp and you get a price back before anyone visits. The team brings its own machines and cleaning products.',
    'Pricing is confirmed on WhatsApp from a quick photo, so there are no surprises on the day. Equipment and products come with the team.',
    'No site survey needed for most jobs — a photo and the room size are enough for a quote. We bring everything with us.',
    'Message a picture, get a clear quote, pick a time. Machines, products and drop sheets all arrive with the team.',
  ],
  ctaTitle: [
    (c: string) => `Get a price for your ${c} home today`,
    (c: string) => `Ready for a cleaner home in ${c}?`,
    (c: string) => `Book your ${c} visit in two minutes`,
    (c: string) => `Free quote for ${c} — no obligation`,
  ],
  ctaText: [
    (c: string) => `Tell us what needs cleaning and where in ${c} — we reply with a clear price and the next available slot.`,
    (c: string) => `Send your area in ${c} and what you need cleaned. You will get a price and a time slot back on WhatsApp.`,
    (c: string) => `Leave your number or message us directly — we confirm the price before booking anything in ${c}.`,
    (c: string) => `A photo and your building name in ${c} are all we need to quote.`,
  ],
  proof: [
    'Real job, real result',
    'Slide to see the difference',
    'One of our recent sofa jobs',
    'Before and after — no filters',
  ],
}

export async function generateStaticParams(): Promise<{ emirate: string; city: string }[]> {
  return emirates.flatMap((e) => e.cities.map((c) => ({ emirate: e.slug, city: c.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: emirateSlug, city: citySlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  const city = getCityBySlug(emirateSlug, citySlug)
  if (!emirate || !city) return {}
  const localContent = getCityContent(emirateSlug, citySlug)
  return buildMetadata({
    title: `Cleaning Services in ${city.name}, ${emirate.name} | Madinat Alhaya`,
    description:
      localContent?.localDescription.slice(0, 155) ??
      `Professional cleaning in ${city.name}, ${emirate.name}. Sofa, carpet, villa & more. Same-day service. Call ${SITE_CONFIG.phone}.`,
    path: `/${emirateSlug}/${citySlug}`,
  })
}

export default async function CityPage({ params }: Props) {
  const { emirate: emirateSlug, city: citySlug } = await params
  const emirate = getEmirateBySlug(emirateSlug)
  const city = getCityBySlug(emirateSlug, citySlug)
  if (!emirate || !city) notFound()

  const local = getCityContent(emirateSlug, citySlug)
  const profile = getCityProfile(emirateSlug, citySlug)
  const coords = getCityCoords(emirateSlug, citySlug)
  const idx = Math.max(0, ALL_CITIES.indexOf(`${emirateSlug}/${citySlug}`))
  const dna = makeDna('city', idx)
  const v = idx % 4
  const path = `/${emirateSlug}/${citySlug}`

  const serviceHref = (slug: string) =>
    hasCombo(emirate.slug, city.slug, slug) ? `/${emirate.slug}/${city.slug}/${slug}` : `/services/${slug}`

  const pickSlugs = profile?.picks.map((p) => p.service) ?? ['sofa-cleaning', 'carpet-cleaning', 'villa-deep-cleaning']
  const pickItems = (profile?.picks ?? []).map((p) => {
    const s = getServiceBySlug(p.service)!
    return {
      name: s.name,
      href: serviceHref(s.slug),
      why: p.why,
      image: getServiceHoverImage(s.slug, city.slug) ?? s.images[0],
    }
  })
  const otherServices = (city.availableServices
    .map((id) => getServiceBySlug(id))
    .filter(Boolean) as typeof services)
    .filter((s) => !pickSlugs.includes(s.slug))
    .map((s) => ({ name: shortServiceName(s.name), href: serviceHref(s.slug) }))

  const siblingCities = emirate.cities.filter((c) => c.slug !== city.slug)
  const emirateBanner = emirate.image
  const heroImage = city.image ?? emirateBanner
  const landmarks = local?.landmarks ?? [city.name]
  const waLink = getWhatsAppLink(undefined, city.name)
  const waMessage = `Hi Madinat Alhaya, I want to book a cleaning service in ${city.name}. Please share your services and pricing.`
  const pair = BA_PAIRS[hash(city.slug) % BA_PAIRS.length]

  const localSchema = buildLocalBusinessSchema({ city: city.name, emirate: emirate.name, path, coords: coords ?? undefined })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: emirate.name, url: `/${emirate.slug}` },
    { name: city.name, url: path },
  ])
  const faqSchema = local?.localFAQs?.length ? buildFAQSchema(local.localFAQs) : null

  const crumb = (
    <nav className={`dn-crumb ${dna.hero === 'fullbleed' || dna.hero === 'mapgrid' ? 'dn-crumb-light' : ''}`} aria-label="Breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span>
      <Link href={`/${emirate.slug}`}>{emirate.name}</Link><span aria-hidden="true">/</span>
      <span>{city.name}</span>
    </nav>
  )

  /* ---------------- sections ---------------- */
  const story: ReactNode = profile && local && (
    <section className="dn-sec" key="story">
      <div className="dn-wrap dn-story">
        <Reveal>
          <div className="dn-eyebrow">{emirate.name} · {city.name}</div>
          <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>{T.story[v](city.name)}</h2>
          <div className="dn-story-quote">
            {local.areaNote}
            <small>Local note · {city.name}</small>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <span className="dn-prop">📍 {local.propertyType}</span>
          <p className="dn-p dn-dropcap">{local.localDescription}</p>
          <p className="dn-p">{profile.story[0]}</p>
          <p className="dn-p">{profile.story[1]}</p>
        </Reveal>
      </div>
    </section>
  )

  const servicesSec: ReactNode = (
    <section className={`dn-sec ${v === 2 ? 'dn-dark' : ''}`} key="services">
      <div className="dn-wrap">
        <SectionHead
          eyebrow="Recommended here"
          title={T.services[(v + 1) % 4](city.name)}
          lead={T.servicesLead[(v + 2) % 4](city.name, local?.propertyType ?? 'homes here')}
        />
        <ServicesBlock style={dna.services} items={pickItems} others={otherServices} othersLabel={`Also available in ${city.name}:`} />
      </div>
    </section>
  )

  const proof: ReactNode = (
    <section className="dn-sec dn-sec-tight" key="proof">
      <div className="dn-wrap dn-2col">
        <Reveal>
          <BeforeAfter
            before={`/images/sofa-before-after/before-${pair}.jpeg`}
            after={`/images/sofa-before-after/after-${pair}.jpeg`}
            alt={`Sofa cleaning result by Madinat Alhaya, a job similar to what we do in ${city.name}`}
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="dn-eyebrow">{T.proof[v]}</div>
          <h2 className="dn-h dn-h2" style={{ marginBottom: '1rem' }}>Booking a visit in {city.name}</h2>
          {profile && (
            <div className="dn-visit">
              <span aria-hidden="true">🚐</span>
              <div><strong>Before we arrive</strong>{profile.visit}</div>
            </div>
          )}
          <p className="dn-p" style={{ marginTop: '1rem' }}>
            {T.proofText[(v + 3) % 4]}
          </p>
        </Reveal>
      </div>
    </section>
  )

  const tipLabels = dna.tips === 'timeline' ? ['Daily', 'Monthly', 'Seasonal'] : undefined
  const tips: ReactNode = profile && (
    <section className={`dn-sec ${v === 0 || v === 3 ? 'dn-dark' : ''}`} key="tips">
      <div className="dn-wrap dn-2col" style={{ alignItems: 'start' }}>
        <Reveal>
          <SectionHead eyebrow="Care between visits" title={T.tips[(v + 2) % 4](city.name)} lead={T.tipsLead[(v + 1) % 4]} />
        </Reveal>
        <Reveal delay={80}>
          <TipsBlock style={dna.tips} tips={profile.tips} labels={tipLabels} />
        </Reveal>
      </div>
    </section>
  )

  const landmarkSec: ReactNode = (
    <section className={dna.landmarks === 'marquee' ? 'dn-sec-tight' : 'dn-sec dn-sec-tight'} key="landmarks">
      {dna.landmarks === 'marquee' ? (
        <LandmarksBlock style="marquee" items={landmarks} />
      ) : (
        <div className="dn-wrap">
          <div className="dn-eyebrow">Streets &amp; buildings we cover in {city.name}</div>
          <LandmarksBlock style={dna.landmarks} items={landmarks} />
        </div>
      )}
    </section>
  )

  const faqSec: ReactNode = local?.localFAQs?.length ? (
    <section className="dn-sec" key="faq">
      <div className="dn-wrap">
        <SectionHead eyebrow="FAQ" title={T.faq[(v + 3) % 4](city.name)} />
        <FaqBlock style={dna.faq} faqs={local.localFAQs} />
      </div>
    </section>
  ) : null

  const cta: ReactNode = (
    <section className="dn-sec" key="cta">
      <div className="dn-wrap">
        <CtaBlock
          style={dna.cta}
          title={T.ctaTitle[(v + 1) % 4](city.name)}
          text={T.ctaText[(v + 2) % 4](city.name)}
          waLink={waLink}
          waMessage={waMessage}
          phone={SITE_CONFIG.phone}
          phoneDisplay={SITE_CONFIG.phoneDisplay}
          quoteId={`quote-${emirate.slug}-${city.slug}`}
          quoteSource={`Area page — ${city.name}, ${emirate.name}`}
          quoteHeading={`Free quote in ${city.name}`}
        />
      </div>
    </section>
  )

  const ORDERS: ReactNode[][] = [
    [story, servicesSec, landmarkSec, proof, tips, faqSec, cta],
    [servicesSec, story, proof, tips, landmarkSec, cta, faqSec],
    [landmarkSec, story, tips, servicesSec, faqSec, proof, cta],
    [story, proof, servicesSec, faqSec, landmarkSec, tips, cta],
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className={`dn-page dn-f-${dna.font} ${fraunces.variable}`} style={dnaStyle(dna)} data-dna={`${dna.hero}-${dna.palette.name}-${dna.order}`}>
        <DnaHero
          style={dna.hero}
          badge={`${emirate.name} · ${city.name}`}
          title={`Cleaning Services in ${city.name}`}
          highlight={city.name}
          tagline={profile?.tagline ?? `Professional cleaning across ${city.name}.`}
          image={heroImage}
          imageAlt={`${city.name}, ${emirate.name} — area served by Madinat Alhaya cleaning services`}
          extraImages={pickItems.map((p) => p.image)}
          chips={landmarks}
          waLink={waLink}
          phone={SITE_CONFIG.phone}
          phoneDisplay={SITE_CONFIG.phoneDisplay}
          meta={[
            { value: 'Same-day', label: 'slots when available' },
            { value: 'Free', label: 'WhatsApp quote' },
          ]}
          coords={coords ? { lat: coords.lat, lng: coords.lng } : undefined}
          crumb={crumb}
          seed={city.slug}
        />

        {ORDERS[dna.order]}

        {siblingCities.length > 0 && (
          <section className="dn-sec dn-sec-tight" style={{ paddingTop: 0 }}>
            <div className="dn-wrap">
              <div className="dn-eyebrow">Nearby in {emirate.name}</div>
              <div className="dn-areas">
                {siblingCities.map((c) => (
                  <Link key={c.id} href={`/${emirate.slug}/${c.slug}`}>{c.name}</Link>
                ))}
                <Link href={`/${emirate.slug}`}>All of {emirate.name} →</Link>
              </div>
            </div>
          </section>
        )}

        <StickyBar waLink={waLink} phone={SITE_CONFIG.phone} />
      </div>

      <WhatsAppButton city={city.name} />
    </>
  )
}
