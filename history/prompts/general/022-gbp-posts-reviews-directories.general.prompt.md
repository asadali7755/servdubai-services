---
id: 022
title: GBP posts, review replies, indexing and directories
stage: general
date: 2026-11-21
surface: agent
model: claude-opus-5-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: none
labels: ["gbp", "reviews", "local-seo", "directories", "gsc"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - docs/gbp-reviews-and-posts.md
 - docs/backlink-outreach-2026-11.md
tests:
 - live checks in Chrome: posts list, review replies, photos pending, GSC "Indexing requested", Foursquare place page
---

## Prompt

ijazat he aed wala tum hata skte ho / Haan, post karo / Haan, laga do / rehne do next kam pe jao fahad siddiqui walepe /
Haan, post karo / Haan, upload karo / Haan, karo / Haan, shuru karo / cybo b open kr dia he same tab main /
foresqquear b login kr dia he check kro or cybo b ho gaya he dono ko dekh lp / Haan, accept karo /
not a robot pe click kr dia he maine

## Response snapshot

Madinat Alhaya GBP: posts 1-4 done (sofa live; carpet 24 Nov, mattress 28 Nov, recliner 1 Dec), "AED 399" villa post
deleted, replies to Omar Raggal and Sela Chocolates (old reply with guarantee/insured/packages replaced), 4 photos and
2 videos uploaded (pending). Servedubai GBP: reply to Fahad Siddiqui. GSC: indexing requested for /services/sofa-cleaning
and /services/floor-cleaning. Cybo: existing listing edited to the Business Bay details. Foursquare: new place with pin
on Tamani Arts Offices. Connect.ae dropped (domain gone).

## Outcome

- ✅ Impact: GBP content and replies cleaned of unconfirmed claims; NAP consistent on Cybo and Foursquare
- 🧪 Tests: each action verified on the live page
- 📁 Files: two docs updated
- 🔁 Next prompts: delete the other old GBP posts with 24/7 / 99.9% / "only company" claims once the owner agrees; check Cybo after moderation
- 🧠 Reflection: search a directory for an existing listing before adding one; Cybo already had the business with old data

## Evaluation notes (flywheel)

- Failure modes observed: typing landed on the wrong Cybo field once (reloaded and redone); Foursquare map opened on the header location (Rawalpindi)
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
