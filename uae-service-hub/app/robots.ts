import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image/'],
        disallow: [
          '/*.php',
          '/*.php$',
          '/pnnfxpueiq*',
          '/*?products/*',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-content/',
          '/xmlrpc.php',
          '/wp-login.php',
          '/cgi-bin/',
          '/*.php?*',
        ],
      },
    ],
    sitemap: 'https://servedubai.com/sitemap.xml',
  }
}
