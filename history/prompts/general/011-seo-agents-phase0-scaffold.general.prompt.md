---
id: 011
title: SEO Agents Starter Phase 0 Scaffold
stage: general
date: 2026-07-16
surface: agent
model: claude-fable-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: (chat) open zip, read CLAUDE.md + PLAN.md, understand, then start
labels: ["seo-agents", "nexagrow", "monorepo", "nestjs", "bullmq", "openai-agents-sdk", "phase-0"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - E:\sheryar bhai projects\seo-agents\ (new repo — extracted from seo-agents-starter.zip)
 - packages/shared/src/{config,db,queue,paths,index}.ts
 - packages/llm/src/index.ts
 - services/agent-dummy/src/{main,app.module,dummy.processor,dummy.agent,enqueue,env,constants}.ts
 - scripts/apply-schema.ts, package.json, pnpm-workspace.yaml, tsconfig.base.json, .env, .gitignore
tests:
 - pnpm -r typecheck — PASS (shared, llm, agent-dummy)
 - loadSiteConfig('example-site') sanity run — PASS
 - Runtime e2e PENDING (Docker Desktop not installed; Gemini API key not in .env)
---

## Prompt

@"E:\sheryar bhai projects\seo-agents-starter.zip"
ye zip file jo yaha pari he E:\sheryar bhai projects\seo-agents-starter.zip isy open kro is main claude.md read kro or plan.md read kro . phir hum kam start krege tum kam ko samjh lo pyle ache se

[Follow-up: model switched to claude-fable-5, "ab kro tum jo kr rhy the". AskUserQuestion answers: extract to E:\sheryar bhai projects\seo-agents; start Phase 0 immediately.]

## Response snapshot

Zip extracted to E:\sheryar bhai projects\seo-agents. Read CLAUDE.md + PLAN.md + schema.sql +
docker-compose.yml + .env.example + example-site.json. Project = NexaGrow's 13-agent SEO pipeline
(keyword research → competitor → planner → writer → metadata/schema/images/linker → techseo →
publisher with human approval gate → indexer → rank tracker → refresher). Hard rules: $0 tooling,
site-agnostic via sites/<site>.json, microservice-independent (BullMQ+Postgres only), approval gate.

Verified via web (July 2026): Gemini Flash models still free (Pro removed from free tier April 2026);
Agents SDK pattern = setDefaultOpenAIClient + setOpenAIAPI('chat_completions') + setTracingDisabled.

Built Phase 0: pnpm monorepo; @seo-agents/shared (Zod SiteConfig loader, pg pool + upsertSite/logJob,
BullMQ helpers with {siteId}:{agentName} naming); @seo-agents/llm (env-swappable provider wrapper);
agent-dummy NestJS worker (loads config → LLM call → jobs_log row) + enqueue script; apply-schema
script. Dependency corrections vs starter assumptions: zod v4 + openai v6 (peer deps of
@openai/agents 0.13.4). All typechecks pass; git repo initialized and committed.

Blockers for Phase 0 "done when" runtime test: Docker Desktop not installed (Postgres+Redis) and
Gemini API key missing in .env — user to provide both, then: docker compose up -d → pnpm db:apply →
pnpm dummy:worker + pnpm dummy:enqueue.
