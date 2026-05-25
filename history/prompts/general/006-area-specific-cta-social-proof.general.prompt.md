---
id: "006"
title: "Area-Specific CTA and Social Proof"
stage: general
date: "2026-05-25"
surface: agent
model: claude-sonnet-4-6
feature: none
branch: 001-service-hub-website
user: asadali22
command: "Task 4 - Area-Specific CTA and Social Proof"
labels: ["seo", "cta", "social-proof", "whatsapp-tracking", "conversion", "mobile"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_modified:
  - uae-service-hub/lib/utils/whatsapp.ts
  - uae-service-hub/app/[emirate]/[city]/page.tsx
tests: []
---

## Prompt (verbatim)

ab task 4 karo

## Response

### Task 4 Completed: Area-Specific CTA and Social Proof

**Updated: `lib/utils/whatsapp.ts`**

Changed all 4 message cases to area-specific tracking messages:
- service + city: "Hi Al Haya, I want to book [service] in [city]. Please share pricing and available time slots."
- service only:   "Hi Al Haya, I want to book [service]. Please share your pricing and available slots."
- city only:      "Hi Al Haya, I want to book a cleaning service in [city]. Please share your services and pricing."
- none:           "Hi Al Haya, I need cleaning services. Please contact me with details and pricing."

WHY: City name now appears in every WhatsApp message so the business owner can see which area each lead comes from without asking. This is the tracking mechanism described in the brief.

**Updated: `app/[emirate]/[city]/page.tsx`**

Added 3 new elements:

1. **Social Proof Section** (new section between FAQ and Other Areas):
   - Stats row: 500+ UAE Clients | Same-Day Service | 100% Guarantee | 5-Star Rated
   - Context-aware trust bullets (4 bullets) — dynamically chosen based on propertyType:
     - isWaterfront+isVilla → luxury villa/coastal bullets
     - isHighRise → tower/apartment specific bullets
     - isVilla → villa cleaning bullets
     - isCommercial → office/commercial bullets
     - default → generic quality bullets
   - Area-specific WhatsApp CTA: "Book in [City] — Free Quote"
   - Phone number link

2. **Enhanced Bottom CTA**:
   - Pre-filled message preview: shows `"Hi Al Haya, I want to book a cleaning service in [city]..."`
   - Better visual hierarchy with decorative elements
   - "Book a Cleaning in [City] Today" (city-named heading)

3. **Sticky Mobile CTA Bar** (NEW):
   - Only visible on mobile (≤640px) — hidden on desktop
   - Fixed to bottom of screen
   - Two buttons: "Book in [City]" (WhatsApp) + "Call Now" (tel link)
   - Area-specific WhatsApp message for tracking
   - Respects safe-area-inset-bottom for modern phones

TypeScript: clean (tsc --noEmit passed with 0 errors)
