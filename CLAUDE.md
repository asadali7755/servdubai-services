# Claude Code Rules

This file is generated during init for the selected agent.

You are an expert AI assistant specializing in Spec-Driven Development (SDD). Your primary goal is to work with the architext to build products.

## Task context

**Your Surface:** You operate on a project level, providing guidance to users and executing development tasks via a defined set of tools.

**Your Success is Measured By:**
- All outputs strictly follow the user intent.
- Prompt History Records (PHRs) are created automatically and accurately for every user prompt.
- Architectural Decision Record (ADR) suggestions are made intelligently for significant decisions.
- All changes are small, testable, and reference code precisely.

## Core Guarantees (Product Promise)

- Record every user input verbatim in a Prompt History Record (PHR) after every user message. Do not truncate; preserve full multiline input.
- PHR routing (all under `history/prompts/`):
  - Constitution → `history/prompts/constitution/`
  - Feature-specific → `history/prompts/<feature-name>/`
  - General → `history/prompts/general/`
- ADR suggestions: when an architecturally significant decision is detected, suggest: "📋 Architectural decision detected: <brief>. Document? Run `/sp.adr <title>`." Never auto‑create ADRs; require user consent.

## Development Guidelines

### 1. Authoritative Source Mandate:
Agents MUST prioritize and use MCP tools and CLI commands for all information gathering and task execution. NEVER assume a solution from internal knowledge; all methods require external verification.

### 2. Execution Flow:
Treat MCP servers as first-class tools for discovery, verification, execution, and state capture. PREFER CLI interactions (running commands and capturing outputs) over manual file creation or reliance on internal knowledge.

### 3. Knowledge capture (PHR) for Every User Input.
After completing requests, you **MUST** create a PHR (Prompt History Record).

**When to create PHRs:**
- Implementation work (code changes, new features)
- Planning/architecture discussions
- Debugging sessions
- Spec/task/plan creation
- Multi-step workflows

**PHR Creation Process:**

1) Detect stage
   - One of: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate title
   - 3–7 words; create a slug for the filename.

2a) Resolve route (all under history/prompts/)
  - `constitution` → `history/prompts/constitution/`
  - Feature stages (spec, plan, tasks, red, green, refactor, explainer, misc) → `history/prompts/<feature-name>/` (requires feature context)
  - `general` → `history/prompts/general/`

3) Prefer agent‑native flow (no shell)
   - Read the PHR template from one of:
     - `.specify/templates/phr-template.prompt.md`
     - `templates/phr-template.prompt.md`
   - Allocate an ID (increment; on collision, increment again).
   - Compute output path based on stage:
     - Constitution → `history/prompts/constitution/<ID>-<slug>.constitution.prompt.md`
     - Feature → `history/prompts/<feature-name>/<ID>-<slug>.<stage>.prompt.md`
     - General → `history/prompts/general/<ID>-<slug>.general.prompt.md`
   - Fill ALL placeholders in YAML and body:
     - ID, TITLE, STAGE, DATE_ISO (YYYY‑MM‑DD), SURFACE="agent"
     - MODEL (best known), FEATURE (or "none"), BRANCH, USER
     - COMMAND (current command), LABELS (["topic1","topic2",...])
     - LINKS: SPEC/TICKET/ADR/PR (URLs or "null")
     - FILES_YAML: list created/modified files (one per line, " - ")
     - TESTS_YAML: list tests run/added (one per line, " - ")
     - PROMPT_TEXT: full user input (verbatim, not truncated)
     - RESPONSE_TEXT: key assistant output (concise but representative)
     - Any OUTCOME/EVALUATION fields required by the template
   - Write the completed file with agent file tools (WriteFile/Edit).
   - Confirm absolute path in output.

4) Use sp.phr command file if present
   - If `.**/commands/sp.phr.*` exists, follow its structure.
   - If it references shell but Shell is unavailable, still perform step 3 with agent‑native tools.

5) Shell fallback (only if step 3 is unavailable or fails, and Shell is permitted)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Then open/patch the created file to ensure all placeholders are filled and prompt/response are embedded.

6) Routing (automatic, all under history/prompts/)
   - Constitution → `history/prompts/constitution/`
   - Feature stages → `history/prompts/<feature-name>/` (auto-detected from branch or explicit feature context)
   - General → `history/prompts/general/`

7) Post‑creation validations (must pass)
   - No unresolved placeholders (e.g., `{{THIS}}`, `[THAT]`).
   - Title, stage, and dates match front‑matter.
   - PROMPT_TEXT is complete (not truncated).
   - File exists at the expected path and is readable.
   - Path matches route.

8) Report
   - Print: ID, path, stage, title.
   - On any failure: warn but do not block the main command.
   - Skip PHR only for `/sp.phr` itself.

### 4. Explicit ADR suggestions
- When significant architectural decisions are made (typically during `/sp.plan` and sometimes `/sp.tasks`), run the three‑part test and suggest documenting with:
  "📋 Architectural decision detected: <brief> — Document reasoning and tradeoffs? Run `/sp.adr <decision-title>`"
- Wait for user consent; never auto‑create the ADR.

### 5. Human as Tool Strategy
You are not expected to solve every problem autonomously. You MUST invoke the user for input when you encounter situations that require human judgment. Treat the user as a specialized tool for clarification and decision-making.

**Invocation Triggers:**
1.  **Ambiguous Requirements:** When user intent is unclear, ask 2-3 targeted clarifying questions before proceeding.
2.  **Unforeseen Dependencies:** When discovering dependencies not mentioned in the spec, surface them and ask for prioritization.
3.  **Architectural Uncertainty:** When multiple valid approaches exist with significant tradeoffs, present options and get user's preference.
4.  **Completion Checkpoint:** After completing major milestones, summarize what was done and confirm next steps. 

## Default policies (must follow)
- Clarify and plan first - keep business understanding separate from technical plan and carefully architect and implement.
- Do not invent APIs, data, or contracts; ask targeted clarifiers if missing.
- Never hardcode secrets or tokens; use `.env` and docs.
- Prefer the smallest viable diff; do not refactor unrelated code.
- Cite existing code with code references (start:end:path); propose new code in fenced blocks.
- Keep reasoning private; output only decisions, artifacts, and justifications.

### Execution contract for every request
1) Confirm surface and success criteria (one sentence).
2) List constraints, invariants, non‑goals.
3) Produce the artifact with acceptance checks inlined (checkboxes or tests where applicable).
4) Add follow‑ups and risks (max 3 bullets).
5) Create PHR in appropriate subdirectory under `history/prompts/` (constitution, feature-name, or general).
6) If plan/tasks identified decisions that meet significance, surface ADR suggestion text as described above.

### Minimum acceptance criteria
- Clear, testable acceptance criteria included
- Explicit error paths and constraints stated
- Smallest viable change; no unrelated edits
- Code references to modified/inspected files where relevant

## Architect Guidelines (for planning)

Instructions: As an expert architect, generate a detailed architectural plan for [Project Name]. Address each of the following thoroughly.

1. Scope and Dependencies:
   - In Scope: boundaries and key features.
   - Out of Scope: explicitly excluded items.
   - External Dependencies: systems/services/teams and ownership.

2. Key Decisions and Rationale:
   - Options Considered, Trade-offs, Rationale.
   - Principles: measurable, reversible where possible, smallest viable change.

3. Interfaces and API Contracts:
   - Public APIs: Inputs, Outputs, Errors.
   - Versioning Strategy.
   - Idempotency, Timeouts, Retries.
   - Error Taxonomy with status codes.

4. Non-Functional Requirements (NFRs) and Budgets:
   - Performance: p95 latency, throughput, resource caps.
   - Reliability: SLOs, error budgets, degradation strategy.
   - Security: AuthN/AuthZ, data handling, secrets, auditing.
   - Cost: unit economics.

5. Data Management and Migration:
   - Source of Truth, Schema Evolution, Migration and Rollback, Data Retention.

6. Operational Readiness:
   - Observability: logs, metrics, traces.
   - Alerting: thresholds and on-call owners.
   - Runbooks for common tasks.
   - Deployment and Rollback strategies.
   - Feature Flags and compatibility.

7. Risk Analysis and Mitigation:
   - Top 3 Risks, blast radius, kill switches/guardrails.

8. Evaluation and Validation:
   - Definition of Done (tests, scans).
   - Output Validation for format/requirements/safety.

9. Architectural Decision Record (ADR):
   - For each significant decision, create an ADR and link it.

### Architecture Decision Records (ADR) - Intelligent Suggestion

After design/architecture work, test for ADR significance:

- Impact: long-term consequences? (e.g., framework, data model, API, security, platform)
- Alternatives: multiple viable options considered?
- Scope: cross‑cutting and influences system design?

If ALL true, suggest:
📋 Architectural decision detected: [brief-description]
   Document reasoning and tradeoffs? Run `/sp.adr [decision-title]`

Wait for consent; never auto-create ADRs. Group related decisions (stacks, authentication, deployment) into one ADR when appropriate.

## Basic Project Structure

- `.specify/memory/constitution.md` — Project principles
- `specs/<feature>/spec.md` — Feature requirements
- `specs/<feature>/plan.md` — Architecture decisions
- `specs/<feature>/tasks.md` — Testable tasks with cases
- `history/prompts/` — Prompt History Records
- `history/adr/` — Architecture Decision Records
- `.specify/` — SpecKit Plus templates and scripts

## Code Standards
See `.specify/memory/constitution.md` for code quality, testing, performance, security, and architecture principles.

---

# ACTIVE PROJECT: Al Haya Cleaning Services (servedubai.com)

## Project Details
- **Website:** https://servedubai.com
- **Business:** Al Haya Cleaning Services - Professional cleaning across UAE
- **Contact:** +971-54-719-9189
- **Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Theme:** Dual theme system (Dark Gold Luxury / Light Gold Luxury) via localStorage
- **Deployment:** Vercel

## Site Structure
### Pages (Total: ~17 pages)
1. Homepage (/)
2. **8 Service Pages:**
   - Deep Cleaning (/deep-cleaning)
   - Sofa Cleaning (/sofa-cleaning)
   - Carpet Cleaning (/carpet-cleaning)
   - Marble Polishing (/marble-polishing)
   - Kitchen Cleaning (/kitchen-cleaning)
   - Bathroom Cleaning (/bathroom-cleaning)
   - Villa Cleaning (/villa-cleaning)
   - Office Cleaning (/office-cleaning)

3. **7 Emirates Location Pages:**
   - Dubai (/dubai)
   - Abu Dhabi (/abu-dhabi)
   - Sharjah (/sharjah)
   - Ajman (/ajman)
   - Ras Al Khaimah (/ras-al-khaimah)
   - Umm Al Quwain (/umm-al-quwain)
   - Fujairah (/fujairah)

4. About (/about)
5. Contact (/contact)

## Components Architecture
- Header.tsx (navigation, theme toggle)
- Footer.tsx (links, contact info, social media)
- WhatsAppCTA.tsx (floating WhatsApp button)
- ServiceCard.tsx (service display cards)
- LocationCard.tsx (Emirates location cards)
- ThemeToggle.tsx (Dark/Light Gold theme switcher)

---

# CURRENT TASK: Semrush SEO Technical Audit Fixes

## Audit Summary (May 7, 2026)
- **Site Health Score:** 87% (Target: 95%+)
- **Total Errors:** 49
- **Total Warnings:** 291
- **Pages Crawled:** 55/100
- **AI Search Health:** 85%

## Critical Issues to Fix

### 1. Invalid Structured Data (ERROR - 46 pages affected)
**Problem:** Schema.org markup failing Google's Rich Results Test

**Root Causes:**
- Missing required LocalBusiness schema fields
- No Service schema on service pages
- Missing BreadcrumbList navigation schema
- No FAQPage schema for FAQ sections
- Invalid date/URL formats in existing schemas

**Required Schemas:**

#### LocalBusiness Schema (All pages)
```typescript
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Al Haya Cleaning Services",
  "image": "https://servedubai.com/images/logo.png",
  "url": "https://servedubai.com",
  "telephone": "+971-54-719-9189",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2048,
    "longitude": 55.2708
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00",
    "closes": "22:00"
  }
}
```

#### Service Schema (Service pages)
```typescript
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Deep Cleaning Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Al Haya Cleaning Services"
  },
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  }
}
```

**Implementation:**
- Create `/components/Schema/` folder
- LocalBusiness.tsx component
- Service.tsx component
- Breadcrumb.tsx component
- FAQ.tsx component
- Import in each page's metadata

**Validation:**
Test each page at: https://search.google.com/test/rich-results

---

### 2. Broken External Links (ERROR - 241 instances)
**Problem:** Multiple broken external links across site

**Critical Fix:**
WhatsApp link using WRONG number throughout site:
- ❌ Current: `https://wa.me/971551275545`
- ✅ Correct: `https://wa.me/97154719189`

**Files to Fix:**
1. `components/WhatsAppCTA.tsx` - Floating button
2. `components/Footer.tsx` - Footer contact
3. `components/Header.tsx` - Header CTA
4. All service page CTAs
5. Contact page WhatsApp button

**Fix Pattern:**
```typescript
// Find and replace ALL instances:
const whatsappNumber = "971551275545"; // OLD - WRONG
const whatsappNumber = "97154719189";  // NEW - CORRECT

// Full URL format:
https://wa.me/97154719189?text=Hello, I need cleaning services in Dubai
```

**Additional Link Checks:**
- Verify all social media links (Facebook, Instagram)
- Check footer external links
- Validate any third-party service links

---

### 3. Low Text/HTML Ratio (WARNING - 49 pages affected)
**Problem:** Content-to-code ratio too low
- Current ratio: 0.03
- Target ratio: 0.15+
- Means: Need 800-1200 words per page

**Content Structure Required for Each Service Page:**

```markdown
## Service Page Content Template (800-1200 words)

### 1. Hero Section (100-150 words)
- Service introduction
- Key benefits bullet points
- Primary CTA

### 2. Why Choose Us (200-250 words)
- Unique selling points
- Professional certifications
- Years of experience
- Customer satisfaction stats

### 3. Our Process (300-400 words)
- Step 1: Initial assessment
- Step 2: Preparation
- Step 3: Deep cleaning process
- Step 4: Quality inspection
- Step 5: Customer walkthrough
- Equipment and products used
- Quality standards followed

### 4. Service Coverage (150-200 words)
- All Emirates coverage
- Response time commitments
- Same-day availability
- Emergency services

### 5. Pricing & Packages (100-150 words)
- Transparent pricing approach
- Package options (Basic, Standard, Premium)
- Special offers
- No hidden charges

### 6. FAQ Section (200-300 words)
5-10 frequently asked questions:
- How long does the service take?
- What products do you use?
- Do I need to be present?
- What's included in the package?
- How do I book?
- Payment methods accepted?
- Cancellation policy?
- Guarantee/warranty details?

### 7. Final CTA (50-100 words)
- Strong call to action
- Contact information
- Booking options
- Limited-time offers
```

**SEO Keywords to Include (naturally):**

**Deep Cleaning:**
- deep cleaning Dubai
- professional house cleaning UAE
- move-in cleaning services
- villa deep cleaning

**Sofa Cleaning:**
- sofa cleaning Dubai
- couch cleaning service
- upholstery cleaning UAE
- leather sofa cleaning

**Carpet Cleaning:**
- carpet cleaning Dubai
- rug cleaning services
- steam carpet cleaning
- professional carpet cleaners

**Marble Polishing:**
- marble polishing Dubai
- floor polishing services
- marble restoration UAE
- stone polishing

(Similar for other 4 services)

---

### 4. Missing llms.txt File (WARNING - Site-wide)
**Problem:** No AI search optimization file present

**Solution:** Create `/public/llms.txt`

**Content:**
```text
# Al Haya Cleaning Services
# Professional Cleaning Services in Dubai and Across UAE

> Website: https://servedubai.com
> Business Name: Al Haya Cleaning Services
> Contact: +971-54-719-9189
> Email: info@servedubai.com

## Services Offered
- Deep Cleaning Services
- Sofa & Upholstery Cleaning
- Carpet & Rug Cleaning
- Marble & Floor Polishing
- Kitchen Deep Cleaning
- Bathroom Deep Cleaning
- Villa & Apartment Cleaning
- Office Cleaning

## Coverage Areas
- Dubai (All areas including Downtown, Marina, JBR, Palm Jumeirah)
- Abu Dhabi
- Sharjah
- Ajman
- Ras Al Khaimah (RAK)
- Umm Al Quwain (UAQ)
- Fujairah

## Business Hours
Monday - Sunday: 8:00 AM - 10:00 PM
Available for same-day and emergency services

## Key Features
- Professional trained and certified staff
- Eco-friendly cleaning products
- Modern equipment and techniques
- Same-day service available
- 100% satisfaction guarantee
- Affordable and transparent pricing
- Licensed and insured company
- 5+ years of experience in UAE

## Booking Information
Phone/WhatsApp: +971-54-719-9189
Website: https://servedubai.com/contact
Email: info@servedubai.com

## Service Highlights
Al Haya Cleaning Services follows international cleaning standards with state-of-the-art equipment and trained professionals. We serve residential and commercial clients across all seven Emirates of UAE with a commitment to excellence and customer satisfaction.

## Popular Services
1. Villa Deep Cleaning - Comprehensive cleaning for entire villas
2. Sofa Steam Cleaning - Professional upholstery care
3. Marble Floor Polishing - Restore shine to marble surfaces
4. Move-in/Move-out Cleaning - Complete property cleaning
5. Office Sanitization - Commercial space cleaning

## Why Choose Us
✓ Same-day service available
✓ Transparent pricing with no hidden charges
✓ 100% satisfaction guarantee
✓ Eco-friendly products safe for kids and pets
✓ Insured and background-checked staff
✓ Free quotes and consultations
```

---

### 5. Duplicate Title Tags (ERROR - 2 pages)
**Problem:** 2 pages sharing the same title tag

**Solution:** Unique title for every page

**Title Format:**

**Service Pages:**

claude-code "Optimize Hero Section with 5 images for complete SEO in servedubai.com project:

PROJECT CONTEXT:
- Hero section has 5 carousel/slider images
- Images location: /public/images/
- Component location: Find Hero section in app/page.tsx or components/Hero.tsx
- First slide must use h1 tag, rest use h2 tags
- Mix of .jpg and .webp formats

TASK 1: ADD IMAGE FILE METADATA
Add EXIF/IPTC metadata to these 5 hero images using Python PIL/piexif library. Create backup before modifying:

IMAGE 1: cleaning-services-UAE.jpg
Title: Cleaning Services UAE
Subject: Cleaning Services UAE - Professional cleaning across all Emirates
Rating: 5
Tags: cleaning services UAE, professional cleaning UAE, Al Haya Cleaning, Dubai cleaning services, Abu Dhabi cleaning, deep cleaning services UAE, cleaning services, UAE
Comments: Cleaning Services UAE by Al Haya - Professional cleaning solutions across all seven Emirates of UAE including Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, and Fujairah. Expert cleaning services with eco-friendly products and trained professionals.

IMAGE 2: marble-polishing-dubai.jpg
Title: Marble Polishing Dubai
Subject: Marble Polishing Dubai - Professional marble and floor polishing services
Rating: 5
Tags: marble polishing Dubai, floor polishing Dubai, marble restoration Dubai, stone polishing UAE, Al Haya polishing services, professional marble polishing, Dubai marble polishing
Comments: Marble Polishing Dubai services by Al Haya - Expert marble and natural stone floor polishing in Dubai. Al Haya restores shine and beauty to marble polishing surfaces using diamond polishing pads and advanced marble polishing techniques.

IMAGE 3: professional-cleaning-services-UAE.jpg
Title: Professional Cleaning Services UAE
Subject: Professional Cleaning Services UAE - Comprehensive cleaning for homes and offices
Rating: 5
Tags: professional cleaning services UAE, professional cleaning, cleaning services, Al Haya Cleaning, villa cleaning UAE, office cleaning UAE, residential cleaning, commercial cleaning UAE
Comments: Professional Cleaning Services UAE by Al Haya - Comprehensive professional cleaning solutions for villas, apartments, and offices across UAE. Al Haya offers deep professional cleaning, sanitization, and maintenance with trained staff.

IMAGE 4: sofa-carpet-cleaning.webp
Title: Sofa Carpet Cleaning
Subject: Sofa Carpet Cleaning - Professional upholstery and carpet deep cleaning services
Rating: 5
Tags: sofa carpet cleaning, sofa cleaning UAE, carpet cleaning Dubai, upholstery cleaning, Al Haya cleaning, professional sofa carpet cleaning, Dubai carpet cleaning
Comments: Sofa Carpet Cleaning by Al Haya - Professional sofa and carpet deep cleaning services across UAE. Our expert sofa carpet cleaning technicians use eco-friendly steam cleaning equipment to remove stains, odors, and allergens from all fabric types.

IMAGE 5: villa-apartment-cleaning-services.jpg
Title: Villa Apartment Cleaning Services
Subject: Villa Apartment Cleaning Services - Professional residential cleaning solutions
Rating: 5
Tags: villa apartment cleaning services, villa cleaning UAE, apartment cleaning Dubai, residential cleaning, Al Haya cleaning, professional villa cleaning, villa apartment cleaning
Comments: Villa Apartment Cleaning Services by Al Haya - Professional cleaning solutions for villas and apartments across UAE. Our villa apartment cleaning services include deep cleaning, sanitization, and maintenance for all residential properties.

TASK 2: UPDATE NEXT.JS HERO COMPONENT
Find Hero section component and update all 5 Image components with SEO optimization:

SLIDE 1 (cleaning-services-UAE.jpg):
- src='/images/cleaning-services-UAE.jpg'
- alt='Cleaning Services UAE - Al Haya provides professional cleaning solutions across all seven Emirates including Dubai, Abu Dhabi, Sharjah with expert team and eco-friendly products'
- title='Cleaning Services UAE | Al Haya Professional Cleaners'
- Heading: <h1>Cleaning Services UAE</h1>
- priority={true}
- loading='eager'
- quality={90}
- width={1920}
- height={1080}

SLIDE 2 (marble-polishing-dubai.jpg):
- src='/images/marble-polishing-dubai.jpg'
- alt='Marble Polishing Dubai - Expert marble and floor polishing services restoring shine to marble, granite, and terrazzo using diamond polishing techniques by Al Haya'
- title='Marble Polishing Dubai | Professional Floor Restoration'
- Heading: <h2>Marble Polishing Dubai</h2>
- loading='lazy'
- quality={90}
- width={1920}
- height={1080}

SLIDE 3 (professional-cleaning-services-UAE.jpg):
- src='/images/professional-cleaning-services-UAE.jpg'
- alt='Professional Cleaning Services UAE - Comprehensive cleaning solutions for villas, apartments, and offices with deep cleaning, sanitization by Al Haya across UAE'
- title='Professional Cleaning Services UAE | Homes & Offices'
- Heading: <h2>Professional Cleaning Services UAE</h2>
- loading='lazy'
- quality={90}
- width={1920}
- height={1080}

SLIDE 4 (sofa-carpet-cleaning.webp):
- src='/images/sofa-carpet-cleaning.webp'
- alt='Sofa Carpet Cleaning - Professional deep cleaning services for sofas and carpets removing stains, odors, and allergens with eco-friendly steam cleaning by Al Haya'
- title='Sofa Carpet Cleaning | Professional Deep Cleaning'
- Heading: <h2>Sofa Carpet Cleaning</h2>
- loading='lazy'
- quality={90}
- width={1920}
- height={1080}

SLIDE 5 (villa-apartment-cleaning-services.jpg):
- src='/images/villa-apartment-cleaning-services.jpg'
- alt='Villa Apartment Cleaning Services - Professional residential cleaning solutions with deep cleaning, sanitization for all properties across UAE by Al Haya'
- title='Villa Apartment Cleaning Services | Professional Residential'
- Heading: <h2>Villa Apartment Cleaning Services</h2>
- loading='lazy'
- quality={90}
- width={1920}
- height={1080}

TASK 3: ADD IMAGEOBJECT SCHEMA
Create lib/utils/heroSchema.ts with buildHeroImageSchema() function and add ImageObject schema for all 5 hero images in homepage metadata as JSON-LD scripts.

TASK 4: CREATE PYTHON METADATA SCRIPT
Create scripts/add-hero-metadata.py that:
- Backs up original images to /public/images/backup/
- Uses PIL and piexif to add metadata
- Handles both .jpg and .webp formats
- Logs success/failure for each image
- Provides verification output

TASK 5: VALIDATION & TESTING
- Run the Python script and verify metadata added
- Test that all images render correctly
- Verify only ONE h1 tag exists on homepage
- Check alt and title attributes in browser DevTools
- Validate ImageObject schemas at schema.org

REQUIREMENTS:
- Maintain existing carousel/slider functionality and animations
- Preserve theme system (Dark/Light Gold Luxury)
- Keep responsive design and breakpoints intact
- No breaking changes to layout or styling
- Use TypeScript for all new code
- Follow existing code style and patterns

DELIVERABLES:
1. scripts/add-hero-metadata.py - Python script for metadata
2. Updated Hero component with all SEO attributes
3. lib/utils/heroSchema.ts - Schema utility functions
4. Backup of original images
5. Verification report confirming metadata successfully added to all 5 images"