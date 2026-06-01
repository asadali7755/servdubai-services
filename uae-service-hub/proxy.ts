import { NextRequest, NextResponse } from 'next/server'

// Old WordPress hack URLs — return 410 Gone so Google removes them fast
const SPAM_PATH_PATTERNS = [
  /\.php/i,
  /pnnfxpueiq/i,
  /\/wp-admin/i,
  /\/wp-includes/i,
  /\/wp-content/i,
  /\/cgi-bin/i,
  /\/adminer/i,
  /\/phpmyadmin/i,
  // Hack-injected spam pages (auto-generated fake product/search URLs).
  // The real site has NO /products or /ctg routes, so 410 (Gone) is safe and
  // de-indexes faster than the bare 404 these currently return.
  /^\/products\//i,
  /^\/ctg\//i,
]

// Query string spam — e.g. /?products/68533758
const SPAM_QUERY_PATTERNS = [
  /products\//i,
  /\.php/i,
]

// Build a fresh 410 response per request.
// Proxy must NOT reuse a shared/global Response instance (Next.js docs:
// "you should not attempt relying on shared modules or globals") — a single
// Response object cannot be safely returned for multiple concurrent requests.
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
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
}
