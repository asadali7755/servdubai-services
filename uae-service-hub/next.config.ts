import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
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
      // NOTE: the .com -> .ae host redirect lives in proxy.ts, NOT here.
      // Config redirects are evaluated before proxy.ts, so a `/:path*` rule here
      // forwarded the old site's hacked URLs onto .ae before they could be 410'd.
      // Keeping the redirect inside proxy.ts lets the spam check run first.
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
