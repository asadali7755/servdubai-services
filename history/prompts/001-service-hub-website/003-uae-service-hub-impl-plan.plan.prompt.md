---
id: 003
title: UAE Service Hub Implementation Plan
stage: plan
date: 2026-04-15
surface: agent
model: claude-sonnet-4-6
feature: 001-service-hub-website
branch: 001-service-hub-website
user: claudecode119@gmail.com
command: /sp.plan
labels: ["plan","uae-service-hub","next.js","ssg","framer-motion","seo","architecture"]
links:
  spec: specs/001-service-hub-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-service-hub-website/plan.md
  - specs/001-service-hub-website/research.md
  - specs/001-service-hub-website/data-model.md
  - specs/001-service-hub-website/quickstart.md
  - specs/001-service-hub-website/contracts/data-contracts.md
  - CLAUDE.md
tests:
  - none
---

## Prompt

# UAE Service Hub - Implementation Plan

Phase 1: Project Setup (Next.js + TypeScript + Tailwind + Framer Motion)
Phase 2: Data Layer (services.ts, emirates.ts, specialized-sites.ts, constants.ts)
Phase 3: Utilities (seo.ts, whatsapp.ts, animation variants)
Phase 4: Core Components (Hero, ServicesGrid, EmiratesSection, SpecializedSites,
         WhatsAppButton, Header, Footer)
Phase 5: Pages (homepage, /services/[slug], /[emirate], /[emirate]/[city])
Phase 6: Images & Assets
Phase 7: SEO & Performance
Phase 8: Testing & Deployment

[Full implementation plan with file list and timeline provided in user input]

## Response snapshot

Generated 5 planning artifacts for `001-service-hub-website`:

1. **plan.md** — Full implementation plan with Technical Context, Constitution Check (all 6
   principles PASS), Project Structure (Next.js App Router, single-app SSG), Development
   Phases table with gates.

2. **research.md** — Phase 0 decisions: SSG rendering strategy, Framer Motion-only carousel
   (no Swiper/Embla), next/image for WebP, next/font/google for Josefin Sans + Work Sans,
   CSS group-hover for desktop + React state accordion for mobile Emirates section.

3. **data-model.md** — Full entity schema: Service (11), Emirate (7), City (27+),
   SpecializedSite (4), SiteConfig. Relationships, validation rules, UI state transitions.

4. **contracts/data-contracts.md** — TypeScript interface definitions, utility function
   signatures, route export contracts, environment variable contract.

5. **quickstart.md** — Step-by-step local dev setup: npx create-next-app, deps, .env.local,
   Tailwind config, font config, folder structure, dev/build commands, Vercel deploy steps.

CLAUDE.md updated via update-agent-context.ps1 with TypeScript 5.x + Next.js 14 stack.

## Outcome

- ✅ Impact: All Phase 0 + Phase 1 planning artifacts complete; ready for /sp.tasks.
- 🧪 Tests: No automated tests at plan stage; constitution gates all PASS.
- 📁 Files: 5 new files created; CLAUDE.md updated.
- 🔁 Next prompts: /sp.tasks to generate implementation task list.
- 🧠 Reflection: SSG chosen over ISR — content is static; no incremental rebuild needed.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): Constitution Check PASS (all 6 principles)
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): Run /sp.tasks to generate granular task breakdown.
