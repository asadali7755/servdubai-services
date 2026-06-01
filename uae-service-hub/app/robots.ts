import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // IMPORTANT: do NOT disallow the old hack paths (.php, /cgi-bin, /products, /wp-*).
  // proxy.ts already returns 410 Gone for them. If they are disallowed here, Googlebot
  // can't crawl them, never sees the 410, and the spam URLs stay indexed forever.
  // Leaving them crawlable is what lets Google discover the 410 and de-index them.
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://servedubai.com/sitemap.xml',
  }
}
