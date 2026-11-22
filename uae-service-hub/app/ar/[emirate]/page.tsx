import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { emirates, getEmirateBySlug } from '@/lib/data/emirates'
import { AR_EMIRATES } from '@/lib/data/emirates.ar'
import { getArCity } from '@/lib/data/cities.ar'
import { arServices, AR_BRAND_SHORT } from '@/lib/data/services.ar'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/utils/seo'
import { arWhatsAppLink } from '@/lib/utils/whatsappAr'
import { SITE_CONFIG } from '@/lib/data/constants'
import { makeDna, dnaStyle } from '@/lib/design/dna'
import '../../dna.css'

type Props = { params: Promise<{ emirate: string }> }

export const dynamicParams = false

export async function generateStaticParams(): Promise<{ emirate: string }[]> {
  return emirates.map((e) => ({ emirate: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate } = await params
  const ar = AR_EMIRATES[emirate]
  const en = getEmirateBySlug(emirate)
  if (!ar || !en) return {}
  return buildMetadata({
    title: `شركة تنظيف في ${ar.name} - كنب وسجاد وفلل`,
    description: `خدمات تنظيف في ${ar.name} في منزلك: تنظيف كنب وسجاد ومراتب وفلل وتلميع رخام. فريق مدرب ومنتجات صديقة للبيئة. عرض سعر مجاني عبر واتساب.`,
    path: `/ar/${emirate}`,
    imageUrl: en.image ? `https://servedubai.ae${en.image}` : undefined,
    locale: 'ar',
  })
}

/** Services shown on every emirate page; each links to its Arabic service page. */
const MAIN_SERVICES = ['sofa-cleaning', 'carpet-cleaning', 'mattress-cleaning', 'villa-deep-cleaning', 'apartment-cleaning', 'marble-polishing', 'curtain-cleaning', 'office-cleaning']

export default async function ArabicEmiratePage({ params }: Props) {
  const { emirate } = await params
  const ar = AR_EMIRATES[emirate]
  const en = getEmirateBySlug(emirate)
  if (!ar || !en) notFound()

  const dna = makeDna('emirate', emirates.findIndex((e) => e.slug === emirate))
  const waLink = arWhatsAppLink(undefined, ar.name)
  const services = MAIN_SERVICES.map((slug) => arServices.find((s) => s.slug === slug)).filter((s) => s !== undefined)

  const schema = { ...buildLocalBusinessSchema({ emirate: en.name, path: `/ar/${emirate}` }), name: `خدمات التنظيف في ${ar.name}`, inLanguage: 'ar' }
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'الرئيسية', url: '/ar' },
    { name: ar.name, url: `/ar/${emirate}` },
  ])
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'ar',
    mainEntity: ar.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="dn-page ar-service" style={dnaStyle(dna)}>
        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <nav className="dn-crumb" aria-label="مسار التنقل">
              <Link href="/ar">الرئيسية</Link>
              <span aria-hidden="true">/</span>
              <span>{ar.name}</span>
            </nav>
            <div className="ar-hero">
              <div>
                <div className="dn-eyebrow">{en.cities.length} منطقة في {ar.name}</div>
                <h1 className="dn-h ar-h1">خدمات التنظيف في {ar.name}</h1>
                <p className="dn-p" style={{ fontWeight: 600 }}>{ar.tagline}</p>
                {ar.about.map((p) => (
                  <p key={p.slice(0, 24)} className="dn-p">{p}</p>
                ))}
                <div className="ar-cta-row">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa">عرض سعر مجاني عبر واتساب</a>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="dn-btn dn-btn-ghost">اتصل <span dir="ltr">{SITE_CONFIG.phoneDisplay}</span></a>
                </div>
              </div>
              {en.image && (
                <div className="ar-hero-img">
                  <Image src={en.image} alt={`${ar.name} - ${AR_BRAND_SHORT}`} fill priority sizes="(max-width: 860px) 100vw, 520px" style={{ objectFit: 'cover' }} />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">المناطق</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>مناطق {ar.name} التي نخدمها</h2>
            <div className="dn-areas">
              {en.cities.map((c) => (
                <Link key={c.slug} href={`/ar/${emirate}/${c.slug}`}>{getArCity(emirate, c.slug)?.name ?? c.name}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">ما يميز العمل هنا</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>كيف نعمل في {ar.name}</h2>
            <div className="ar-why">
              {ar.highlights.map((h) => (
                <div key={h.title} className="ar-why-card">
                  <h3 className="dn-h">{h.title}</h3>
                  <p className="dn-p">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">الخدمات</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>خدماتنا في {ar.name}</h2>
            <div className="dn-areas">
              {services.map((s) => (
                <Link key={s.slug} href={`/ar/services/${s.slug}`}>{s.name}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap" style={{ maxWidth: 860 }}>
            <div className="dn-eyebrow">أسئلة شائعة</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>أسئلة عن التنظيف في {ar.name}</h2>
            <div className="ar-faq">
              {ar.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p className="dn-p">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap ar-final">
            <h2 className="dn-h dn-h2">احجز التنظيف في {ar.name}</h2>
            <p className="dn-p">أرسل صورة ومنطقتك عبر واتساب، ونؤكد لك السعر وأقرب موعد متاح. نعمل من الاثنين إلى السبت من 9 صباحاً حتى 10 مساءً.</p>
            <div className="ar-cta-row">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa">واتساب</a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="dn-btn dn-btn-ghost">اتصل <span dir="ltr">{SITE_CONFIG.phoneDisplay}</span></a>
            </div>
            <p className="dn-p" style={{ marginTop: '1.2rem' }}>
              <Link href={`/${emirate}`} hrefLang="en" lang="en">English version</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
