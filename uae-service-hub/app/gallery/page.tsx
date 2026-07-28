import type { Metadata } from 'next'
import { buildMetadata, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/lib/utils/seo'
import GalleryContent from '@/components/GalleryContent'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Cleaning Gallery Dubai | Before & After Photos & Videos | Madinat Alhaya',
    description: 'View our professional cleaning work gallery — before & after photos and videos of sofa cleaning, carpet cleaning, villa deep cleaning, marble polishing & more across Dubai and UAE.',
    path: '/gallery',
  }),
}

const localSchema = buildLocalBusinessSchema({ path: '/gallery' })
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Gallery', url: '/gallery' },
])

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GalleryContent />
    </>
  )
}
