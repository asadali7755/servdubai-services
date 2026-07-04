/**
 * Gallery data — add new images/videos here without touching any UI code.
 *
 * ADD A NEW IMAGE:
 *   1. Copy photo to:  /public/gallery/<service-id>/photo-name.webp
 *   2. Add one line in images[] for that service:
 *      { src: '/gallery/sofa-cleaning/before-after.webp', alt: 'Sofa cleaning before after Dubai' }
 *   3. git push → Vercel auto-deploys.
 *
 * ADD A YOUTUBE VIDEO:
 *   1. Upload video to YouTube.
 *   2. Copy the Video ID (e.g. from youtu.be/ABC123 → ID is "ABC123")
 *   3. Add to videos[]:
 *      { youtubeId: 'ABC123', title: 'Sofa Cleaning Before & After' }
 *   4. git push → Vercel auto-deploys.
 */

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface GalleryVideo {
  youtubeId: string
  title: string
}

export interface ServiceGallery {
  id: string
  name: string
  nameAr: string
  slug: string
  images: GalleryImage[]
  videos: GalleryVideo[]
}

export const galleryData: ServiceGallery[] = [
  {
    id: 'sofa-cleaning',
    name: 'Sofa & Upholstery Cleaning',
    nameAr: 'تنظيف الكنب والمقاعد',
    slug: 'sofa-cleaning',
    images: [
      { src: '/images/services/sofa-cleaning.webp', alt: 'Professional sofa deep cleaning Dubai — Madinat Alhaya', caption: 'Sofa Steam Cleaning' },
      { src: '/images/hero/sofa-carpet-cleaning.webp', alt: 'Sofa and carpet cleaning Dubai — steam cleaning service', caption: 'Sofa & Carpet Deep Clean' },
      { src: '/velvet-microfiber-sofa-cleaning.webp', alt: 'Velvet microfiber sofa cleaning Dubai — fabric restoration', caption: 'Velvet Sofa Restoration' },
      // ADD YOUR PHOTOS: { src: '/gallery/sofa-cleaning/your-photo.webp', alt: '...', caption: '...' },
    ],
    videos: [
      // ADD YOUR VIDEOS: { youtubeId: 'YOUR_VIDEO_ID', title: 'Sofa Cleaning Before & After Dubai' },
    ],
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet & Rug Cleaning',
    nameAr: 'تنظيف السجاد والبسط',
    slug: 'carpet-cleaning',
    images: [
      { src: '/images/services/carpet-cleaning.webp', alt: 'Professional carpet cleaning Dubai — steam extraction service', caption: 'Deep Steam Extraction' },
      { src: '/images/hero/sofa-carpet-cleaning.webp', alt: 'Carpet and sofa cleaning UAE — eco-friendly methods', caption: 'Eco-Friendly Carpet Clean' },
      // ADD YOUR PHOTOS: { src: '/gallery/carpet-cleaning/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'villa-deep-cleaning',
    name: 'Villa Deep Cleaning',
    nameAr: 'تنظيف الفلل العميق',
    slug: 'villa-deep-cleaning',
    images: [
      { src: '/images/services/villa-deep-cleaning.webp', alt: 'Villa deep cleaning Dubai — complete home cleaning service', caption: 'Complete Villa Deep Clean' },
      { src: '/images/hero/villa-apartment-cleaning-services.webp', alt: 'Villa and apartment cleaning services UAE', caption: 'Villa & Apartment Cleaning' },
      { src: '/images/hero/professional-cleaning-services-UAE.webp', alt: 'Professional cleaning services UAE — Madinat Alhaya team', caption: 'Professional Team at Work' },
      // ADD YOUR PHOTOS: { src: '/gallery/villa-deep-cleaning/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'marble-polishing',
    name: 'Marble Polishing & Restoration',
    nameAr: 'تلميع وترميم الرخام',
    slug: 'marble-polishing',
    images: [
      { src: '/images/services/marble-polishing.webp', alt: 'Marble polishing Dubai — floor restoration and crystallization', caption: 'Floor Crystallization' },
      { src: '/images/hero/marble-polishing-dubai.webp', alt: 'Marble polishing Dubai — mirror finish restoration UAE', caption: 'Mirror Finish Restoration' },
      // ADD YOUR PHOTOS: { src: '/gallery/marble-polishing/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Deep Cleaning',
    nameAr: 'تنظيف المراتب العميق',
    slug: 'mattress-cleaning',
    images: [
      { src: '/images/services/mattress-cleaning.webp', alt: 'Mattress deep cleaning Dubai — UV sanitization and HEPA extraction', caption: 'UV-C Sanitization' },
      // ADD YOUR PHOTOS: { src: '/gallery/mattress-cleaning/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'office-cleaning',
    name: 'Office & Commercial Cleaning',
    nameAr: 'تنظيف المكاتب والمنشآت',
    slug: 'office-cleaning',
    images: [
      { src: '/images/services/office-cleaning.webp', alt: 'Office cleaning Dubai — commercial cleaning company UAE', caption: 'Commercial Office Clean' },
      // ADD YOUR PHOTOS: { src: '/gallery/office-cleaning/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'apartment-cleaning',
    name: 'Apartment Cleaning',
    nameAr: 'تنظيف الشقق',
    slug: 'apartment-cleaning',
    images: [
      { src: '/images/services/apartment-cleaning.webp', alt: 'Apartment cleaning Dubai — move-in move-out deep cleaning service', caption: 'Move-In / Move-Out Clean' },
      // ADD YOUR PHOTOS: { src: '/gallery/apartment-cleaning/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'restaurant-kitchen-cleaning',
    name: 'Kitchen & Restaurant Cleaning',
    nameAr: 'تنظيف المطابخ والمطاعم',
    slug: 'restaurant-kitchen-cleaning',
    images: [
      { src: '/images/services/restaurant-kitchen-cleaning.webp', alt: 'Kitchen cleaning Dubai — restaurant commercial deep cleaning', caption: 'Commercial Kitchen Deep Clean' },
      // ADD YOUR PHOTOS: { src: '/gallery/kitchen-cleaning/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'curtain-cleaning',
    name: 'Curtain & Blinds Cleaning',
    nameAr: 'تنظيف الستائر والبلايندز',
    slug: 'curtain-cleaning',
    images: [
      { src: '/images/services/curtain-cleaning.webp', alt: 'Curtain cleaning Dubai — on-site steam cleaning for all fabrics', caption: 'On-Site Curtain Steam Clean' },
      // ADD YOUR PHOTOS: { src: '/gallery/curtain-cleaning/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'car-interior-detailing',
    name: 'Car Interior Detailing',
    nameAr: 'تنظيف داخلية السيارة',
    slug: 'car-interior-detailing',
    images: [
      { src: '/images/services/car-interior-detailing.webp', alt: 'Car interior detailing Dubai — professional auto cleaning and sanitization', caption: 'Full Cabin Sanitization' },
      // ADD YOUR PHOTOS: { src: '/gallery/car-interior/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
  {
    id: 'dining-chair-cleaning',
    name: 'Dining Chair & Furniture Cleaning',
    nameAr: 'تنظيف كراسي الطعام والأثاث',
    slug: 'dining-chair-cleaning',
    images: [
      { src: '/images/services/dining-chair-cleaning.webp', alt: 'Dining chair cleaning Dubai — upholstery and furniture deep cleaning', caption: 'Fabric & Leather Chair Clean' },
      // ADD YOUR PHOTOS: { src: '/gallery/dining-chair/your-photo.webp', alt: '...' },
    ],
    videos: [],
  },
]
