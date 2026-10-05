/**
 * Stock photos & videos for the car services, from Pexels (free for commercial
 * use under the Pexels licence — https://www.pexels.com/license/). They show
 * what each service looks like; they are NOT photos of our own jobs, so they
 * must never be labelled "our work" or used in alt text as if they were.
 * Replace with real job photos/videos as soon as the client provides them.
 *
 * Downloaded and re-encoded (webp / H.264, no audio) on 2026-10-05.
 */
export interface StockPhoto {
  src: string
  alt: string
  source: string
}
export interface StockVideo {
  src: string
  poster: string
  title: string
  source: string
  /** portrait clips get a narrower frame */
  portrait?: boolean
}
export interface CarMedia {
  photos: StockPhoto[]
  video?: StockVideo
  /** a real photo from our own job, preferred over stock where one exists */
  ownPhoto?: { src: string; alt: string }
}

const P = (id: number, slug: string) => `https://www.pexels.com/photo/${slug}-${id}/`
const V = (id: number, slug: string) => `https://www.pexels.com/video/${slug}-${id}/`

export const CAR_MEDIA: Record<string, CarMedia> = {
  'car-wash-at-home': {
    photos: [
      { src: '/images/car/car-wash-foam-garage.webp', alt: 'Car covered in wash foam being cleaned by hand', source: P(6873179, 'a-woman-washing-a-luxury-car') },
      { src: '/images/car/car-wash-foam-brush.webp', alt: 'Soft detailing brush cleaning a foamed car body', source: P(6873020, 'a-close-up-shot-of-a-person-brushing-a-car') },
      { src: '/images/car/car-wash-snow-foam.webp', alt: 'Snow foam on a car door during a wash', source: P(5693653, 'close-up-of-a-car-being-washed') },
    ],
    video: { src: '/videos/car/car-wash-sponge.mp4', poster: '/videos/car/car-wash-sponge-poster.webp', title: 'Hand wash with a soft sponge', source: V(6872477, 'person-washing-black-car'), portrait: true },
  },
  'car-polishing-ceramic-coating': {
    photos: [
      { src: '/images/car/car-polish-machine-black.webp', alt: 'Machine polisher on black car paint', source: P(6870296, 'a-person-buffing-a-car') },
      { src: '/images/car/car-polish-detailer.webp', alt: 'Detailer machine-polishing a car panel', source: P(11139239, 'man-buffing-the-paint-of-the-car') },
      { src: '/images/car/car-polish-bonnet.webp', alt: 'Polishing pad on a car bonnet', source: P(5233259, 'a-person-polishing-the-black-car') },
    ],
    video: { src: '/videos/car/car-polish-machine.mp4', poster: '/videos/car/car-polish-machine-poster.webp', title: 'Machine polishing, panel by panel', source: V(6157906, 'person-polishing-the-car') },
  },
  'car-ac-odor-sanitization': {
    photos: [
      { src: '/images/car/car-interior-steering-wipe.webp', alt: 'Steering wheel and dashboard being wiped clean', source: P(6873015, 'a-man-in-a-black-sweater-wiping-the-steering-wheel-of-a-car') },
      { src: '/images/car/car-interior-seat-wipe.webp', alt: 'Car seat being wiped during cabin sanitising', source: P(6873185, 'a-man-in-black-jacket-cleaning-the-seat-of-a-car') },
      { src: '/images/car/car-interior-door-detail.webp', alt: 'Car door panel and seats being detailed', source: P(31389821, 'person-cleaning-car-interior-with-cloth-for-maintenance') },
    ],
    video: { src: '/videos/car/car-ac-vent-brush.mp4', poster: '/videos/car/car-ac-vent-brush-poster.webp', title: 'AC vents cleaned with a detailing brush', source: V(6158073, 'a-person-detailing-the-interior-of-the-car') },
  },
  'car-interior-detailing': {
    photos: [
      { src: '/images/car/car-interior-seat-extraction.webp', alt: 'Fabric car seat cleaned with an extraction tool', source: P(5233285, 'a-person-deep-cleaning-a-car-seat') },
      { src: '/images/car/car-interior-carpet-extraction.webp', alt: 'Car carpet cleaned with an extraction nozzle', source: P(5233264, 'hand-holding-a-car-vacuum-cleaner') },
      { src: '/images/car/car-interior-door-detail.webp', alt: 'Car interior door and seats being detailed', source: P(31389821, 'person-cleaning-car-interior-with-cloth-for-maintenance') },
    ],
    video: { src: '/videos/car/car-ac-vent-brush.mp4', poster: '/videos/car/car-ac-vent-brush-poster.webp', title: 'Dashboard and vents detailed by brush', source: V(6158073, 'a-person-detailing-the-interior-of-the-car') },
    ownPhoto: { src: '/galary-images-pics/car/car-interior-steam-cleaning-dubai-poster.jpg', alt: 'Car interior steam cleaning by Madinat Alhaya' },
  },
}

export const getCarMedia = (serviceSlug: string): CarMedia | undefined => CAR_MEDIA[serviceSlug]
