# Codex Master Plan

This is the execution contract for ChatGPT Codex.

## Global rules

- Read `AGENTS.md` first.
- Do not start by generating the full app.
- Work phase-by-phase.
- Ask before historically ambiguous user-visible decisions.
- Create focused branches and PRs.
- Do not merge PRs unless instructed.
- Each phase must satisfy its exit criteria before the next begins.

## Phase 0 — Repository and evidence audit

### Tasks

1. Inspect all documentation.
2. Inventory existing repository files if any.
3. Create a gap report against `docs/17-research-evidence-register.md`.
4. Propose the minimum reference set required for Phase 1.
5. Produce a precise implementation backlog, not code.

### Do-not-proceed gate

Do not implement the historical app shell if no usable Home/desktop + mobile reference exists.

## Phase 1 — Foundation PRs

Suggested PR sequence:

### PR 1 — project scaffold

- Next.js + TS
- pnpm
- lint/typecheck
- Vitest
- Playwright
- env validation
- CI skeleton

### PR 2 — database/auth foundation

- Drizzle
- Supabase connection
- initial user/profile schema
- migration setup
- auth session helper

### PR 3 — historical design tokens/primitives

Only after evidence exists:

- tokens
- app bar
- nav/drawer
- card
- icon button
- FAB
- dialog/menu
- typography/avatar

### PR 4 — static historical shell

- Home route
- desktop shell
- mobile shell
- screenshot comparison

## Phase 2 — Stream vertical slice

Implement one full vertical slice before broadening:

- seeded profile
- create post
- Stream query
- post card
- +1
- comment
- restricted/public visibility tests

### Gate

No Collections/Communities until this slice has server-side authz and Playwright coverage.

## Phase 3 — Social identity and audiences

- profiles
- follow edges
- lightweight Circles
- audience selector
- `canViewPost`
- search leak tests
- media leak tests

## Phase 4 — Collections

PRs:

1. data model/service
2. create/edit UI
3. follow/unfollow
4. browse/following/yours
5. profile integration

## Phase 5 — Communities

PRs:

1. model + roles/categories
2. browse/detail
3. membership
4. posting
5. moderation

## Phase 6 — Notifications/search/safety

- notification event model
- tray/badge + realtime
- PostgreSQL FTS
- report/block
- admin moderation
- invite-first controls

## Phase 7 — Fidelity hardening

- desktop screenshot matrix
- mobile screenshot matrix
- visual regressions
- animation/ripple pass
- accessibility
- performance

## Phase 8 — Demo universe

- deterministic generators
- seeded relationships
- varied post/media types
- demo entry path
- reset policy

## Definition of Done per PR

- scoped change only
- no undocumented historical invention
- types/lint/tests pass
- screenshot evidence for UI
- migrations included/reviewed
- security/privacy tests if relevant
- docs updated
- PR summary states confidence and deviations

## Questions Codex must ask rather than guess

- exact historical variant when references conflict
- whether to preserve a dated UX anti-pattern if evidence is clear but usability impact is material
- any use of Google-branded assets
- any scope expansion beyond current roadmap phase
- any new hosted service/dependency with cost or lock-in implications
