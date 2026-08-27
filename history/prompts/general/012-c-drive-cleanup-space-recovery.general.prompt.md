---
id: 012
title: C Drive Cleanup Space Recovery
stage: general
date: 2026-07-18
surface: agent
model: claude-fable-5
feature: none
branch: 001-service-hub-website
user: asadali22
command: none
labels: ["disk-cleanup", "windows", "maintenance"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - none (system maintenance, no project files changed)
tests:
  - none
---

## Prompt

yr mera c drive fuill ho gaya he e drive m sapce he m cha rha k memory ko chech kr k fato cheezen jo hum n use krte un ko delete kren kuch e drive pe shift kren

## Response

C drive cleanup session — 9.7 GB free se 55.7 GB free tak (~46 GB recovered):

- Claude Desktop vm_bundles deleted (10.6 GB) — website sessions (local-agent-mode-sessions, .claude/projects) untouched
- Safe caches cleared: npm-cache, pnpm-cache, ms-playwright, NVIDIA DXCache, Temp (~15 GB)
- Videos (NVIDIA recordings) moved to E:\Videos\NVIDIA (4.1 GB)
- CapCut uninstalled + leftover data removed (6.6 GB)
- WSL Ubuntu exported/re-imported to E:\WSL\Ubuntu, default user leo_ali restored, verified working (7.8 GB freed from C)
- Windows Update cache cleared by user via admin PowerShell (3 GB)

Remaining option noted for future: pagefile.sys (16 GB) can be moved to E via System Properties.
