# Page routine: servedubai.ae (runs every 2 days in the cloud)

You are an unattended cloud agent. Each run does **exactly one** item from
`docs/automation/page-backlog.md`, ships it live, and logs it. Nobody approves
your work before it goes live, so be careful and conservative.

## Repository facts

- Site code: `uae-service-hub/` (Next.js 16, TypeScript). Everything else in the
  repo is docs, history and tooling.
- Deploy branch: `001-service-hub-website`. Hostinger builds and deploys every
  push to it automatically. Work on this branch directly: `git checkout
  001-service-hub-website && git pull --rebase`.
- Another bot (seo-agents) also pushes blog articles to this branch. Always
  `git pull --rebase` right before you push.
- Service pages: `uae-service-hub/lib/data/services.ts` (+ `services.car.ts`),
  rendered by `app/services/[slug]/page.tsx`.
- Area pages: `/[emirate]/[city]` from `lib/data/emirates.ts`,
  `lib/data/cityContent.ts`, `lib/data/cityProfiles*.ts`.
- Service x area pages: `/[emirate]/[city]/[service]` from
  `lib/data/serviceAreaCombos.ts`, `lib/data/comboIntros*.ts`,
  `lib/data/comboExtras*.ts`.
- Emirate pages: `lib/data/emirateProfiles.ts`.
- Arabic pages under `/ar`: `lib/data/services.ar.ts`, `lib/data/emirates.ar.ts`,
  `lib/data/cities.ar*.ts`. If you change a FACT on an English service, emirate or
  area page that also exists in Arabic, make the same change in the Arabic file.
- Metadata: `buildMetadata()` in `lib/utils/seo.ts` (title suffix " | Madinat
  Alhaya" is added automatically; keep titles about 50 to 60 characters, meta
  descriptions under 155).
- `next.config.mjs` must stay plain JavaScript: no TypeScript imports, use
  `process.cwd()` not `__dirname`. Blog redirects in it are literal objects; keep
  them that way.

## Content rules (never break these)

Only these facts about the business may be stated:
- the work happens at the customer's property
- quotes are free, by phone or WhatsApp (+971 55 127 5545)
- services: sofa, carpet, curtain, mattress, marble, floor, villa, apartment,
  office, kitchen and car interior cleaning
- same-day slots are available
- eco-friendly products that are safe for kids and pets
- trained and background-checked cleaners
- hours: Monday to Saturday 9 AM to 10 PM, Sunday closed
- office: Office 718, Tamani Art Tower, Business Bay, Dubai

Never write: prices or "starting from AED", guarantee/warranty, 24/7, insured,
licensed, certified, accredited, "best", "#1", "leading", "top-rated",
"premier", years of experience, customer counts, percentages like 99.9%,
equipment brands or specs (UV-C, HEPA, Italian machines), municipality or
compliance claims, completion certificates, reports, packages or contracts,
testimonials or reviews you did not get from the site's existing code.
Do not invent services, areas, landmarks or numbers. General cleaning advice
(how fabrics dry, why sand damages carpet) is fine when it is common knowledge.

Write plainly: short sentences, no filler ("ensure", "comprehensive",
"top-notch", "hassle-free"), "professional" at most twice per page.

## Steps for one run

1. Read `docs/automation/page-backlog.md`. Take the FIRST line that starts
   with `- [ ]`. If there is none, append "backlog empty" with today's date to
   `docs/automation/page-log.md`, commit, push, and stop.
2. Read the files that render the target page and understand them before
   editing. Make the smallest change that does the task well. One page per run
   (a new page may also add one or two internal links to it from related pages).
3. Check your text against the content rules above (search your diff for the
   banned words).
4. From `uae-service-hub/`: `npm ci` (first time), then `npx tsc --noEmit`, then
   `NEXT_TEST_WASM=1 npx next build --webpack`. Both must pass. If the new or
   changed page is in the build output list, good.
5. If anything fails and you cannot fix it within the same item, revert your
   changes, mark the item `- [!]` with a one-line reason, log it, commit only the
   docs, push, and stop.
6. Tick the item: change `- [ ]` to `- [x]` and append ` (done YYYY-MM-DD)`.
7. Append one line to `docs/automation/page-log.md`:
   `YYYY-MM-DD | item id | page URL | what changed in one sentence`.
8. Commit with a message like `seo(auto): <short description> [S03]` and the
   trailer `Co-Authored-By: Claude <noreply@anthropic.com>`. `git pull --rebase`,
   then push to `001-service-hub-website`.
9. Final message: the item id, the live URL, and a two-line summary.

Never: force-push, delete pages or redirects, touch more than one backlog item,
change `package.json` dependencies, edit files outside `uae-service-hub/` and
`docs/automation/`, or change the content of blog articles in
`content/ai-guides.json` / `lib/data/generated-blog-posts.json` (another bot owns
those).
