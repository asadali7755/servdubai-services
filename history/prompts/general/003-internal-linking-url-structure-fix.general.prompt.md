---
id: "003"
title: "Internal Linking URL Structure Fix"
stage: general
date: "2026-05-25"
surface: agent
model: claude-sonnet-4-6
feature: none
branch: 001-service-hub-website
user: asadali22
command: "Task 1 - URL Structure & Dynamic Routing / Internal Linking"
labels: ["seo", "internal-linking", "routing", "dynamic-pages", "orphan-pages"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_modified:
  - uae-service-hub/lib/data/emirates.ts
  - uae-service-hub/app/[emirate]/[city]/page.tsx
tests: []
---

## Prompt (verbatim)

hamay bht hi zarori kam krna he apne project pe jo ye he 1. 📂 URL Structure aur Dynamic Routing Check (Internal Linking)
Aapne jo dynamic routing set ki hai, usme sabse badi kami Internal Parent-to-Child Navigation ki hoti hai.

Kya kami hai: Google bot jab servedubai.com/dubai par aata hai, toh usko wahan se automatic tarike se dynamic internal links milne chahiye jo use servedubai.com/dubai/dubai-marina ya /jlt par le jayein. Agar main city page se sub-cities ke links proper embedded nahi honge, toh Google unhe "Orphan Pages" samajh kar crawl karna chhod dega.
[...4 tasks total, starting with Task 1...]

## Response

### Task 1 Completed: URL Structure & Internal Linking

**Changes Made:**

#### 1. `emirates.ts` — Dubai cities expanded
- Added JLT (Jumeirah Lakes Towers) — was missing, specifically requested
- Added Palm Jumeirah — major high-traffic area
- Added Al Barsha — large residential community
- Added Bur Dubai — historic downtown area
- Renamed `marina` → `Dubai Marina` for clarity
- Renamed `downtown` → `Downtown Dubai` for clarity
- Dubai now has 11 cities (was 7)

#### 2. `[emirate]/[city]/page.tsx` — "Other Areas We Serve" widget added
- Added `siblingCities` variable (filters out current city from emirate.cities)
- Added new section "Other Areas We Serve in [Emirate]" before bottom CTA
- Each sibling city renders as a gold pill link → `/{emirate}/{city}`
- Section only renders if there are sibling cities (`siblingCities.length > 0`)
- Added SITE_CONFIG import for consistent phone number display
- Fixed phone number in hero text from hardcoded to `SITE_CONFIG.phone`

**SEO Impact:**
- Eliminates orphan page problem — Google bot can now crawl all city pages from any city page
- Creates proper internal link graph: Emirate ↔ Cities ↔ Cross-city navigation
- TypeScript: no errors (tsc --noEmit passed clean)
