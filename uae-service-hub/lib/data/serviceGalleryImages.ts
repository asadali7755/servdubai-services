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
  // carpet-8.jpeg dropped — has an illegible small watermark in the corner that
  // couldn't be confirmed clean.
  'carpet-cleaning': [
    '/images/carpet-gallery/carpet-1.jpeg',
    '/images/carpet-gallery/carpet-2.jpeg',
    '/images/carpet-gallery/carpet-3.jpeg',
    '/images/carpet-gallery/carpet-4.jpeg',
    '/images/carpet-gallery/carpet-5.jpeg',
    '/images/carpet-gallery/carpet-6.jpeg',
    '/images/carpet-gallery/carpet-7.jpeg',
    '/images/carpet-gallery/carpet-9.jpeg',
    '/images/carpet-gallery/carpet-10.jpeg',
    '/images/carpet-gallery/carpet-11.jpg',
    '/images/carpet-gallery/carpet-13.webp',
  ],
  // villa-3/villa-4 dropped — branded "Villa Deep Cleaning" graphics with a
  // phone number that isn't this site's own (a sister-site promo asset).
  'villa-deep-cleaning': [
    '/images/villa-gallery/villa-1.jpg',
    '/images/villa-gallery/villa-2.jpg',
  ],
  // marble-gallery has no entry: every image in that folder turned out to be a
  // "Marble Pro" (marblepro.ae) branded ad graphic with their own phone number
  // and logo — a different client site's marketing asset, not a real
  // servedubai photo. Falls back to the single clean marble-polishing.webp
  // listing photo instead (see getServiceHoverImage below).
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
