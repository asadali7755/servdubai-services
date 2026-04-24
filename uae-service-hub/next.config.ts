import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 604800, // 7 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    remotePatterns: [],
  },
  compress: true,
  poweredByHeader: false,
  // optimizeCss removed — incompatible with Tailwind v4 in dev mode (causes infinite loop + system crash)
}

export default nextConfig
