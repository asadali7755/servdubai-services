import type { NextConfig } from 'next'
import path from 'path'
import { PRUNED_COMBOS } from './lib/data/serviceAreaCombos'

const nextConfig: NextConfig = {
  // Hostinger shared hosting caps how many processes a build may start, so
  // keep the build to one worker.
  experimental: { cpus: 1 },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 85, 90],
    minimumCacheTTL: 604800,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    remotePatterns: [],
  },
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  // optimizeCss removed — Tailwind v4 ke saath Turbopack infinite loop cause karta tha
  // 301/308 permanent redirects from old WordPress URLs -> new Next.js routes.
  // Recovers legacy ranking equity instead of letting old links 404.
  // NOTE: `permanent: true` = 308 (search engines cache it + pass equity, like 301).
  // Expand this list from GSC -> Pages -> "Not found (404)" as more old URLs surface.
  async redirects() {
    return [
      // Duplicate AI blog posts merged (13 Nov 2026): each topic keeps its
      // strongest post; the rest 308 to that post, the hand-written cost guide
      // or the matching service page. Keep these as literal objects: the SEO
      // agents read them as retired slugs and never write those topics again.
      { source: '/blog/apartment-deep-cleaning-dubai', destination: '/blog/apartment-deep-cleaning-dubai-rent', permanent: true },
      { source: '/blog/apartment-deep-cleaning-dubai-downtown', destination: '/blog/apartment-deep-cleaning-dubai-rent', permanent: true },
      { source: '/blog/apartment-deep-cleaning-dubai-groupon', destination: '/blog/apartment-deep-cleaning-dubai-rent', permanent: true },
      { source: '/blog/bathroom-cleaning-dubai-expert-guide', destination: '/blog/bathroom-cleaning-dubai-price', permanent: true },
      { source: '/blog/bathroom-cleaning-services-dubai-guide', destination: '/blog/bathroom-cleaning-dubai-price', permanent: true },
      { source: '/blog/best-carpet-cleaning-home-dubai', destination: '/services/carpet-cleaning', permanent: true },
      { source: '/blog/carpet-cleaners-dubai-guide', destination: '/services/carpet-cleaning', permanent: true },
      { source: '/blog/carpet-cleaning-dubai-professional-care', destination: '/services/carpet-cleaning', permanent: true },
      { source: '/blog/carpet-cleaning-home-dubai-hills', destination: '/services/carpet-cleaning', permanent: true },
      { source: '/blog/couch-cleaning-service-dubai', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/curtain-cleaning-dubai', destination: '/services/curtain-cleaning', permanent: true },
      { source: '/blog/curtain-cleaning-dubai-expert', destination: '/services/curtain-cleaning', permanent: true },
      { source: '/blog/curtain-cleaning-dubai-home', destination: '/services/curtain-cleaning', permanent: true },
      { source: '/blog/deep-cleaners-dubai-healthier-home', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/deep-cleaning-dubai-fee-guide', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/deep-cleaning-house-dubai-guide', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/deep-cleaning-sofa-dubai', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/dining-chair-cleaning-dubai', destination: '/services/dining-chair-cleaning', permanent: true },
      { source: '/blog/dining-chair-cleaning-dubai-cost', destination: '/services/dining-chair-cleaning', permanent: true },
      { source: '/blog/dining-chair-cleaning-dubai-islands', destination: '/services/dining-chair-cleaning', permanent: true },
      { source: '/blog/dubai-carpet-cleaning-services', destination: '/services/carpet-cleaning', permanent: true },
      { source: '/blog/dubai-floor-cleaning-company-price', destination: '/blog/floor-cleaning-dubai-price-list-2024', permanent: true },
      { source: '/blog/floor-cleaning-company-dubai-contact-number', destination: '/services/floor-cleaning', permanent: true },
      { source: '/blog/floor-cleaning-company-dubai-deira', destination: '/services/floor-cleaning', permanent: true },
      { source: '/blog/floor-cleaning-dubai-al-barsha', destination: '/services/floor-cleaning', permanent: true },
      { source: '/blog/floor-cleaning-dubai-bay', destination: '/services/floor-cleaning', permanent: true },
      { source: '/blog/furniture-cleaning-dubai-business-bay', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/home-cleaning-company-dubai', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/home-cleaning-dubai', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/home-deep-cleaning-dubai-al-barsha', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/home-deep-cleaning-dubai-al-nahda', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/home-deep-cleaning-dubai-hills', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/home-deep-cleaning-services-dubai', destination: '/blog/home-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/kitchen-cleaning-dubai-guide', destination: '/blog/kitchen-cleaning-dubai-cost-guide', permanent: true },
      { source: '/blog/kitchen-deep-cleaning-dubai-abu-dhabi', destination: '/blog/kitchen-cleaning-dubai-cost-guide', permanent: true },
      { source: '/blog/marble-floor-polishing-dubai-company', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/marble-floor-polishing-dubai-cost', destination: '/blog/marble-polishing-dubai-cost-process', permanent: true },
      { source: '/blog/marble-floor-polishing-dubai-guide', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-deals', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-price', destination: '/blog/marble-polishing-dubai-cost-process', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-uae', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/marble-polishing-dubai-city', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/marble-polishing-dubai-cost-guide', destination: '/blog/marble-polishing-dubai-cost-process', permanent: true },
      { source: '/blog/marble-polishing-dubai-emirates-restore', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/marble-polishing-dubai-guide', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/marble-polishing-dubai-hire', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/marble-polishing-dubai-hotel', destination: '/services/marble-polishing', permanent: true },
      { source: '/blog/mattress-cleaning-dubai-healthier-sleep', destination: '/blog/mattress-cleaning-dubai-guide', permanent: true },
      { source: '/blog/office-carpet-cleaning-dubai', destination: '/services/carpet-cleaning', permanent: true },
      { source: '/blog/office-cleaning-dubai', destination: '/blog/office-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/office-cleaning-dubai-productivity', destination: '/blog/office-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/office-cleaning-services-dubai', destination: '/blog/office-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/office-deep-cleaning-dubai-best-price', destination: '/blog/office-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/office-deep-cleaning-dubai-fees', destination: '/blog/office-deep-cleaning-dubai-guide', permanent: true },
      { source: '/blog/restaurant-kitchen-deep-cleaning-dubai', destination: '/services/restaurant-kitchen-cleaning', permanent: true },
      { source: '/blog/restaurant-kitchen-deep-cleaning-dubai-cost', destination: '/services/restaurant-kitchen-cleaning', permanent: true },
      { source: '/blog/sofa-carpet-cleaning-services-uae', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-carpet-cleaning-uae-contact-number', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-carpet-cleaning-uae-dubai', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-carpet-cleaning-uae-price-list', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-cleaning-company-dubai', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-cleaning-dubai-airport', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-cleaning-dubai-contact-quote', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-cleaning-dubai-expert-care', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-cleaning-dubai-hotel', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-cleaning-dubai-how-much', destination: '/blog/sofa-cleaning-cost-dubai', permanent: true },
      { source: '/blog/sofa-cleaning-dubai-services', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-cleaning-service-dubai', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-cleaning-services-dubai', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-deep-cleaning-dubai-contact', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/sofa-deep-cleaning-dubai-price', destination: '/blog/sofa-cleaning-cost-dubai', permanent: true },
      { source: '/blog/sofa-washing-dubai-expert-clean', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/upholstery-cleaning-dubai-company', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/upholstery-cleaning-services-dubai', destination: '/services/sofa-cleaning', permanent: true },
      { source: '/blog/villa-cleaning-dubai-luxury', destination: '/services/villa-deep-cleaning', permanent: true },
      { source: '/blog/villa-cleaning-dubai-tech-health', destination: '/services/villa-deep-cleaning', permanent: true },
      { source: '/blog/villa-cleaning-services-dubai', destination: '/services/villa-deep-cleaning', permanent: true },
      { source: '/blog/villa-deep-cleaning-dubai-city', destination: '/services/villa-deep-cleaning', permanent: true },
      { source: '/blog/villa-deep-cleaning-dubai-guide', destination: '/services/villa-deep-cleaning', permanent: true },
      // Car polishing/ceramic page was live briefly (Oct 2026) but the service is not offered.
      { source: '/services/car-polishing-ceramic-coating', destination: '/services/car-wash-at-home', permanent: true },
      // .com domain -> canonical .ae (keeps SEO equity on one domain)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'servedubai.com' }],
        destination: 'https://servedubai.ae/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.servedubai.com' }],
        destination: 'https://servedubai.ae/:path*',
        permanent: true,
      },
      // www.servedubai.ae -> servedubai.ae (one canonical host; www was serving a
      // full duplicate 200 copy of every page and Google had indexed some of them)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.servedubai.ae' }],
        destination: 'https://servedubai.ae/:path*',
        permanent: true,
      },
      // Pruned service x area pages (Oct 2026) -> their area page
      ...PRUNED_COMBOS.map((c) => ({
        source: `/${c.emirate}/${c.city}/${c.service}`,
        destination: `/${c.emirate}/${c.city}`,
        permanent: true,
      })),
      // Old singular /service/* -> new plural /services/*
      { source: '/service/:slug', destination: '/services/:slug', permanent: true },
      // Common old WordPress page slugs
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Block all PHP requests at header level
        source: '/:path*.php',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ]
  },
}

export default nextConfig
