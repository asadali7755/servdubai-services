import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema } from '@/lib/utils/seo'
import { emirates } from '@/lib/data/emirates'
import { AR_EMIRATES } from '@/lib/data/emirates.ar'
import { getArCity } from '@/lib/data/cities.ar'
import { makeDna, dnaStyle } from '@/lib/design/dna'
import '../../dna.css'

export const metadata: Metadata = buildMetadata({
  title: 'مناطق خدمات التنظيف في الإمارات',
  description:
    'جميع المناطق التي نخدمها في دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين: تنظيف كنب وسجاد وفلل في منزلك. عرض سعر مجاني عبر واتساب.',
  path: '/ar/areas',
  locale: 'ar',
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'الرئيسية', url: '/ar' },
  { name: 'المناطق', url: '/ar/areas' },
])

export default function ArabicAreasPage() {
  const dna = makeDna('emirate', 2)
  const total = emirates.reduce((n, e) => n + e.cities.length, 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="dn-page ar-service" style={dnaStyle(dna)}>
        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <nav className="dn-crumb" aria-label="مسار التنقل">
              <Link href="/ar">الرئيسية</Link>
              <span aria-hidden="true">/</span>
              <span>المناطق</span>
            </nav>
            <h1 className="dn-h ar-h1" style={{ marginTop: 18 }}>مناطق خدمات التنظيف في الإمارات</h1>
            <p className="dn-p">نخدم {total} منطقة في الإمارات السبع. اختر منطقتك لترى أكثر الخدمات طلباً فيها ونصائح العناية ببيتك هناك.</p>
          </div>
        </section>
        {emirates.map((e) => (
          <section key={e.slug} className="dn-sec dn-sec-tight">
            <div className="dn-wrap">
              <h2 className="dn-h dn-h2" style={{ marginBottom: '1rem' }}>
                <Link href={`/ar/${e.slug}`}>{AR_EMIRATES[e.slug]?.name ?? e.name}</Link>
              </h2>
              <div className="dn-areas">
                {e.cities.map((c) => (
                  <Link key={c.slug} href={`/ar/${e.slug}/${c.slug}`}>{getArCity(e.slug, c.slug)?.name ?? c.name}</Link>
                ))}
              </div>
            </div>
          </section>
        ))}
        <section className="dn-sec dn-sec-tight">
          <div className="dn-wrap">
            <p className="dn-p"><Link href="/areas" hrefLang="en" lang="en">English version</Link></p>
          </div>
        </section>
      </div>
    </>
  )
}
