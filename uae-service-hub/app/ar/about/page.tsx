import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildLocalBusinessSchema } from '@/lib/utils/seo'
import { arServices, AR_BRAND } from '@/lib/data/services.ar'
import { emirates } from '@/lib/data/emirates'
import { AR_EMIRATES } from '@/lib/data/emirates.ar'
import { arWhatsAppLink } from '@/lib/utils/whatsappAr'
import { SITE_CONFIG } from '@/lib/data/constants'
import { makeDna, dnaStyle } from '@/lib/design/dna'
import '../../dna.css'

export const metadata: Metadata = buildMetadata({
  title: 'من نحن - مدينة الحياة لخدمات تنظيف المباني',
  description:
    'مدينة الحياة لخدمات تنظيف المباني في الخليج التجاري بدبي: تنظيف كنب وسجاد ومراتب وفلل وتلميع رخام في منزلك في جميع الإمارات السبع.',
  path: '/ar/about',
  locale: 'ar',
})

const schema = buildLocalBusinessSchema({ path: '/ar/about' })

/** Confirmed facts only (see lib/data/services.ar.ts). */
const FACTS = [
  { title: 'نأتي إلى مكانك', text: 'ننظف في منزلك أو مكتبك أو فيلتك، فلا حاجة لنقل الكنب أو السجاد أو المراتب.' },
  { title: 'فريق مدرب', text: 'فريقنا مدرب وخضع للتحقق من الخلفية قبل العمل في بيوت العملاء.' },
  { title: 'منتجات صديقة للبيئة', text: 'نستخدم منتجات صديقة للبيئة وآمنة للأطفال والحيوانات الأليفة.' },
  { title: 'مواعيد في نفس اليوم', text: 'تتوفر مواعيد في نفس اليوم في دبي وباقي الإمارات حسب جدول الفريق.' },
  { title: 'عرض سعر مجاني', text: 'ترسل صورة عبر واتساب، ونؤكد لك العمل والسعر قبل الحجز.' },
  { title: 'جميع الإمارات السبع', text: 'دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين.' },
]

export default function ArabicAboutPage() {
  const dna = makeDna('service', 3)
  const waLink = arWhatsAppLink()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="dn-page ar-service" style={dnaStyle(dna)}>
        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap" style={{ maxWidth: 900 }}>
            <nav className="dn-crumb" aria-label="مسار التنقل">
              <Link href="/ar">الرئيسية</Link>
              <span aria-hidden="true">/</span>
              <span>من نحن</span>
            </nav>
            <div className="dn-eyebrow" style={{ marginTop: 18 }}>من نحن</div>
            <h1 className="dn-h ar-h1">{AR_BRAND}</h1>
            <p className="dn-p">
              مدينة الحياة لخدمات تنظيف المباني شركة تنظيف مقرها مكتب 718 في برج تماني آرت بالخليج التجاري في دبي، وتخدم البيوت والفلل والمكاتب في جميع الإمارات السبع.
            </p>
            <p className="dn-p">
              أغلب عملنا تنظيف الكنب والمفروشات والسجاد والمراتب والستائر، والتنظيف العميق للفلل والشقق، وتلميع الرخام وتنظيف الأرضيات، وكله في مكان العميل. في الإمارات يدخل الرمل الناعم إلى الأقمشة، والرطوبة قرب الساحل تترك روائح وتُبهت الرخام، لذلك نختار الطريقة حسب نوع القماش أو الحجر وحسب المنطقة.
            </p>
            <p className="dn-p">
              طريقة الحجز بسيطة: ترسل صورة لما يحتاج إلى تنظيف ومنطقتك عبر واتساب، ونرسل لك السعر وأقرب موعد، ثم يأتي الفريق بكل المعدات اللازمة. نعمل من الاثنين إلى السبت من 9 صباحاً حتى 10 مساءً.
            </p>
            <div className="ar-cta-row">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="dn-btn dn-btn-wa">عرض سعر مجاني عبر واتساب</a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="dn-btn dn-btn-ghost">اتصل <span dir="ltr">{SITE_CONFIG.phoneDisplay}</span></a>
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">ما نلتزم به</div>
            <h2 className="dn-h dn-h2" style={{ marginBottom: '1.4rem' }}>كيف نعمل</h2>
            <div className="ar-why">
              {FACTS.map((f) => (
                <div key={f.title} className="ar-why-card">
                  <h3 className="dn-h">{f.title}</h3>
                  <p className="dn-p">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <div className="dn-eyebrow">خدماتنا</div>
            <div className="dn-areas">
              {arServices.map((s) => (
                <Link key={s.slug} href={`/ar/services/${s.slug}`}>{s.name}</Link>
              ))}
            </div>
            <div className="dn-eyebrow" style={{ marginTop: '1.6rem' }}>الإمارات</div>
            <div className="dn-areas">
              {emirates.map((e) => (
                <Link key={e.slug} href={`/ar/${e.slug}`}>{AR_EMIRATES[e.slug]?.name ?? e.name}</Link>
              ))}
            </div>
            <p className="dn-p" style={{ marginTop: '1.2rem' }}>
              <Link href="/about" hrefLang="en" lang="en">English version</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
