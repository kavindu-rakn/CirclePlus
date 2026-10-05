# Roadmap & Implementation Plan

## Phase 0 — Archaeology and reference pack

### Deliverables

- source inventory
- 2015/2016/2017 screenshot folders
- desktop/mobile references
- route/page matrix
- initial design tokens with evidence confidence
- unresolved behavior list
- canonical visual snapshot declaration

### Exit criteria

- Home, post card, composer, Collections, Communities, profile, notifications, and mobile shell each have sufficient reference evidence to begin implementation.
- High-impact unknowns are documented.

## Phase 1 — Repository foundation + historical design system

- Next.js/TS project
- lint/typecheck/test setup
- Drizzle/Supabase wiring
- base auth shell
- CSS token system
- historical primitives: app bar, nav, card, menu, FAB, dialog, avatar, typography
- Storybook optional; not required if it slows delivery

### Exit criteria

A static shell at reference viewports is visually convincing before real features are added.

## Phase 2 — Stream and publishing primitives

- profile seed model
- posts
- media
- composer
- Home Stream
- +1
- comments
- reshares
- cursor pagination

### Exit criteria

Two seeded users can interact end to end; post visibility is server-enforced.

## Phase 3 — Profiles, follows, audiences

- profile/About
- follow/unfollow
- lightweight Circles/list model
- audience selector
- visibility tests

### Exit criteria

Limited posts cannot leak through direct URL, Stream, search, or media.

## Phase 4 — Collections

- create/edit Collection
- cover/theme
- add posts
- follow/unfollow
- discovery/following/yours surfaces
- profile integration

## Phase 5 — Communities

- create/browse/join
- categories
- member roles
- Community Stream
- Community posting
- base moderation

## Phase 6 — Notifications, search, safety

- notification tray/badge
- realtime subscription
- People/Search
- report/block
- moderation dashboard
- invite-first registration controls

## Phase 7 — Mobile fidelity + visual hardening

- reference-based mobile routes
- FAB/nav/drawer behavior
- viewport testing
- visual regression suite
- accessibility pass
- performance pass

## Phase 8 — Demo universe and portfolio launch

- deterministic synthetic dataset
- demo mode
- read/write sandbox policy
- deployment docs
- public disclaimer/branding

## Phase 9 — v1.1/v1.5

- richer moderation
- polls if historically confirmed
- improved discovery
- Events as a separately scoped 2017 feature

## Phase 10 — v2

- Google Takeout importer
- archive restoration mode
- import validation/ownership rules

## Experimental

- ActivityPub behind explicit feature boundary
- optional Hangouts-inspired experience via LiveKit only if separately approved

## Execution tracking

The phases and exit criteria above remain authoritative. [Portable progress data](../project/progress.yaml) breaks them into trackable tasks; [STATUS.md](../STATUS.md) derives counts without an LLM. Planning documents and collected PDFs/images do not complete application tasks or the historical reference gate. Phase 0 includes documentation delivery and this operating workflow; settings remain v1 and are tracked in Phase 6 alongside the related safety/search work (see the existing feature matrix).

Follow [AI Engineering Workflow](19-ai-engineering-workflow.md). Complete the [Learning Gate](20-learning-and-pr-teaching.md) for significant PRs. Do not start a new phase automatically; obtain the existing evidence/approval decisions first.
