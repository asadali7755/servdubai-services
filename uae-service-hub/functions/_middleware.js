// Replaces proxy.ts and the host redirects in next.config.ts, which a static
// export cannot run. public/_routes.json keeps static assets out of this
// function so it only runs for page and spam URLs.
// - servedubai.com, www.servedubai.com, www.servedubai.ae -> servedubai.ae (301)
// - 410 Gone for the spam/WordPress URLs left by the old hack
// - 404 for spam query keys on the homepage (was done in app/page.tsx)
const CANONICAL = 'servedubai.ae';
const REDIRECT_HOSTS = new Set(['servedubai.com', 'www.servedubai.com', 'www.servedubai.ae']);

const SPAM_PATH_PATTERNS = [
  /\.php/i, /pnnfxpueiq/i, /\/wp-admin/i, /\/wp-includes/i, /\/wp-content/i, /\/cgi-bin/i,
  /\/adminer/i, /\/phpmyadmin/i, /^\/products\//i, /^\/ctg\//i, /^\/categoryindex/i,
  /^\/xmlrpc/i, /^\/wp-login/i, /^\/wp-json/i, /^\/wp-cron/i, /^\/trackback/i, /^\/feed\//i,
];
const SPAM_QUERY_PATTERNS = [/products\//i, /\.php/i, /categoryindex/i];
const HOME_SPAM_KEYS = [/products\//i, /\.php/i, /categoryindex/i, /ctg\//i, /wp-/i, /xmlrpc/i, /pnnfxpueiq/i];

const gone = () =>
  new Response(null, { status: 410, headers: { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' } });

export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);

  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = CANONICAL;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }

  const { pathname, search } = url;
  if (SPAM_PATH_PATTERNS.some((p) => p.test(pathname))) return gone();
  if (search.length > 1 && SPAM_QUERY_PATTERNS.some((p) => p.test(search))) return gone();

  if (pathname === '/' && [...url.searchParams.keys()].some((k) => HOME_SPAM_KEYS.some((p) => p.test(k)))) {
    const notFound = await env.ASSETS.fetch(new URL('/404.html', url));
    return new Response(notFound.body, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' },
    });
  }

  return next();
}
