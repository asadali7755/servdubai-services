/**
 * Car-care showcase images supplied by the client (Oct 2026), converted to WebP
 * with keyword file names. They illustrate the service — alt text describes what
 * is in the photo and never claims it is a specific job of ours.
 * (Three supplied images were left out: one carried a Dreamstime watermark, one
 * another company's logo, and Rectangle-37-1 had an unknown source.)
 */
export interface ShowcaseImage {
  src: string
  alt: string
  title: string
  caption: string
  width: number
  height: number
  /** car service slug this photo illustrates best */
  service: 'car-wash-at-home' | 'car-interior-detailing' | 'car-ac-odor-sanitization'
}

const P = '/images/car-services/'

export const CAR_SHOWCASE: ShowcaseImage[] = [
  {
    src: `${P}snow-foam-car-wash-at-home-dubai.webp`,
    alt: 'Snow foam sprayed over a white car during a car wash at home in Dubai',
    title: 'Snow foam car wash at home — Dubai',
    caption: 'Snow foam pre-wash lifts dust before the car is touched',
    width: 1600, height: 1067, service: 'car-wash-at-home',
  },
  {
    src: `${P}car-wheel-rim-cleaning-car-wash-at-home.webp`,
    alt: 'Alloy wheel rim cleaned by hand with a microfibre cloth as part of a doorstep car wash',
    title: 'Wheel and rim cleaning — car wash at home',
    caption: 'Wheels and rims cleaned by hand',
    width: 1600, height: 1067, service: 'car-wash-at-home',
  },
  {
    src: `${P}foam-car-wash-exterior-detailing-uae.webp`,
    alt: 'Dark sports car covered in foam for an exterior car wash in the UAE',
    title: 'Foam exterior car wash — UAE',
    caption: 'Full exterior foam wash and rinse',
    width: 1600, height: 1067, service: 'car-wash-at-home',
  },
  {
    src: `${P}car-pressure-wash-wheel-arch-mud-removal.webp`,
    alt: 'Pressure washer removing mud and sand from a car wheel arch',
    title: 'Pressure wash for wheel arches and sand',
    caption: 'Sand and mud rinsed out of the wheel arches',
    width: 1600, height: 1067, service: 'car-wash-at-home',
  },
  {
    src: `${P}car-interior-vacuum-cleaning-dubai.webp`,
    alt: 'Technician vacuuming leather car seats during car interior cleaning in Dubai',
    title: 'Car interior vacuum and seat cleaning — Dubai',
    caption: 'Seats, mats and boot vacuumed',
    width: 1600, height: 1067, service: 'car-interior-detailing',
  },
  {
    src: `${P}car-ac-vent-cleaning-odor-removal.webp`,
    alt: 'Detailing brush cleaning dust from car AC vents for odour removal',
    title: 'Car AC vent cleaning and odour removal',
    caption: 'AC vents brushed clean of dust',
    width: 1600, height: 1067, service: 'car-ac-odor-sanitization',
  },
]

export const showcaseFor = (service: ShowcaseImage['service']) => CAR_SHOWCASE.filter((i) => i.service === service)

export const showcaseImg = (file: string) => CAR_SHOWCASE.find((i) => i.src.endsWith(file))!
