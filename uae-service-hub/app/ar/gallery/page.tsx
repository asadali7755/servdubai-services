import type { Metadata } from 'next'
import { buildMetadata, buildBreadcrumbSchema } from '@/lib/utils/seo'
import GalleryContent from '@/components/GalleryContent'

// GalleryContent reads the language from the URL, so it renders in Arabic here.
export const metadata: Metadata = buildMetadata({
  title: 'معرض أعمال التنظيف - صور قبل وبعد',
  description:
    'صور وفيديوهات من أعمالنا قبل وبعد: تنظيف الكنب والسجاد والمراتب والفلل وتلميع الرخام في دبي وجميع الإمارات.',
  path: '/ar/gallery',
  locale: 'ar',
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'الرئيسية', url: '/ar' },
  { name: 'معرض الأعمال', url: '/ar/gallery' },
])

export default function ArabicGalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GalleryContent />
    </>
  )
}
