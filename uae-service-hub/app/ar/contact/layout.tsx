import type { Metadata } from 'next'
import { buildLocalBusinessSchema, buildMetadata } from '@/lib/utils/seo'

export const metadata: Metadata = buildMetadata({
  title: 'اتصل بنا - احجز خدمة تنظيف في الإمارات',
  description:
    'تواصل مع مدينة الحياة لخدمات تنظيف المباني لحجز خدمة تنظيف في دبي وجميع الإمارات. اتصل أو راسلنا عبر واتساب على 971551275545+ لعرض سعر مجاني.',
  path: '/ar/contact',
  locale: 'ar',
})

const contactSchema = buildLocalBusinessSchema({ path: '/ar/contact' })

export default function ArabicContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      {children}
    </>
  )
}
