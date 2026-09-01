import { NextRequest, NextResponse } from 'next/server'

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
