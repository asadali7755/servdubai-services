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
  // Legacy WordPress archive URLs. No equivalent exists on the new site, so these
  // must die on .com rather than redirect onto .ae and 404 there.
  /^\/tag(\/|$)/i,
  /^\/category(\/|$)/i,
  /^\/author(\/|$)/i,
  /^\/(19|20)\d{2}\//,
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

const LEGACY_HOSTS = ['servedubai.com', 'www.servedubai.com']

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  const isSpamPath = SPAM_PATH_PATTERNS.some((p) => p.test(pathname))
  const isSpamQuery = search.length > 1 && SPAM_QUERY_PATTERNS.some((p) => p.test(search))

  // Spam dies here, on whichever host it was requested. This MUST run before the
  // legacy-host redirect below: a config-level `/:path*` redirect used to forward
  // every old URL to .ae, which pointed Google at ~146k hacked URLs on the clean
  // domain. They only 410'd after landing there. Now they never reach .ae at all.
  if (isSpamPath || isSpamQuery) {
    return gone()
  }

  // Everything legitimate on the retired .com moves to the canonical .ae host.
  const host = (request.headers.get('host') ?? '').toLowerCase()
  if (LEGACY_HOSTS.includes(host)) {
    const url = new URL(request.url)
    url.protocol = 'https:'
    url.host = 'servedubai.ae'
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
