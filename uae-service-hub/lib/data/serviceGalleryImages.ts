import { getServiceBySlug } from '@/lib/data/services'

/**
 * Multiple real work-photos per service, used to give each keyword link (a
 * different city/area for the same service) its own hover-preview image
 * instead of repeating one single generic photo everywhere.
 */
const SERVICE_GALLERY_IMAGES: Record<string, string[]> = {
  'sofa-cleaning': [
    '/images/sofa-before-after/after-1.jpeg',
    '/images/sofa-before-after/after-2.jpeg',
    '/images/sofa-before-after/after-3.jpeg',
    '/images/sofa-before-after/after-4.jpeg',
    '/images/sofa-before-after/after-5.jpeg',
    '/images/sofa-before-after/after-6.jpeg',
    '/images/sofa-before-after/after-7.jpeg',
  ],
  'carpet-cleaning': [
    '/images/carpet-gallery/carpet-1.jpeg',
    '/images/carpet-gallery/carpet-2.jpeg',
    '/images/carpet-gallery/carpet-3.jpeg',
    '/images/carpet-gallery/carpet-4.jpeg',
    '/images/carpet-gallery/carpet-5.jpeg',
    '/images/carpet-gallery/carpet-6.jpeg',
    '/images/carpet-gallery/carpet-7.jpeg',
    '/images/carpet-gallery/carpet-8.jpeg',
    '/images/carpet-gallery/carpet-9.jpeg',
    '/images/carpet-gallery/carpet-10.jpeg',
    '/images/carpet-gallery/carpet-11.jpg',
    '/images/carpet-gallery/carpet-13.webp',
  ],
  'villa-deep-cleaning': [
    '/images/villa-gallery/villa-1.jpg',
    '/images/villa-gallery/villa-2.jpg',
    '/images/villa-gallery/villa-3.jpeg',
    '/images/villa-gallery/villa-4.jpeg',
  ],
  'marble-polishing': [
    '/images/marble-gallery/marble-1.jpg',
    '/images/marble-gallery/marble-2.jpg',
    '/images/marble-gallery/marble-3.jpg',
    '/images/marble-gallery/marble-4.jpg',
    '/images/marble-gallery/marble-5.jpg',
    '/images/marble-gallery/marble-6.jpg',
    '/images/marble-gallery/marble-7.jpg',
    '/images/marble-gallery/marble-8.jpg',
    '/images/marble-gallery/marble-9.jpg',
    '/images/marble-gallery/marble-10.jpg',
    '/images/marble-gallery/marble-11.jpg',
    '/images/marble-gallery/marble-12.jpg',
    '/images/marble-gallery/marble-13.jpg',
  ],
}

/** Simple deterministic string hash — same (service, seed) always picks the same image. */
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0
  }
  return hash
}

/**
 * Picks a real work-photo for a service, varied by a seed (usually the city
 * slug) so different keyword links for the same service show different
 * images instead of one repeated photo. Falls back to the service's single
 * listing photo for services without a curated gallery.
 */
export function getServiceHoverImage(serviceSlug: string, seed: string): string | undefined {
  const gallery = SERVICE_GALLERY_IMAGES[serviceSlug]
  if (gallery && gallery.length > 0) {
    return gallery[hashString(seed) % gallery.length]
  }
  return getServiceBySlug(serviceSlug)?.images[0]
}
