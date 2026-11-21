import type { Metadata } from 'next'
import { buildMetadata, buildLocalBusinessSchema } from '@/lib/utils/seo'
import HomeContent from '@/components/HomeContent'
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

export default function ArabicHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeContent />
    </>
  )
}
