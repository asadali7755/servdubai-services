import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { emirates, getEmirateBySlug, getCityBySlug } from '@/lib/data/emirates'
import { AR_EMIRATES } from '@/lib/data/emirates.ar'
import { getArCity } from '@/lib/data/cities.ar'
import { getArServiceBySlug } from '@/lib/data/services.ar'
import { getCityCoords } from '@/lib/data/cityCoordinates'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/utils/seo'
import { arWhatsAppLink } from '@/lib/utils/whatsappAr'
import { SITE_CONFIG } from '@/lib/data/constants'
import { makeDna, dnaStyle } from '@/lib/design/dna'
import '../../../dna.css'

type Props = { params: Promise<{ emirate: string; city: string }> }

const ALL_CITIES = emirates.flatMap((e) => e.cities.map((c) => ({ emirate: e.slug, city: c.slug })))

export const dynamicParams = false

export async function generateStaticParams(): Promise<{ emirate: string; city: string }[]> {
  return ALL_CITIES
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate, city } = await params
  const ar = getArCity(emirate, city)
  const em = AR_EMIRATES[emirate]
  if (!ar || !em) return {}
  return buildMetadata({
    title: `تنظيف كنب وسجاد وفلل في ${ar.name}، ${em.name}`,
    description: `${ar.tagline} خدمات تنظيف في ${ar.name} في منزلك، وعرض سعر مجاني عبر واتساب.`,
    path: `/ar/${emirate}/${city}`,
    locale: 'ar',
  })
}

export default async function ArabicCityPage({ params }: Props) {
  const { emirate, city } = await params
  const ar = getArCity(emirate, city)
  const em = AR_EMIRATES[emirate]
  const enEmirate = getEmirateBySlug(emirate)
  const enCity = getCityBySlug(emirate, city)
  if (!ar || !em || !enEmirate || !enCity) notFound()

  const dna = makeDna('city', ALL_CITIES.findIndex((c) => c.emirate === emirate && c.city === city))
  const waLink = arWhatsAppLink(undefined, ar.name)
  const neighbours = enEmirate.cities.filter((c) => c.slug !== city)
  const coords = getCityCoords(emirate, city)

  const schema = {
    ...buildLocalBusinessSchema({
      city: enCity.name,
      emirate: enEmirate.name,
      path: `/ar/${emirate}/${city}`,
      coords: coords ?? undefined,
    }),
    name: `خدمات التنظيف في ${ar.name}`,
    inLanguage: 'ar',
  }
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'الرئيسية', url: '/ar' },
    { name: em.name, url: `/ar/${emirate}` },
    { name: ar.name, url: `/ar/${emirate}/${city}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="dn-page ar-service" style={dnaStyle(dna)}>
        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap" style={{ maxWidth: 900 }}>
            <nav className="dn-crumb" aria-label="مسار التنقل">
              <Link href="/ar">الرئيسية</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/ar/${emirate}`}>{em.name}</Link>
              <span aria-hidden="true">/</span>
              <span>{ar.name}</span>
            </nav>
            <div className="dn-eyebrow" style={{ marginTop: 18 }}>{em.name}</div>
            <h1 className="dn-h ar-h1">خدمات التنظيف في {ar.name}</h1>
            <p className="dn-p" style={{ fontWeight: 600 }}>{ar.tagline}</p>
            {ar.story.map((p) => (
              <p key={p.slice(0, 24)} className="dn-p">{p}</p>
            ))}
            <div className="ar-cta-row">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa">عرض سعر مجاني عبر واتساب</a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="dn-btn dn-btn-ghost">اتصل <span dir="ltr">{SITE_CONFIG.phoneDisplay}</span></a>
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">الأكثر طلباً</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>أكثر الخدمات طلباً في {ar.name}</h2>
            <div className="ar-why">
              {ar.picks.map((p) => {
                const s = getArServiceBySlug(p.service)
                return (
                  <div key={p.service} className="ar-why-card">
                    <h3 className="dn-h">
                      {s ? <Link href={`/ar/services/${s.slug}`}>{s.name}</Link> : p.service}
                    </h3>
                    <p className="dn-p">{p.why}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap" style={{ maxWidth: 900 }}>
            <div className="dn-eyebrow">نصائح</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>نصائح للعناية ببيتك في {ar.name}</h2>
            <ul className="dn-check">
              {ar.tips.map((t) => (
                <li key={t}><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap ar-final">
            <h2 className="dn-h dn-h2">احجز التنظيف في {ar.name}</h2>
            <p className="dn-p">{ar.visit}</p>
            <p className="dn-p">نعمل من الاثنين إلى السبت من 9 صباحاً حتى 10 مساءً، بفريق مدرب خضع للتحقق ومنتجات صديقة للبيئة وآمنة للأطفال والحيوانات الأليفة.</p>
            <div className="ar-cta-row">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa">واتساب</a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="dn-btn dn-btn-ghost">اتصل <span dir="ltr">{SITE_CONFIG.phoneDisplay}</span></a>
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">مناطق أخرى في {em.name}</div>
            <div className="dn-areas">
              {neighbours.map((c) => (
                <Link key={c.slug} href={`/ar/${emirate}/${c.slug}`}>{getArCity(emirate, c.slug)?.name ?? c.name}</Link>
              ))}
            </div>
            <p className="dn-p" style={{ marginTop: '1.2rem' }}>
              <Link href={`/${emirate}/${city}`} hrefLang="en" lang="en">English version</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
