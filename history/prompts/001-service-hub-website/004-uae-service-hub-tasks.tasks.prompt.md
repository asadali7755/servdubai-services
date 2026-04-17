---
id: 004
title: UAE Service Hub Task Breakdown
stage: tasks
date: 2026-04-15
surface: agent
model: claude-sonnet-4-6
feature: 001-service-hub-website
branch: 001-service-hub-website
user: claudecode119@gmail.com
command: /sp.tasks
labels: ["tasks","uae-service-hub","next.js","ssg","breakdown","implementation"]
links:
  spec: specs/001-service-hub-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-service-hub-website/tasks.md
  - history/prompts/001-service-hub-website/004-uae-service-hub-tasks.tasks.prompt.md
tests:
  - none
---

## Prompt

/sp.tasks (no additional arguments — generate from existing spec, plan, data-model, contracts)

## Response snapshot

Generated `specs/001-service-hub-website/tasks.md` with:
- **56 total tasks** across 7 phases
- Phase 1 Setup: 7 tasks (Next.js init, deps, Tailwind, env, folder structure, next.config, fonts)
- Phase 2 Foundational: 8 tasks (constants, animations, whatsapp util, services data, emirates data, specialized-sites data, seo util, WhatsAppButton component) — BLOCKS all user stories
- Phase 3 US1 (P1 MVP): 7 tasks (Hero, ServicesGrid, layout, homepage, service detail page, placeholder images)
- Phase 4 US2 (P2): 6 tasks (EmiratesSection, emirate page, city page, 404 page, emirate images)
- Phase 5 US3 (P3): 7 tasks (SpecializedSites, homepage update, service page update, Header, Footer, layout update, logos)
- Phase 6 US4 (P4): 9 tasks (6 parallel generateMetadata + JSON-LD + sitemap.ts + robots.ts)
- Phase 7 Polish: 12 tasks (about, contact, real images x3, next/image audit, build, Lighthouse, verify links, deploy, smoke test)

Key parallel opportunities: T016+T017 (Hero+ServicesGrid), T036–T042 (all SEO tasks), T047–T049 (image batches).
MVP scope: Phase 1 + 2 + 3 only (22 tasks).

## Outcome

- ✅ Impact: Complete, immediately-executable task list; each task names exact file path.
- 🧪 Tests: No test tasks (not requested); validation gates provided at each checkpoint.
- 📁 Files: tasks.md created at specs/001-service-hub-website/tasks.md.
- 🔁 Next prompts: /sp.implement to begin executing tasks starting from T001.
- 🧠 Reflection: US4 SEO tasks are all parallel (T036–T042) — high leverage for a single dev session.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): format validation PASS (all tasks have checkbox + ID + description + file path)
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): Run /sp.implement to execute Phase 1 + 2 setup tasks.
