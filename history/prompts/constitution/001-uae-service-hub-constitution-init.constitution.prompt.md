---
id: 001
title: UAE Service Hub Constitution Init
stage: constitution
date: 2026-04-15
surface: agent
model: claude-sonnet-4-6
feature: none
branch: master
user: claudecode119@gmail.com
command: /sp.constitution
labels: ["constitution","setup","uae-service-hub","next.js","seo","mobile-first"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - history/prompts/constitution/001-uae-service-hub-constitution-init.constitution.prompt.md
tests:
  - none
---

## Prompt

# UAE Service Hub Website - Claude CLI Constitution

## Project Identity
**Name:** UAE Service Hub
**Type:** Multi-service cleaning & restoration website
**Tech:** Next.js 14 + TypeScript + Tailwind + Framer Motion
**Design:** Poseify template replica with service content

## Core Purpose
Central hub showcasing 4 existing service websites across 7 UAE Emirates with location-based navigation and SEO optimization.

## Existing Client Websites to Consolidate
1. villadeepcleaning.com
2. sofashampooingdubai.com
3. carpetcleaningdubai.com
4. marblepro.ae

## Services (11 Total)
### Domestic
- Sofa Deep Cleaning & Shampooing
- Carpet Cleaning & Shampooing
- Mattress Deep Cleaning
- Curtain Cleaning
- Car Interior Detailing
- Dining Chair Cleaning

### Commercial
- Villa Deep Cleaning
- Apartment Cleaning
- Office Cleaning
- Restaurant & Kitchen Cleaning

### Specialized
- Marble Polishing & Restoration

## Geographic Structure
7 Emirates with major cities (Dubai, Sharjah, Abu Dhabi, Ajman, RAK, Fujairah, UAQ)

## Design Requirements (Poseify Template)
Dark background (#151515), Josefin Sans headings, Work Sans body, gold accent.
5 homepage sections: Hero Carousel, Services Grid, Emirates Section, Specialized Sites, Footer Carousel.

## Key Features
WhatsApp Integration (0547199189), links to original sites, responsive design, SEO, image optimization.

## Technical Requirements
Lighthouse 90+, FCP < 1.5s, LCP < 2.5s, CLS < 0.1. Schema.org markup, sitemap.xml, robots.txt.

## Critical Rules
Design Replication, No Duplicate Content, Mobile-First, Fast Loading, WhatsApp Everywhere,
Link to Originals, Location Keywords.

## Response snapshot

Created `.specify/memory/constitution.md` at version 1.0.0 with:
- 6 core principles: Design Fidelity, Mobile-First Responsiveness, Performance Budget,
  SEO & Location Specificity, WhatsApp-Everywhere CTA, Content Integrity & Original-Site Linkage
- Technology Stack table (Next.js 14 / TypeScript / Tailwind / Framer Motion / Vercel)
- Development Phases table (7 phases with gate criteria)
- Governance section with amendment procedure and compliance review rules
- Sync Impact Report embedded as HTML comment
- All template placeholders resolved; two TODOs documented (RATIFICATION_DATE confirmation,
  DOMAIN pending from client)

## Outcome

- ✅ Impact: Project constitution fully initialized; all 6 principles are declarative and testable.
- 🧪 Tests: No automated tests for constitution; compliance checked via PR Constitution Check gate.
- 📁 Files: .specify/memory/constitution.md written (1.0.0); PHR created at history/prompts/constitution/001.
- 🔁 Next prompts: /sp.specify <feature-name> to begin first feature spec; provide domain name to resolve TODO(DOMAIN).
- 🧠 Reflection: Constitution successfully migrated from blank template to full project rules in one pass.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): n/a (initial constitution creation)
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): Run /sp.specify for homepage feature to validate constitution gates work end-to-end.
