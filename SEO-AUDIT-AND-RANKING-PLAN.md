# ServeDubai.com — Full SEO Audit & Ranking Plan
**Al Haya Cleaning Services** · Next.js 16 (App Router) · audited from source code
**Date:** 2026-05-31 · **Auditor:** Claude (code-level audit of `uae-service-hub/`)

> This audit was done against the **actual codebase**, not just the live HTML. Every
> finding links to a real file/line. Confirmed business number: **+971 55 127 5545**
> (this is the source of truth — old listings must be updated to match it, not the reverse).

---

## TL;DR — Why the site isn't ranking

The site is **not penalised** (Security & Manual Actions = clean) and the **on-page SEO is genuinely good**
(unique hyperlocal content on every city page, schema wired up, dynamic sitemap/robots, GTM installed).

Ranking is blocked by **three technical faults that are still live in the code**, plus the slow
natural recovery from the old WordPress hack + migration:

| # | Root cause | Status in code | Effect |
|---|-----------|----------------|--------|
| 1 | `robots.ts` blocks the exact spam paths that `proxy.ts` 410s | **Conflict live** | 4-lakh spam URLs can never de-index; crawl budget wasted |
| 2 | No 301 redirects from old WordPress URLs | **Missing** | 5 years of legacy ranking equity lost to 404s |
| 3 | `proxy.ts` reuses one `NextResponse` singleton | **Bug live** | 410 responses can fail intermittently |

Fix these three, give Google 4–8 weeks to re-crawl, then the content/growth phases compound from there.

---

## Page inventory (what's real and indexable)

- **1** homepage
- **3** static: `/about`, `/contact`, `/websites`
- **11** service pages: `/services/[slug]`
- **7** emirate pages: `/[emirate]`
- **31** city pages: `/[emirate]/[city]` — **all 31 have unique local content** (32 entries in `cityContent.ts`)
- **≈ 53 legitimate pages total** — matches the ~379 "real" pages Google sees.

The "thin/templated location pages" worry from the live-HTML audit is **not true in the current code** —
`lib/data/cityContent.ts` gives each city a unique description, landmarks, FAQs and trust copy.

---

# PHASE 0 — Critical technical fixes (do first, this week)

> These are blocking. Every day they wait, spam URLs keep burning crawl budget and legacy equity stays lost.
> Code references below are the *targets*; nothing has been changed yet (plan-first).

### 0.1 — Unblock spam paths in `robots.ts` so they can de-index ⚠️ #1 priority
**File:** `uae-service-hub/app/robots.ts:9-21`

The `disallow` list blocks `/*.php`, `/pnnfxpueiq*`, `/*?products/*`, `/wp-admin/`, `/wp-includes/`,
`/wp-content/`, `/cgi-bin/`, `/xmlrpc.php`, `/wp-login.php`. **`proxy.ts` already returns 410 for all of these.**
A URL that is `Disallow`-ed is never crawled, so Google never sees the 410 and never removes it.

**Action:** Remove the spam-path `disallow` entries. Keep robots minimal — let `proxy.ts` (410) + Google crawling
do the de-indexing. A clean version:

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://servedubai.com/sitemap.xml',
  }
}
```

- [x] Remove spam `disallow` lines from `robots.ts` — **DONE (2026-06-01)**, build verified
- [ ] Re-deploy, then in GSC confirm `robots.txt` no longer blocks `/products/`, `.php`, `/cgi-bin/`
- [ ] Expected: over 4–8 weeks, "Indexed though blocked by robots" + spam counts steadily drop

### 0.2 — Add 301 redirects for old WordPress URLs
**File:** `uae-service-hub/next.config.ts` (no `redirects()` currently exists)

Recover legacy equity by 301-ing every known old URL to its new equivalent. Add an `async redirects()` block.
Starter map (expand from GSC → Pages → "Not found 404"):

```ts
async redirects() {
  return [
    { source: '/service/:slug', destination: '/services/:slug', permanent: true },
    { source: '/contact-us',    destination: '/contact',        permanent: true },
    { source: '/about-us',      destination: '/about',          permanent: true },
    // + every legacy /service/* and old page from GSC 404 report
  ]
}
```

- [x] Add `redirects()` to `next.config.ts` with known mappings — **DONE (2026-06-01)**, compiled as 308 (verified in routes-manifest)
- [ ] Pull the full "Not found (404)" list from GSC and expand the redirect map with any remaining old URLs
- [ ] Deploy, spot-test a few old URLs return 308

### 0.3 — Fix the reused `NextResponse` singleton in `proxy.ts`
**File:** `uae-service-hub/proxy.ts:21-27`

`SPAM_410_RESPONSE` is created once at module load and returned for every request. A single Response
instance shouldn't be reused across requests. Build it fresh inside the handler:

```ts
if (isSpamPath || isSpamQuery) {
  return new NextResponse(null, {
    status: 410,
    headers: { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' },
  })
}
```

- [x] Move 410 construction inside the handler (`gone()` factory) — **DONE (2026-06-01)**, build verified
- [ ] Confirm `/anything.php` still returns 410 after deploy

### 0.4 — Submit clean sitemap + request indexing
- [ ] In GSC, (re)submit `https://servedubai.com/sitemap.xml`
- [ ] URL-Inspect → "Request Indexing" for homepage + top 5 service + top 5 city pages
### 0.5 — Fix Vercel domain canonicalization ⚠️ (confirmed live, NEW finding)
Verified against the live site + Vercel project `uae-service-hub` (`team_4z14WblX...`). Hosting/build is healthy
(all deployments READY), but the **domain layer has three real issues:**

- **www/non-www contradiction:** Vercel primary domain = `www.servedubai.com`, and `servedubai.com` **307-redirects to www.** But the code's canonical tags, `sitemap.xml` (`<loc>https://servedubai.com</loc>`) and schema all use **non-www**. Google's canonical points to a URL that redirects away → split signals.
- **Redirect is 307 (Temporary)** — should be **301/308 permanent** so equity consolidates.
- **Recommended (no code change):** in Vercel → Project → Settings → Domains, set **`servedubai.com` (non-www) as primary** and redirect `www` → non-www permanently. This aligns with the existing code.
- **Live 410 gap:** `/pnnfxpueiq.php` correctly returns **410**, but **`/?products/12345` returns 200** (CDN serves cached homepage for query-string spam) and `/cgi-bin/` returns a 308 before the 410. The query-string spam (the actual hack pattern) is still "valid" to Google — `proxy.ts` query handling needs to run before/around the CDN cache, or these need explicit handling.

- [x] Set non-www as primary domain in Vercel; cross-domain redirect made permanent — **DONE (2026-06-01)**. Verified live: `www.servedubai.com` → **308** → `servedubai.com`; non-www returns 200. Aligns with code canonical.
- [ ] (Low priority) `/?products/123` still returns 200 (CDN-cached homepage); homepage self-canonical folds it — leave unless GSC shows it indexed

**Phase 0 expected outcome:** crawl-budget bleeding stops, spam de-indexing begins, legacy equity starts flowing to new URLs. First measurable movement in 4–8 weeks.

---

# PHASE 1 — Technical / schema polish (week 1–2)

### 1.1 — NAP consistency (number confirmed = +971 55 127 5545)
The **site is the source of truth.** The old `+971 54 719 9189` on legacy listings is outdated.
- [ ] Update Google Business Profile, all Facebook pages, and any directory citations to **+971 55 127 5545**
- [ ] Consolidate the duplicate Al Haya Facebook pages into one
- [ ] Keep name + address + phone identical everywhere (exact string match)

### 1.2 — Strengthen structured data — `uae-service-hub/lib/utils/seo.ts`
- [ ] `address.streetAddress: 'Dubai'` (`seo.ts:62`) isn't a real street — use the real business address or drop `streetAddress` and keep locality/region
- [ ] Add a sitewide **`Organization` + `WebSite`** schema in `app/layout.tsx` (logo, sameAs socials) — currently none at root
- [ ] Only add `aggregateRating`/`review` schema once you have **real** Google reviews to back it (don't fabricate the "500+/5-star" claims in schema — Google can penalise unverifiable review markup)
- [ ] Validate every page type at https://search.google.com/test/rich-results

### 1.3 — Repo hygiene
- [ ] Remove `*.jpg.backup` files from `public/images/hero/` (they ship as static assets)
- [ ] Pick one format per hero image (avoid shipping both `.jpg` and `.webp` duplicates)

---

# PHASE 2 — Content: service × city combo pages (week 2–6) 🚀 biggest growth lever

Today you have services and city pages, but **no "service in area" pages** — that's where low-competition,
high-intent local searches live (e.g. *"sofa cleaning Dubai Marina"*, *"villa deep cleaning Arabian Ranches"*).

- [ ] Add route `app/services/[slug]/[city]/page.tsx` (or `[emirate]/[city]/[service]`) generating
      service × city pages via `generateStaticParams`
- [ ] Start with **3 highest-margin services × top 8 Dubai areas = 24 pages** (Marina, Downtown, JLT, Business Bay, Palm Jumeirah, Jumeirah, Arabian Ranches, Al Barsha)
- [ ] Each page: unique intro (reuse `cityContent` landmarks), service-specific FAQ, `Service` + `LocalBusiness` + `FAQPage` + `BreadcrumbList` schema, city-tracked WhatsApp CTA
- [ ] Internal-link these from both the parent service page and the city page
- [ ] Title pattern: `{Service} in {Area}, Dubai | Al Haya` · keep `<h1>` unique per page
- [ ] Expected: 10 keywords → 50–100+ as these long-tails get indexed

---

# PHASE 3 — Off-site / local (parallel, highest near-term ROI)

For a cleaning business, the **Google Maps pack often out-converts organic.**
- [ ] Claim/optimize **Google Business Profile**: all 11 services, service areas, 8AM–10PM hours, photos, +971 55 127 5545
- [ ] Kick off a **review engine** — after each job, WhatsApp the customer a direct Google review link (target 1–2/week)
- [ ] Build consistent **local citations** (Yellow Pages UAE, Yalla, Connect.ae, etc.) with identical NAP
- [ ] Clean up scattered Facebook pages → one canonical page linked from `sameAs` schema

---

# PHASE 4 — Authority & AI visibility (week 4+)

Raises both classic ranking and AI-Overview/ChatGPT mentions (your AI Visibility = 14, Mentions = 1).
- [ ] Add a `/blog` with informational, buyer-question content:
      *"How much does villa deep cleaning cost in Dubai?"*, *"How often should you steam-clean a sofa in UAE?"*,
      *"Move-out cleaning checklist for Dubai tenancy"*
- [ ] These question-format articles are what AI assistants quote — keep `llms.txt` (already good) in sync
- [ ] Earn a few local backlinks (UAE community blogs, partnerships, supplier mentions)
- [ ] Add `Article` + `FAQPage` schema to blog posts

---

## Monitoring & KPIs

| Metric | Now | 3-month target | Where |
|--------|-----|----------------|-------|
| Spam URLs indexed | ~4 lakh | sharp decline | GSC → Pages |
| Real pages indexed | ~379 | 53 + new combo pages | GSC → Pages |
| Organic keywords | 10 | 50–100+ | Semrush |
| Organic traffic | 0 | first clicks return | GSC → Performance |
| GBP calls/WhatsApp | — | tracked & rising | GBP Insights |
| AI Visibility | 14 | rising | Semrush |

**Realistic timeline:** Phase 0 in days → first crawl/de-index movement 4–8 weeks → keyword/traffic
growth from combo pages + GBP over 2–4 months. No penalty means recovery is straightforward, just not instant.

---

## Risks / watch-list
- De-indexing 4 lakh URLs is **slow by design** (Google re-crawls gradually) — don't expect overnight change after Phase 0.
- Don't add review/rating schema without real reviews — unverifiable markup can trigger a manual action.
- When adding combo pages, keep content genuinely unique per area or you risk thin/duplicate-content flags.

## Immediate next step
Pull the **GSC → Pages → "Not found (404)"** list and share it — I'll turn it into the complete 301 redirect
map for Phase 0.2. Once you approve this plan, I can implement Phase 0 (0.1–0.3) in one small, tested diff.
