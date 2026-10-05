# Project [Name TBD]

> An unofficial, non-commercial, open-source restoration of the post-2015 Google+ consumer experience.

This repository is intended to recreate the **New Google+** experience introduced in November 2015, visually anchored around **late 2016 / early 2017**, with historically supported features through roughly **mid-2017**.

The objective is not to design a modern social network inspired by Google+. The objective is to recreate the product people actually used during the 2015–2017 era: the Home Stream, Communities, Collections, profiles, +1s, comments, shares, People/Search, lightweight Circles-based audience sharing, notifications, settings, and the responsive Material Design 1-era interface.

## Principles

- **Historically faithful outside, technically modern inside.**
- **Interest graph first.** Communities, Collections, and the Stream define this era.
- **No silent modernization.** Do not redesign this into Material 3, a contemporary SaaS product, or a generic social feed.
- **Evidence before invention.** Primary/archived Google material and screenshots outrank recollection or reconstruction.
- **Small, production-minded architecture.** This is a portfolio/hobby project, not a hyperscale social network.
- **No false affiliation.** The public project must use independent branding and clearly state that it is unofficial.

## Historical target

- Era begins: **November 2015 redesign**.
- Visual anchor: **Q4 2016 → Q1 2017**.
- Feature envelope: **November 2015 → approximately mid-2017**.
- Explicitly not targeted: the 2011–2014 Circles-first product or the shutdown-state 2018–2019 experience.

See [Era & Fidelity](docs/01-era-and-fidelity.md).

## v1 scope

- Home Stream
- Composer
- Posts, media, link previews
- +1, comments, reshares
- Profiles / About
- Following
- Collections
- Communities
- People / Search
- Lightweight Circles / audience sharing
- In-app notifications
- Settings
- Basic moderation, reporting, blocking
- Responsive desktop/tablet/mobile recreation
- Curated demo universe so the project never opens as an empty social network

### Deferred

- Events: later 2017 expansion
- Google Takeout import: v2
- ActivityPub: experimental only
- Hangouts/video: not in v1

## Proposed stack

- **Frontend:** Next.js, React, TypeScript
- **UI:** custom Material Design 1-era component system; Tailwind CSS or CSS Modules may be used as implementation tools, but must not define the visual language
- **Server state:** TanStack Query
- **Validation:** Zod
- **Domain/API layer:** server-side services via Next.js server routes/actions
- **Database:** PostgreSQL via Supabase
- **ORM:** Drizzle ORM
- **Auth:** Supabase Auth
- **Realtime:** Supabase Realtime
- **Media:** Cloudflare R2 + Sharp
- **Search:** PostgreSQL full-text search first
- **Testing:** Vitest + Playwright + visual regression
- **Hosting:** Vercel + Supabase + Cloudflare R2
- **CI/CD:** GitHub Actions

## Documentation map

Start with [docs/INDEX.md](docs/INDEX.md). AI coding agents must read [AGENTS.md](AGENTS.md), [STATUS.md](STATUS.md), and [plans/CODEX-MASTER-PLAN.md](plans/CODEX-MASTER-PLAN.md) before implementation.

## Status

Documentation-first; application implementation has not started. Phase 0 evidence gates still apply.

See the [generated progress dashboard](STATUS.md) for current task, completion counts, blockers, next task, model recommendation, and historical confidence. It derives from [portable progress data](project/progress.yaml); viewing or generating it uses no AI allowance. Regenerate locally with `node scripts/generate-status.mjs`; verify with `node scripts/generate-status.mjs --check` (Node 22+, no packages).

Use [AI Engineering Workflow](docs/19-ai-engineering-workflow.md) for task roles/model routing and [Learning and PR Teaching](docs/20-learning-and-pr-teaching.md) for the required developer learning gate.
