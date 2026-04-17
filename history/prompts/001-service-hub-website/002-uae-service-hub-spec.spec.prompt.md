---
id: 002
title: UAE Service Hub Website Spec
stage: spec
date: 2026-04-15
surface: agent
model: claude-sonnet-4-6
feature: 001-service-hub-website
branch: 001-service-hub-website
user: claudecode119@gmail.com
command: /sp.specify
labels: ["spec","uae-service-hub","next.js","whatsapp","seo","emirates"]
links:
  spec: specs/001-service-hub-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-service-hub-website/spec.md
  - specs/001-service-hub-website/checklists/requirements.md
  - history/prompts/001-service-hub-website/002-uae-service-hub-spec.spec.prompt.md
tests:
  - none
---

## Prompt

# UAE Service Hub - Specification

## Part 1: Design Analysis
Poseify template uses: Hero carousel (auto-rotate), card grids with hover effects, models section
with overlay (adapt to Emirates), footer carousel. Colors: dark bg (#151515), gold accent.
Simple Bootstrap animations → replicate with Framer Motion.

## Part 2: Requirements
Consolidate 4 sites (villadeepcleaning.com, sofashampooingdubai.com, carpetcleaningdubai.com,
marblepro.ae) into hub. 11 services × 7 emirates × 40+ cities. Links to original sites maintained.
WhatsApp: 0547199189. SEO optimized for UAE.

## Part 3: Implementation Plan
Phase 1: Data files (services, emirates, cities)
Phase 2: Components (Hero, ServicesGrid, EmiratesSection, WhatsAppButton)
Phase 3: Pages (homepage, /services/[slug], /[emirate]/[city])
Phase 4: SEO (metadata, schema, sitemap)

[...full specification as provided in user input...]

---
Generate task breakdown.

## Response snapshot

Created `specs/001-service-hub-website/spec.md` with:
- Branch: `001-service-hub-website` (number 001, short-name service-hub-website)
- 4 prioritized user stories: WhatsApp lead conversion (P1), Emirates/City discovery (P2),
  Specialist site cross-linking (P3), SEO organic discovery (P4)
- 14 Functional Requirements (FR-001 through FR-014)
- 4 Key Entities: Service, Emirate, City, SpecializedSite
- 10 measurable Success Criteria (SC-001 through SC-010)
- Edge cases, assumptions section
- Quality checklist at `specs/001-service-hub-website/checklists/requirements.md` — all items PASS

## Outcome

- ✅ Impact: Full spec written with 0 NEEDS CLARIFICATION markers; ready for /sp.plan.
- 🧪 Tests: No automated tests; checklist validation passed (all 12 items checked).
- 📁 Files: spec.md + checklists/requirements.md created; branch 001-service-hub-website active.
- 🔁 Next prompts: /sp.plan to generate architecture and implementation plan.
- 🧠 Reflection: Spec is business-language only; all implementation detail deferred to plan phase.

## Evaluation notes (flywheel)

- Failure modes observed: PowerShell script required positional arg order — passed correctly on 2nd attempt.
- Graders run and results (PASS/FAIL): checklist PASS (all 12 items)
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): Run /sp.plan to generate architecture decisions.
