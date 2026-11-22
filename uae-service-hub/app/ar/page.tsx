import type { Metadata } from 'next'
import { buildMetadata, buildLocalBusinessSchema } from '@/lib/utils/seo'
import HomeContent, { type ArAreaGroup } from '@/components/HomeContent'
import { emirates } from '@/lib/data/emirates'
import { AR_EMIRATES } from '@/lib/data/emirates.ar'
import { getArCity } from '@/lib/data/cities.ar'
import translations from '@/lib/i18n/translations'

export const metadata: Metadata = buildMetadata({
  title: 'شركة تنظيف في دبي وجميع الإمارات',
  description:
    'خدمات تنظيف في دبي وجميع الإمارات في منزلك: تنظيف كنب وسجاد ومراتب وفلل وتلميع رخام. فريق مدرب ومنتجات آمنة للأطفال. عرض سعر مجاني عبر واتساب.',
  path: '/ar',
  locale: 'ar',
})

const schema = buildLocalBusinessSchema({ path: '/ar' })

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ar',
  mainEntity: translations.ar.home.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const arAreas: ArAreaGroup[] = emirates.map((e) => ({
  name: AR_EMIRATES[e.slug]?.name ?? e.name,
  href: `/ar/${e.slug}`,
  cities: e.cities.map((c) => ({ name: getArCity(e.slug, c.slug)?.name ?? c.name, href: `/ar/${e.slug}/${c.slug}` })),
}))

export default function ArabicHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeContent arAreas={arAreas} />
    </>
  )
}
