import { NextRequest, NextResponse } from 'next/server'
import { PRUNED_COMBOS } from '@/lib/data/serviceAreaCombos'

// Service x area pages removed in Oct 2026 -> their area page. This lived in
// next.config.ts redirects, but next.config.ts must not import site data (see
// the note there), so the lookup happens here.
const PRUNED_TO_AREA = new Map(
  PRUNED_COMBOS.map((c) => [`/${c.emirate}/${c.city}/${c.service}`, `/${c.emirate}/${c.city}`]),
)

const SPAM_PATH_PATTERNS = [
  /\.php/i,
  /pnnfxpueiq/i,
  /\/wp-admin/i,
  /\/wp-includes/i,
  /\/wp-content/i,
  /\/cgi-bin/i,
  /\/adminer/i,
  /\/phpmyadmin/i,
  /^\/products\//i,
  /^\/ctg\//i,
  /^\/categoryindex/i,
  /^\/xmlrpc/i,
  /^\/wp-login/i,
  /^\/wp-json/i,
  /^\/wp-cron/i,
  /^\/trackback/i,
  /^\/feed\//i,
]

const SPAM_QUERY_PATTERNS = [
  /products\//i,
  /\.php/i,
  /categoryindex/i,
]

function gone(): NextResponse {
  return new NextResponse(null, {
    status: 410,
    headers: {
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  })
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  const isSpamPath = SPAM_PATH_PATTERNS.some((p) => p.test(pathname))
  const isSpamQuery = search.length > 1 && SPAM_QUERY_PATTERNS.some((p) => p.test(search))

  if (isSpamPath || isSpamQuery) {
    return gone()
  }

  const area = PRUNED_TO_AREA.get(pathname)
  if (area) {
    // Same host as the request (www and .com already 308 to servedubai.ae in
    // next.config.ts, which runs before the proxy); query string is kept.
    const url = request.nextUrl.clone()
    url.pathname = area
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    {
      source: '/(.*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
      ],
    },
    {
      source: '/(.*)',
      has: [
        { type: 'header', key: 'next-router-prefetch' },
      ],
    },
  ],
}
