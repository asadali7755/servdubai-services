import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'
import Reveal from '@/components/Reveal'
import DnaHero from '@/components/dna/Hero'
import BeforeAfter from '@/components/dna/BeforeAfter'
import Pointer3D from '@/components/dna/Pointer3D'
import { SectionHead, FaqBlock, CtaBlock, StickyBar, LandmarksBlock } from '@/components/dna/Blocks'
import { getEmirateBySlug, getCityBySlug } from '@/lib/data/emirates'
import { getServiceBySlug } from '@/lib/data/services'
import { SERVICE_AREA_COMBOS, hasCombo, combosForCity, combosForService } from '@/lib/data/serviceAreaCombos'
import { getCityContent } from '@/lib/data/cityContent'
import { getCityCoords } from '@/lib/data/cityCoordinates'
import { getServiceGallery } from '@/lib/data/serviceGalleryImages'
import { getComboIntro } from '@/lib/data/comboIntros'
import { getComboExtra } from '@/lib/data/comboExtras'
import { buildMetadata, buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema, shortServiceName } from '@/lib/utils/seo'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { SITE_CONFIG } from '@/lib/data/constants'
import { makeDna, dnaStyle, hash } from '@/lib/design/dna'
import { fraunces } from '@/lib/design/fonts'
import '../../../dna.css'

type Props = { params: Promise<{ emirate: string; city: string; service: string }> }

export const dynamicParams = false

const BA_PAIRS = [2, 4, 5, 6, 7]

const T = {
  focus: [
    (s: string, c: string) => `How we handle ${s.toLowerCase()} in ${c}`,
    (s: string, c: string) => `What is different about ${c}`,
    (_s: string, c: string) => `Built around ${c} homes`,
    (s: string, c: string) => `${c} ${s.toLowerCase()}: our approach`,
  ],
  process: ['The visit, step by step', 'From arrival to finish', 'What happens on the day', 'Our process'],
  faq: [
    (c: string) => `Questions from ${c}`,
    (c: string) => `Before you book in ${c}`,
    () => 'Quick answers',
    (c: string) => `${c} FAQ`,
  ],
  proof: ['Real result from one of our jobs', 'Slide to compare', 'Before and after', 'Our own work, unedited'],
}

export async function generateStaticParams() {
  return SERVICE_AREA_COMBOS.map((c) => ({ emirate: c.emirate, city: c.city, service: c.service }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: eSlug, city: cSlug, service: sSlug } = await params
  const emirate = getEmirateBySlug(eSlug)
  const city = getCityBySlug(eSlug, cSlug)
  const service = getServiceBySlug(sSlug)
  if (!emirate || !city || !service) return {}
  const shortService = service.name.split(/[&]/)[0].trim()
  const comboIntro = getComboIntro(eSlug, cSlug, sSlug)
  return buildMetadata({
    title: `${shortService} in ${city.name} | Madinat Alhaya`,
    description:
      comboIntro?.metaDescription ??
      `Professional ${service.name.toLowerCase()} in ${city.name}, ${emirate.name}. Free quote — call ${SITE_CONFIG.phone}.`,
    path: `/${eSlug}/${cSlug}/${sSlug}`,
    imageUrl: service.images[0] ? `https://servedubai.ae${service.images[0]}` : undefined,
  })
}

export default async function ServiceAreaPage({ params }: Props) {
  const { emirate: eSlug, city: cSlug, service: sSlug } = await params
  const emirate = getEmirateBySlug(eSlug)
  const city = getCityBySlug(eSlug, cSlug)
  const service = getServiceBySlug(sSlug)
  if (!emirate || !city || !service || !hasCombo(eSlug, cSlug, sSlug)) notFound()

  const local = getCityContent(eSlug, cSlug)
  const coords = getCityCoords(eSlug, cSlug)
  const intro = getComboIntro(eSlug, cSlug, sSlug)
  const extra = getComboExtra(eSlug, cSlug, sSlug)
  const path = `/${eSlug}/${cSlug}/${sSlug}`
  const idx = Math.max(0, SERVICE_AREA_COMBOS.findIndex((c) => c.emirate === eSlug && c.city === cSlug && c.service === sSlug))
  const dna = makeDna('combo', idx)
  const v = idx % 4
  const shortService = shortServiceName(service.name)

  const gallery = getServiceGallery(service.slug)
  const g0 = hash(path)
  const heroImage = gallery.length > 1 ? gallery[g0 % gallery.length] : service.images[0]
  const extraImages = gallery.length > 2 ? [gallery[(g0 + 1) % gallery.length], gallery[(g0 + 2) % gallery.length]] : [service.images[0]]

  const faqs = extra?.faqs ?? service.faqs.slice(0, 3)
  const waLink = getWhatsAppLink(service.name, city.name)
  const waMessage = `Hi Madinat Alhaya, I want to book ${service.name} in ${city.name}. Please share pricing and available time slots.`

  const siblingServices = combosForCity(eSlug, cSlug)
    .filter((s) => s !== sSlug)
    .map((s) => getServiceBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[]
  const sameServiceAreas = combosForService(sSlug)
    .filter((c) => !(c.emirate === eSlug && c.city === cSlug))
    .map((c) => ({ ...c, name: getCityBySlug(c.emirate, c.city)?.name ?? c.city }))
    .slice(0, 10)

  const serviceSchema = buildServiceSchema({
    serviceName: `${service.name} in ${city.name}`,
    description: intro?.metaDescription ?? `${service.shortDescription} Available in ${city.name}, ${emirate.name}.`,
    url: path,
    emirate: emirate.name,
  })
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: emirate.name, url: `/${emirate.slug}` },
    { name: city.name, url: `/${emirate.slug}/${city.slug}` },
    { name: service.name, url: path },
  ])
  const faqSchema = faqs.length ? buildFAQSchema(faqs) : null

  const crumb = (
    <nav className={`dn-crumb ${dna.hero === 'fullbleed' || dna.hero === 'mapgrid' ? 'dn-crumb-light' : ''}`} aria-label="Breadcrumb">
      <Link href="/">Home</Link><span aria-hidden="true">/</span>
      <Link href={`/${emirate.slug}`}>{emirate.name}</Link><span aria-hidden="true">/</span>
      <Link href={`/${emirate.slug}/${city.slug}`}>{city.name}</Link><span aria-hidden="true">/</span>
      <span>{shortService}</span>
    </nav>
  )

  /* ---------------- sections ---------------- */
  const introSec: ReactNode = (
    <section className="dn-sec" key="intro">
      <div className="dn-wrap dn-2col" style={{ alignItems: 'start' }}>
        <Reveal>
          <div className="dn-eyebrow">{shortService} · {city.name}</div>
          <p className="dn-p dn-dropcap" style={{ fontSize: '1.08rem' }}>{intro?.intro ?? service.shortDescription}</p>
        </Reveal>
        {extra && (
          <Reveal delay={80}>
            <Pointer3D className="dn-cta-card" style={{ transform: undefined }}>
              <div className="dn-eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>{city.name}</div>
              <h2 className="dn-h dn-h3" style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.5rem' }}>{T.focus[v](shortService, city.name)}</h2>
              <ul className="dn-check" style={{ gap: 10 }}>
                {extra.focus.map((f) => (
                  <li key={f} style={{ background: 'rgba(255,255,255,.07)', borderColor: 'rgba(255,255,255,.14)', color: '#fff' }}><span>{f}</span></li>
                ))}
              </ul>
            </Pointer3D>
          </Reveal>
        )}
      </div>
    </section>
  )

  const proofSec: ReactNode = (
    <section className={`dn-sec ${v === 1 ? 'dn-dark' : ''}`} key="proof">
      <div className="dn-wrap dn-2col">
        <Reveal>
          {service.slug === 'sofa-cleaning' ? (
            <BeforeAfter
              before={`/images/sofa-before-after/before-${BA_PAIRS[g0 % BA_PAIRS.length]}.jpeg`}
              after={`/images/sofa-before-after/after-${BA_PAIRS[g0 % BA_PAIRS.length]}.jpeg`}
              alt={`Sofa cleaning by Madinat Alhaya — the same process used in ${city.name}`}
            />
          ) : (
            <div className="dn-ba" style={{ aspectRatio: '4/3' }}>
              <Image src={extraImages[0] ?? heroImage} alt={`${service.name} work by Madinat Alhaya, as offered in ${city.name}`} fill sizes="(max-width: 860px) 100vw, 560px" style={{ objectFit: 'cover' }} />
            </div>
          )}
        </Reveal>
        <Reveal delay={80}>
          <div className="dn-eyebrow">{T.proof[v]}</div>
          <h2 className="dn-h dn-h2" style={{ marginBottom: '1.2rem' }}>{T.process[(v + 1) % 4]}</h2>
          <ol className="dn-tl">
            {service.process.slice(0, 5).map((step, i) => (
              <li key={i}><b>Step {i + 1}</b>{step}</li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )

  const areaSec: ReactNode = local ? (
    <section className="dn-sec-tight" key="area">
      {dna.landmarks === 'marquee' ? (
        <LandmarksBlock style="marquee" items={local.landmarks} />
      ) : (
        <div className="dn-wrap">
          <div className="dn-eyebrow">Covered in {city.name}</div>
          <LandmarksBlock style={dna.landmarks} items={local.landmarks} />
        </div>
      )}
    </section>
  ) : null

  const faqSec: ReactNode = (
    <section className="dn-sec" key="faq">
      <div className="dn-wrap">
        <SectionHead eyebrow="FAQ" title={T.faq[(v + 2) % 4](city.name)} />
        <FaqBlock style={dna.faq} faqs={faqs} />
      </div>
    </section>
  )

  const ctaSec: ReactNode = (
    <section className="dn-sec" key="cta">
      <div className="dn-wrap">
        <CtaBlock
          style={dna.cta}
          title={`Book ${shortService.toLowerCase()} in ${city.name}`}
          text={`Send a photo and your location in ${city.name} — we confirm the price on WhatsApp before booking.`}
          waLink={waLink}
          waMessage={waMessage}
          phone={SITE_CONFIG.phone}
          phoneDisplay={SITE_CONFIG.phoneDisplay}
          quoteId={`quote-${emirate.slug}-${city.slug}-${service.slug}`}
          quoteSource={`${service.name} in ${city.name}`}
          quoteHeading={`${shortService} quote · ${city.name}`}
          defaultService={service.name}
        />
      </div>
    </section>
  )

  const ORDERS: ReactNode[][] = [
    [introSec, proofSec, areaSec, faqSec, ctaSec],
    [introSec, areaSec, proofSec, ctaSec, faqSec],
    [areaSec, introSec, faqSec, proofSec, ctaSec],
    [introSec, faqSec, proofSec, areaSec, ctaSec],
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className={`dn-page dn-f-${dna.font} ${fraunces.variable}`} style={dnaStyle(dna)} data-dna={`${dna.hero}-${dna.palette.name}-${dna.order}`}>
        <DnaHero
          style={dna.hero}
          badge={`${emirate.name} · ${city.name}`}
          title={`${service.name} in ${city.name}`}
          highlight={city.name}
          tagline={extra?.headline ?? service.shortDescription}
          image={heroImage}
          imageAlt={`${service.name} in ${city.name}, ${emirate.name} — Madinat Alhaya`}
          extraImages={extraImages}
          chips={local?.landmarks ?? [city.name]}
          waLink={waLink}
          phone={SITE_CONFIG.phone}
          phoneDisplay={SITE_CONFIG.phoneDisplay}
          meta={[
            { value: 'Free', label: 'quote from a photo' },
            { value: city.name, label: 'covered' },
          ]}
          coords={coords ? { lat: coords.lat, lng: coords.lng } : undefined}
          crumb={crumb}
          seed={path}
        />

        {ORDERS[dna.order]}

        <section className="dn-sec dn-sec-tight" style={{ paddingTop: 0 }}>
          <div className="dn-wrap" style={{ display: 'grid', gap: 22 }}>
            {siblingServices.length > 0 && (
              <div>
                <div className="dn-eyebrow">More in {city.name}</div>
                <div className="dn-areas">
                  {siblingServices.map((s) => (
                    <Link key={s.slug} href={`/${emirate.slug}/${city.slug}/${s.slug}`}>{shortServiceName(s.name)}</Link>
                  ))}
                  <Link href={`/${emirate.slug}/${city.slug}`}>All services in {city.name} →</Link>
                </div>
              </div>
            )}
            {sameServiceAreas.length > 0 && (
              <div>
                <div className="dn-eyebrow">{shortService} in other areas</div>
                <div className="dn-areas">
                  {sameServiceAreas.map((c) => (
                    <Link key={`${c.emirate}-${c.city}`} href={`/${c.emirate}/${c.city}/${sSlug}`}>{c.name}</Link>
                  ))}
                  <Link href={`/services/${service.slug}`}>About {shortService.toLowerCase()} →</Link>
                </div>
              </div>
            )}
          </div>
        </section>

        <StickyBar waLink={waLink} phone={SITE_CONFIG.phone} />
      </div>

      <WhatsAppButton service={service.name} city={city.name} />
    </>
  )
}
