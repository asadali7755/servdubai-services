import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { arServices, getArServiceBySlug, AR_BRAND_SHORT } from '@/lib/data/services.ar'
import { getServiceBySlug } from '@/lib/data/services'
import translations from '@/lib/i18n/translations'
import { buildMetadata, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/utils/seo'
import { SITE_CONFIG } from '@/lib/data/constants'
import { makeDna, dnaStyle } from '@/lib/design/dna'
import '../../../dna.css'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return arServices.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const ar = getArServiceBySlug(slug)
  if (!ar) return {}
  const image = getServiceBySlug(slug)?.images[0]
  return buildMetadata({
    title: ar.title,
    description: ar.description,
    path: `/ar/services/${slug}`,
    imageUrl: image ? `https://servedubai.ae${image}` : undefined,
    locale: 'ar',
  })
}

/** Confirmed facts only; see the note at the top of lib/data/services.ar.ts. */
const WHY_US = [
  { title: 'نأتي إلى مكانك', text: 'ننظف في منزلك أو مكتبك، فلا حاجة لنقل الأثاث أو السجاد.' },
  { title: 'فريق مدرب', text: 'فريقنا مدرب وخضع للتحقق من الخلفية.' },
  { title: 'منتجات صديقة للبيئة', text: 'نستخدم منتجات صديقة للبيئة وآمنة للأطفال والحيوانات الأليفة.' },
  { title: 'مواعيد في نفس اليوم', text: 'تتوفر مواعيد في نفس اليوم في دبي وباقي الإمارات حسب جدول الفريق.' },
]

const arWhatsAppLink = (serviceName: string) => {
  const number = SITE_CONFIG.whatsappNumber.replace('+', '')
  const msg = `مرحباً ${AR_BRAND_SHORT}، أريد حجز خدمة ${serviceName}. أرجو إرسال السعر والمواعيد المتاحة.`
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`
}

export default async function ArabicServicePage({ params }: Props) {
  const { slug } = await params
  const ar = getArServiceBySlug(slug)
  const en = getServiceBySlug(slug)
  if (!ar || !en) notFound()

  const dna = makeDna('service', arServices.findIndex((s) => s.slug === slug))
  const waLink = arWhatsAppLink(ar.name)
  const image = en.images[0]
  const emirates = Object.values(translations.ar.emirateNames)
  const others = arServices.filter((s) => s.slug !== slug)

  const serviceSchema = {
    ...buildServiceSchema({ serviceName: ar.name, description: ar.description, url: `/ar/services/${slug}` }),
    inLanguage: 'ar',
  }
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'الرئيسية', url: '/ar' },
    { name: ar.name, url: `/ar/services/${slug}` },
  ])
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'ar',
    mainEntity: ar.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
                <div className="dn-eyebrow">جميع الإمارات السبع</div>
                <h1 className="dn-h ar-h1">{ar.h1}</h1>
                {ar.intro.map((p) => (
                  <p key={p.slice(0, 24)} className="dn-p">{p}</p>
                ))}
                <div className="ar-cta-row">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa">
                    عرض سعر مجاني عبر واتساب
                  </a>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="dn-btn dn-btn-ghost">
                    اتصل <span dir="ltr">{SITE_CONFIG.phoneDisplay}</span>
                  </a>
                </div>
              </div>
              {image && (
                <div className="ar-hero-img">
                  <Image src={image} alt={`${ar.name} - ${AR_BRAND_SHORT}`} fill priority sizes="(max-width: 860px) 100vw, 520px" style={{ objectFit: 'cover' }} />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap dn-2col ar-2col">
            <div>
              <div className="dn-eyebrow">ماذا ننظف</div>
              <h2 className="dn-h dn-h2">ما تشمله الخدمة</h2>
            </div>
            <ul className="dn-check">
              {ar.items.map((item) => (
                <li key={item}><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">خطوات العمل</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>كيف نعمل</h2>
            <ol className="dn-notes ar-steps">
              {ar.steps.map((step, i) => (
                <li key={step}><b>الخطوة {i + 1}</b>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">لماذا {AR_BRAND_SHORT}</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>لماذا تختارنا</h2>
            <div className="ar-why">
              {WHY_US.map((w) => (
                <div key={w.title} className="ar-why-card">
                  <h3 className="dn-h">{w.title}</h3>
                  <p className="dn-p">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap" style={{ maxWidth: 860 }}>
            <div className="dn-eyebrow">أسئلة شائعة</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>أسئلة عن {ar.name}</h2>
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
            <h2 className="dn-h dn-h2">احجز {ar.name} الآن</h2>
            <p className="dn-p">
              أرسل صورة ومنطقتك عبر واتساب، ونؤكد لك السعر وأقرب موعد متاح. نعمل من الاثنين إلى السبت من 9 صباحاً حتى 10 مساءً.
            </p>
            <div className="ar-cta-row">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa">
                واتساب
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="dn-btn dn-btn-ghost">
                اتصل <span dir="ltr">{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
            <p className="dn-p ar-emirates">نخدم: {emirates.join('، ')}</p>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">خدمات أخرى</div>
            <div className="dn-areas">
              {others.map((s) => (
                <Link key={s.slug} href={`/ar/services/${s.slug}`}>{s.name}</Link>
              ))}
            </div>
            <p className="dn-p" style={{ marginTop: '1.2rem' }}>
              <Link href={`/services/${slug}`} hrefLang="en" lang="en">English version</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
