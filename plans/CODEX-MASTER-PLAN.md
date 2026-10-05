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

## Operational contract for each bounded PR

Read `AGENTS.md` and `STATUS.md` first, confirm current phase/task/dependencies in `project/progress.yaml`, then read relevant phase docs, evidence, and ADRs. Use [AI Engineering Workflow](../docs/19-ai-engineering-workflow.md) as the detailed routing/lifecycle source. State the task's recommended model/effort; do not claim a prompt changed runtime settings. Expensive escalation stays explicit/user-visible.

Work on one issue/PR at a time. Stop dependent work at evidence or approval gates. Update progress data when state changes, regenerate `STATUS.md`, and run the check plus relevant tests/lint/typecheck. Open/update the PR with scope, historical confidence, changes, checks, risks, blockers, and remaining work. Require independent review where practical and the [Learning Gate](../docs/20-learning-and-pr-teaching.md) before merge readiness. Do not merge or start the next phase automatically. Mark `done` after merge/acceptance in a small tracking PR.

The broader roadmap also includes Phase 9 (v1.1/v1.5), Phase 10 (v2), and experiments; they remain deferred under [the roadmap](../docs/15-roadmap-and-implementation-plan.md), outside v1 progress.

## Coordinator contract

Use [Coordinated Chat Handoffs](../docs/21-coordinated-chat-handoffs.md) and [Role Prompts](ROLE-PROMPTS.md). Control Tower verifies actual app tools and human messaging authorization, dispatches existing registered roles, and reads results without developer relay. New chat creation needs explicit authorization. Preserve independent review, separate per-PR Builder/Fixer roles, one writer, two automatic review/fix rounds maximum, batch teaching, and human learning/merge decisions. Do not use new paid infrastructure/APIs/credits or start p0-03/another phase as a setup side effect.
