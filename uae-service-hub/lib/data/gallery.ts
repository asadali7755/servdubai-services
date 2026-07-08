/**
 * Gallery data — add new images/videos here without touching any UI code.
 *
 * ADD A NEW IMAGE:
 *   1. Copy photo to:  /public/galary-images-pics/your-photo.webp
 *   2. Add one line in images[] for that service:
 *      { src: '/galary-images-pics/marble-before-after.webp', alt: 'Marble polishing before after Dubai' }
 *   3. git push → Vercel auto-deploys.
 *
 * ADD A NEW LOCAL VIDEO (phone recording):
 *   1. Drop the raw video in /public/galary-images-pics/ (any name)
 *   2. Run: ffmpeg -i rawvideo.mp4 -c:v libx264 -preset fast -crf 22 -vf "scale=720:1280" -c:a aac -b:a 96k -movflags +faststart service-name-dubai.mp4 -y
 *   3. Extract poster: ffmpeg -i rawvideo.mp4 -ss 00:00:02 -vframes 1 -q:v 3 service-name-dubai-poster.jpg -y
 *   4. Add to localVideos[]:
 *      { src: '/galary-images-pics/service-name-dubai.mp4', poster: '/galary-images-pics/service-name-dubai-poster.jpg', title: '...' }
 *   5. git push → Vercel auto-deploys.
 *
 * ADD A YOUTUBE VIDEO:
 *   1. Copy Video ID from URL (youtu.be/ABC123 → ID is "ABC123")
 *   2. Add to videos[]: { youtubeId: 'ABC123', title: '...' }
 *   3. git push → Vercel auto-deploys.
 */

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface GalleryLocalVideo {
  src: string        // path to compressed MP4 in /public/
  poster?: string    // path to thumbnail JPG in /public/
  title: string
  titleAr?: string
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
  localVideos: GalleryLocalVideo[]
  videos: GalleryVideo[]
}

export const galleryData: ServiceGallery[] = [
  {
    id: 'sofa-cleaning',
    name: 'Sofa & Upholstery Cleaning',
    nameAr: 'تنظيف الكنب والمقاعد',
    slug: 'sofa-cleaning',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/sofa/sofa-steam-cleaning-result-dubai-6.mp4',
        poster: '/galary-images-pics/sofa/sofa-steam-cleaning-result-dubai-6-poster.jpg',
        title: 'Sofa Steam Cleaning Result Dubai — Before & After',
        titleAr: 'نتيجة تنظيف الكنب بالبخار دبي — قبل وبعد',
      },
      {
        src: '/galary-images-pics/sofa/couch-cleaning-before-after-dubai-7.mp4',
        poster: '/galary-images-pics/sofa/couch-cleaning-before-after-dubai-7-poster.jpg',
        title: 'Couch Cleaning Before & After Dubai',
        titleAr: 'تنظيف الأريكة قبل وبعد دبي',
      },
      {
        src: '/galary-images-pics/sofa/sofa-sanitization-result-dubai-8.mp4',
        poster: '/galary-images-pics/sofa/sofa-sanitization-result-dubai-8-poster.jpg',
        title: 'Sofa Sanitization & Deep Clean Result Dubai',
        titleAr: 'نتيجة تعقيم وتنظيف الكنب العميق دبي',
      },
      {
        src: '/galary-images-pics/sofa/sofa-cleaning-quick-result-dubai-4.mp4',
        poster: '/galary-images-pics/sofa/sofa-cleaning-quick-result-dubai-4-poster.jpg',
        title: 'Quick Sofa Cleaning Result Dubai — Same Day Service',
        titleAr: 'نتيجة تنظيف الكنب السريع دبي — خدمة نفس اليوم',
      },
      {
        src: '/galary-images-pics/sofa/fabric-sofa-deep-clean-dubai-5.mp4',
        poster: '/galary-images-pics/sofa/fabric-sofa-deep-clean-dubai-5-poster.jpg',
        title: 'Fabric Sofa Deep Clean Dubai — Heavy Stain Removal',
        titleAr: 'تنظيف الكنب القماشي العميق دبي — إزالة البقع الصعبة',
      },
      {
        src: '/galary-images-pics/sofa/sofa-shampooing-result-dubai-2.mp4',
        poster: '/galary-images-pics/sofa/sofa-shampooing-result-dubai-2-poster.jpg',
        title: 'Sofa Shampooing Result Dubai — Before & After',
        titleAr: 'نتيجة شامبو الكنب دبي — قبل وبعد',
      },
      {
        src: '/galary-images-pics/sofa/upholstery-cleaning-before-after-dubai-3.mp4',
        poster: '/galary-images-pics/sofa/upholstery-cleaning-before-after-dubai-3-poster.jpg',
        title: 'Upholstery Cleaning Before & After Dubai',
        titleAr: 'تنظيف المفروشات قبل وبعد دبي',
      },
    ],
    videos: [
      // ADD YOUTUBE: { youtubeId: 'YOUR_VIDEO_ID', title: 'Sofa Cleaning Before & After Dubai' },
    ],
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet & Rug Cleaning',
    nameAr: 'تنظيف السجاد والبسط',
    slug: 'carpet-cleaning',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/carpet/carpet-steam-cleaning-dubai.mp4',
        poster: '/galary-images-pics/carpet/carpet-steam-cleaning-dubai-poster.jpg',
        title: 'Carpet Steam Cleaning Dubai — Professional Deep Steam Extraction',
        titleAr: 'تنظيف السجاد بالبخار دبي — استخراج البخار العميق الاحترافي',
      },
      {
        src: '/galary-images-pics/carpet/carpet-deep-cleaning-result-dubai-1.mp4',
        poster: '/galary-images-pics/carpet/carpet-deep-cleaning-result-dubai-1-poster.jpg',
        title: 'Carpet Deep Cleaning Result Dubai — Before & After',
        titleAr: 'نتيجة تنظيف السجاد العميق دبي — قبل وبعد',
      },
      {
        src: '/galary-images-pics/carpet/carpet-stain-removal-dubai-2.mp4',
        poster: '/galary-images-pics/carpet/carpet-stain-removal-dubai-2-poster.jpg',
        title: 'Carpet Stain Removal Dubai — Professional Spot Treatment',
        titleAr: 'إزالة بقع السجاد دبي — معالجة البقع الاحترافية',
      },
      {
        src: '/galary-images-pics/carpet/rug-cleaning-before-after-dubai-3.mp4',
        poster: '/galary-images-pics/carpet/rug-cleaning-before-after-dubai-3-poster.jpg',
        title: 'Rug Cleaning Before & After Dubai — Full Restoration',
        titleAr: 'تنظيف البساط قبل وبعد دبي — ترميم كامل',
      },
    ],
    videos: [],
  },
  {
    id: 'villa-deep-cleaning',
    name: 'Villa Deep Cleaning',
    nameAr: 'تنظيف الفلل العميق',
    slug: 'villa-deep-cleaning',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/villa/villa-deep-cleaning-dubai-1.mp4',
        poster: '/galary-images-pics/villa/villa-deep-cleaning-dubai-1-poster.jpg',
        title: 'Villa Deep Cleaning Dubai — Complete Home Sanitization',
        titleAr: 'تنظيف الفلل العميق دبي — تعقيم المنزل الكامل',
      },
      {
        src: '/galary-images-pics/villa/villa-deep-cleaning-dubai-2.mp4',
        poster: '/galary-images-pics/villa/villa-deep-cleaning-dubai-2-poster.jpg',
        title: 'Villa Cleaning Process Dubai — Professional Team at Work',
        titleAr: 'عملية تنظيف الفلل دبي — فريق احترافي في العمل',
      },
    ],
    videos: [],
  },
  {
    id: 'marble-polishing',
    name: 'Marble Polishing & Restoration',
    nameAr: 'تلميع وترميم الرخام',
    slug: 'marble-polishing',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/marble-polishing-dubai.mp4',
        poster: '/galary-images-pics/marble-polishing-dubai-poster.jpg',
        title: 'Kitchen Countertop Marble Polishing Dubai',
        titleAr: 'تلميع رخام سطح المطبخ دبي',
      },
      {
        src: '/galary-images-pics/marble-polishing-process-dubai.mp4',
        poster: '/galary-images-pics/marble-polishing-process-dubai-poster.jpg',
        title: 'Marble Polishing Process Dubai — Step by Step Floor Shine',
        titleAr: 'عملية تلميع الرخام دبي — خطوات لمعان الأرضية',
      },
      {
        src: '/galary-images-pics/marble/crema-marfil-polishing-dubai-process.mp4',
        poster: '/galary-images-pics/marble/crema-marfil-polishing-dubai-process-poster.jpg',
        title: 'Crema Marfil Marble Polishing Dubai — Premium Stone Restoration',
        titleAr: 'تلميع رخام كريما مارفيل دبي — ترميم الحجر الفاخر',
      },
      {
        src: '/galary-images-pics/marble/kitchen-top-polishing-dubai-process.mp4',
        poster: '/galary-images-pics/marble/kitchen-top-polishing-dubai-process-poster.jpg',
        title: 'Kitchen Countertop Polishing Dubai — Marble Surface Restoration',
        titleAr: 'تلميع سطح المطبخ دبي — ترميم سطح الرخام',
      },
      {
        src: '/galary-images-pics/marble/marble-floor-restoration-process.mp4',
        poster: '/galary-images-pics/marble/marble-floor-restoration-process-poster.jpg',
        title: 'Marble Floor Restoration Dubai — Diamond Polishing Process',
        titleAr: 'ترميم أرضية الرخام دبي — عملية التلميع بالألماس',
      },
      {
        src: '/galary-images-pics/marble/onyx-marble-polishing-dubai-process.mp4',
        poster: '/galary-images-pics/marble/onyx-marble-polishing-dubai-process-poster.jpg',
        title: 'Onyx Marble Polishing Dubai — Luxury Stone Care',
        titleAr: 'تلميع رخام أونيكس دبي — العناية بالحجر الفاخر',
      },
      {
        src: '/galary-images-pics/marble/travertine-polishing-dubai-process.mp4',
        poster: '/galary-images-pics/marble/travertine-polishing-dubai-process-poster.jpg',
        title: 'Travertine Polishing Dubai — Natural Stone Floor Shine',
        titleAr: 'تلميع الترافرتين دبي — لمعان أرضية الحجر الطبيعي',
      },
    ],
    videos: [],
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Deep Cleaning',
    nameAr: 'تنظيف المراتب العميق',
    slug: 'mattress-cleaning',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/matres/mattress-deep-cleaning-dubai-1.mp4',
        poster: '/galary-images-pics/matres/mattress-deep-cleaning-dubai-1-poster.jpg',
        title: 'Mattress Deep Cleaning Dubai — Dust & Allergen Removal',
        titleAr: 'تنظيف المراتب العميق دبي — إزالة الغبار والمواد المسببة للحساسية',
      },
      {
        src: '/galary-images-pics/matres/mattress-sanitization-dubai-2.mp4',
        poster: '/galary-images-pics/matres/mattress-sanitization-dubai-2-poster.jpg',
        title: 'Mattress Sanitization Dubai — Anti-Bacterial Steam Treatment',
        titleAr: 'تعقيم المراتب دبي — معالجة بالبخار مضادة للبكتيريا',
      },
    ],
    videos: [],
  },
  {
    id: 'office-cleaning',
    name: 'Office & Commercial Cleaning',
    nameAr: 'تنظيف المكاتب والمنشآت',
    slug: 'office-cleaning',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/office/office-workstation-cleaning-dubai-1.mp4',
        poster: '/galary-images-pics/office/office-workstation-cleaning-dubai-1-poster.jpg',
        title: 'Office Workstation Cleaning Dubai — Daily Desk Sanitization',
        titleAr: 'تنظيف محطات العمل المكتبية دبي — تعقيم المكاتب اليومي',
      },
      {
        src: '/galary-images-pics/office/office-deep-cleaning-result-dubai-2.mp4',
        poster: '/galary-images-pics/office/office-deep-cleaning-result-dubai-2-poster.jpg',
        title: 'Office Deep Cleaning Result Dubai — Complete Space Transformation',
        titleAr: 'نتيجة تنظيف المكتب العميق دبي — تحول كامل للمساحة',
      },
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
    localVideos: [],
    videos: [],
  },
  {
    id: 'restaurant-kitchen-cleaning',
    name: 'Kitchen & Restaurant Cleaning',
    nameAr: 'تنظيف المطابخ والمطاعم',
    slug: 'restaurant-kitchen-cleaning',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/kitchen/kitchen-floor-tile-cleaning-dubai-1.mp4',
        poster: '/galary-images-pics/kitchen/kitchen-floor-tile-cleaning-dubai-1-poster.jpg',
        title: 'Kitchen Floor Tile Scrubbing Dubai — Deep Grout & Tile Cleaning',
        titleAr: 'تنظيف بلاط أرضية المطبخ دبي — تنظيف عميق للبلاط والفواصل',
      },
      {
        src: '/galary-images-pics/kitchen/restaurant-kitchen-deep-cleaning-dubai-2.mp4',
        poster: '/galary-images-pics/kitchen/restaurant-kitchen-deep-cleaning-dubai-2-poster.jpg',
        title: 'Restaurant Kitchen Deep Cleaning Dubai — Commercial Floor Degreasing',
        titleAr: 'تنظيف مطبخ المطعم العميق دبي — إزالة الشحوم من الأرضيات التجارية',
      },
    ],
    videos: [],
  },
  {
    id: 'curtain-cleaning',
    name: 'Curtain & Blinds Cleaning',
    nameAr: 'تنظيف الستائر والبلايندز',
    slug: 'curtain-cleaning',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/curtain/blinds-steam-cleaning-dubai-1.mp4',
        poster: '/galary-images-pics/curtain/blinds-steam-cleaning-dubai-1-poster.jpg',
        title: 'Blinds Steam Cleaning Dubai — Before & After Deep Clean',
        titleAr: 'تنظيف البلايندز بالبخار دبي — قبل وبعد التنظيف العميق',
      },
      {
        src: '/galary-images-pics/curtain/curtain-dry-steam-cleaning-dubai-2.mp4',
        poster: '/galary-images-pics/curtain/curtain-dry-steam-cleaning-dubai-2-poster.jpg',
        title: 'Curtain Dry Steam Vac Cleaning Dubai — On-Site Professional Service',
        titleAr: 'تنظيف الستائر بالبخار الجاف دبي — خدمة احترافية في الموقع',
      },
      {
        src: '/galary-images-pics/curtain/kitchen-blinds-steam-cleaning-dubai-3.mp4',
        poster: '/galary-images-pics/curtain/kitchen-blinds-steam-cleaning-dubai-3-poster.jpg',
        title: 'Kitchen Blinds Steam Cleaning Dubai — Aluminium Blind Sanitization',
        titleAr: 'تنظيف ستائر المطبخ بالبخار دبي — تعقيم الستائر الألمنيوم',
      },
    ],
    videos: [],
  },
  {
    id: 'car-interior-detailing',
    name: 'Car Interior Detailing',
    nameAr: 'تنظيف داخلية السيارة',
    slug: 'car-interior-detailing',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/car/car-floor-mat-cleaning-dubai.mp4',
        poster: '/galary-images-pics/car/car-floor-mat-cleaning-dubai-poster.jpg',
        title: 'Car Floor Mat Deep Cleaning Dubai — Before & After',
        titleAr: 'تنظيف حصيرة أرضية السيارة دبي — قبل وبعد',
      },
      {
        src: '/galary-images-pics/car/car-interior-steam-cleaning-dubai.mp4',
        poster: '/galary-images-pics/car/car-interior-steam-cleaning-dubai-poster.jpg',
        title: 'Car Interior Steam Cleaning Dubai — Full Cabin Deep Clean',
        titleAr: 'تنظيف داخلية السيارة بالبخار دبي — تنظيف عميق كامل',
      },
    ],
    videos: [],
  },
  {
    id: 'dining-chair-cleaning',
    name: 'Dining Chair & Furniture Cleaning',
    nameAr: 'تنظيف كراسي الطعام والأثاث',
    slug: 'dining-chair-cleaning',
    images: [],
    localVideos: [
      {
        src: '/galary-images-pics/dining-chair/dining-chair-fabric-cleaning-dubai-1.mp4',
        poster: '/galary-images-pics/dining-chair/dining-chair-fabric-cleaning-dubai-1-poster.jpg',
        title: 'Dining Chair Fabric Cleaning Dubai — White Cushion Stain Removal',
        titleAr: 'تنظيف كراسي الطعام القماشية دبي — إزالة بقع الوسائد البيضاء',
      },
      {
        src: '/galary-images-pics/dining-chair/dining-chair-steam-cleaning-dubai-2.mp4',
        poster: '/galary-images-pics/dining-chair/dining-chair-steam-cleaning-dubai-2-poster.jpg',
        title: 'Dining Chair Steam Cleaning Dubai — Professional Upholstery Care',
        titleAr: 'تنظيف كراسي الطعام بالبخار دبي — عناية احترافية بالمفروشات',
      },
    ],
    videos: [],
  },
]
