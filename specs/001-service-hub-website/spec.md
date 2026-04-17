# Feature Specification: UAE Service Hub Website

**Feature Branch**: `001-service-hub-website`
**Created**: 2026-04-15
**Status**: Draft
**Input**: User description: "Consolidate 4 UAE cleaning/restoration sites into a Poseify-template
hub covering 11 services × 7 Emirates × 40+ cities with WhatsApp CTAs and location-based SEO."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Services and Contact via WhatsApp (Priority: P1)

A visitor lands on the homepage, scans the 11 services on the Services Grid, clicks a service
card, reads the detail page, and taps the WhatsApp CTA to initiate a conversation with a
pre-filled message naming the chosen service.

**Why this priority**: This is the primary conversion flow — the site exists to generate
WhatsApp leads. Every other story supports or extends this one.

**Independent Test**: Homepage renders all service cards; clicking any card opens `/services/[slug]`;
the WhatsApp button generates the correct `wa.me` link with pre-filled text.

**Acceptance Scenarios**:

1. **Given** the homepage is loaded, **When** a visitor views the Services Grid,
   **Then** all 11 service cards are visible with name, category badge, and thumbnail image.
2. **Given** a service card is clicked, **When** the detail page loads,
   **Then** it shows the service name in an `<h1>`, a description, and a WhatsApp CTA button.
3. **Given** a visitor taps the floating WhatsApp button on any page,
   **When** the link is followed, **Then** it opens WhatsApp with number `+971547199189` and
   a pre-filled message `"Hello, I'm interested in [Service] in [City]"`.
4. **Given** a visitor opens the site on a mobile device (< 640 px wide),
   **When** any page loads, **Then** all content is readable and touch targets are >= 44 px.

---

### User Story 2 - Explore Services by Emirate and City (Priority: P2)

A visitor wants cleaning in a specific area. They open the Emirates Section on the homepage,
hover (desktop) or tap (mobile) an Emirate card, see the city list, click a city, and land on
a city-specific page listing available services with local SEO content.

**Why this priority**: Location-based discovery is the key SEO differentiator; users from
specific Emirates expect relevant content rather than generic listings.

**Independent Test**: Each of the 7 Emirate cards is interactive; clicking through to any city
page returns a 200 response with the city name in the `<h1>` and at least one service listed.

**Acceptance Scenarios**:

1. **Given** the homepage Emirates Section is visible, **When** a desktop user hovers an
   Emirate card, **Then** a city list dropdown/overlay appears within 200 ms.
2. **Given** a mobile user taps an Emirate card, **When** the tap is registered,
   **Then** a city accordion expands showing city links.
3. **Given** a city link is clicked, **When** `/[emirate]/[city]` loads,
   **Then** the page `<h1>` contains the city name, and all services available in that city
   are listed with their WhatsApp CTAs.
4. **Given** the page `/dubai/marina` is loaded, **When** the browser parses `<head>`,
   **Then** `<title>` contains "Marina" and "Dubai" and the `<meta name="description">` mentions
   the phone number `0547199189`.

---

### User Story 3 - Discover and Visit Original Specialist Sites (Priority: P3)

A visitor recognises they need a specific, deep-specialist service. They find the Specialized
Sites section (homepage) and the links within service detail pages, and navigate to the
relevant original domain.

**Why this priority**: Client explicitly requires cross-linking to preserve domain authority
and give specialist sites referral traffic.

**Independent Test**: The four external link cards on the homepage each open the correct URL
in a new tab; same links appear in the footer and on relevant service pages.

**Acceptance Scenarios**:

1. **Given** the Specialized Sites section is visible on the homepage,
   **When** the visitor counts the cards, **Then** exactly 4 cards are present
   (Villa Deep Cleaning, Sofa Shampooing, Carpet Cleaning, Marble Polishing).
2. **Given** any of the 4 cards is clicked, **When** the browser opens the link,
   **Then** it opens in a new tab at the correct URL (e.g., `https://www.villadeepcleaning.com/`).
3. **Given** the Marble Polishing service detail page is open, **When** the page is inspected,
   **Then** a link to `https://marblepro.ae` is visible within the page content.

---

### User Story 4 - Organic Discovery via Search Engine (Priority: P4)

A potential customer searches Google for "sofa cleaning in Dubai Marina". They find a
hub page in search results, click through, and the page delivers relevant local content.

**Why this priority**: SEO is a long-term acquisition channel. The metadata, schema, and
sitemap must be correct from day one even though results take weeks to appear.

**Independent Test**: `/services/sofa-cleaning` has a unique `<title>` and `<meta description>`;
`sitemap.xml` lists at least one URL per service and one per city; schema JSON-LD validates
against Schema.org.

**Acceptance Scenarios**:

1. **Given** any service page is loaded, **When** `<head>` is inspected,
   **Then** `<title>` matches the pattern `"[Service] in [Location] | Al Haya"` and contains
   fewer than 60 characters.
2. **Given** the sitemap at `/sitemap.xml` is fetched, **When** it is parsed,
   **Then** it lists all service slugs (>= 11), all emirate slugs (>= 7), and all city slugs
   (>= 40) as valid `<loc>` entries.
3. **Given** any page's JSON-LD is extracted, **When** validated via Schema.org,
   **Then** a `LocalBusiness` type is present with `telephone` and `areaServed` properties.

---

### Edge Cases

- What happens when a user navigates to `/[emirate]/[city]` for an emirate or city that does
  not exist? Site MUST return a 404 page with a helpful message and link back to the homepage.
- What happens if an image fails to load? Layout MUST NOT shift (CLS = 0); alt text is always
  present.
- What happens on a very slow connection (2G)? Hero carousel MUST lazy-load all but the first
  slide; above-the-fold images MUST load eagerly.
- What happens when the WhatsApp link is opened on a desktop without WhatsApp installed?
  The `wa.me` URL falls back to WhatsApp Web in the browser automatically.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The homepage MUST display a Hero Carousel with auto-rotation every 5 seconds,
  pause on hover, and animated slide transitions.
- **FR-002**: The homepage MUST display a Services Grid showing all 11 services in a
  3-column (desktop) / 2-column (tablet) / 1-column (mobile) layout with hover scale effect.
- **FR-003**: The homepage MUST display an Emirates Section with 7 Emirate cards; desktop
  hover MUST reveal city list; mobile tap MUST expand an accordion.
- **FR-004**: The homepage MUST display a Specialized Sites section with exactly 4 cards
  linking to the original client domains in new tabs.
- **FR-005**: Every page MUST include a fixed floating WhatsApp button (bottom-right, pulse
  animation) linking to `+971547199189` with a pre-filled message.
- **FR-006**: The site MUST serve dynamic routes: `/services/[slug]`, `/[emirate]`,
  `/[emirate]/[city]`, `/about`, `/contact`.
- **FR-007**: Every routable page MUST have a unique `<title>`, unique `<meta description>`,
  at least one `<h1>`, and `alt` on every image.
- **FR-008**: Every page MUST include a `LocalBusiness` Schema.org JSON-LD block with
  telephone `+971547199189` and relevant `areaServed`.
- **FR-009**: A `sitemap.xml` MUST be auto-generated at build time listing all static and
  dynamic routes.
- **FR-010**: A `robots.txt` MUST be generated allowing all crawlers.
- **FR-011**: All images MUST be optimized (WebP) with lazy loading; above-the-fold images
  MUST load eagerly.
- **FR-012**: Body copy on all pages MUST be original writing — verbatim content from the
  four original client sites is prohibited.
- **FR-013**: Links to all four original sites MUST appear in the homepage Specialized Sites
  section, in relevant service detail pages, and in the footer.
- **FR-014**: The site MUST be deployable via environment variables
  (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SITE_URL`).

### Key Entities

- **Service**: One of 11 cleaning/restoration offerings. Has name, slug, category
  (domestic/commercial/specialized), original-written description, image set, list of Emirates
  it is available in, and optional link to a specialized external site.
- **Emirate**: One of 7 UAE Emirates. Has name, slug, landmark image, and a list of cities.
- **City**: A major city within an Emirate. Has name, slug, parent Emirate reference, and
  a list of available service references.
- **SpecializedSite**: One of 4 original client domains. Has display name, URL, and associated
  service reference.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All 11 services are navigable from the homepage and have individual detail pages
  reachable without errors.
- **SC-002**: All 7 Emirates and all 40+ cities are navigable and return content-filled pages.
- **SC-003**: The site achieves a Lighthouse Performance score >= 90 on both mobile and desktop.
- **SC-004**: Every page loads fully in under 2 seconds on a standard UAE 4G connection.
- **SC-005**: The WhatsApp CTA is present and functional on every page, generating a correctly
  formatted link.
- **SC-006**: All four original client site links are present on the homepage and open the
  correct domains in a new tab.
- **SC-007**: `sitemap.xml` contains >= 58 URLs (11 services + 7 Emirates + 40 cities +
  static pages).
- **SC-008**: All pages pass accessibility checks with zero critical contrast or alt-text
  violations.
- **SC-009**: The Emirates Section interactions work without errors on Chrome, Safari, and
  Firefox on both desktop and mobile.
- **SC-010**: No verbatim content from the four original client sites appears anywhere on
  the hub.

## Assumptions

- Service descriptions will be original rewrites derived from the provided Word doc
  (`Conents__1_.docx`); no content is copied verbatim.
- Images sourced from stock libraries (Unsplash/Pexels) and optimized before commit.
- Final production domain is TBD; `NEXT_PUBLIC_SITE_URL` updated at deploy time.
- Arabic language support is out of scope for v1.
- No user authentication or database required — site is fully static/SSG.
- Google Analytics 4 will be wired up but is non-blocking for launch.
