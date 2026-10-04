# AGENTS.md

This file is authoritative for ChatGPT Codex and other coding agents working in this repository.

## Mission

Recreate the **post-November-2015 Google+ consumer experience**, visually anchored around late 2016 / early 2017. This is a restoration project, not a redesign exercise.

## Source-of-truth order

When deciding historical UI or behavior, use this order:

1. Primary/archived Google material from the target era.
2. Screenshots or screen recordings from the target era.
3. Contemporary 2015–2017 product coverage and documentation.
4. Old user screenshots/recollections.
5. Conservative reconstruction inference.

Do not silently promote a low-confidence inference into a historical fact. Record uncertainty in `docs/17-research-evidence-register.md`.

## Fidelity rules

### Must remain historically faithful where evidence exists

- layout structure and density
- red Material-era toolbar treatment
- MD1-era cards, elevations, typography, icon sizing, menus, dialogs, FAB behavior
- navigation hierarchy
- composer flow
- post card anatomy
- +1 terminology and interaction
- comments and reshare terminology
- Collections and Communities structure
- profile organization
- notification surface
- mobile navigation patterns
- labels, copy, and terminology

### May be modernized invisibly

- accessibility semantics
- keyboard navigation
- high-DPI rendering
- image optimization
- security controls
- unsupported modern viewport handling
- performance implementation
- caching
- database design
- CI/CD

### Prohibited without explicit user approval

- Material 3 / Material You styling
- glassmorphism
- pill-heavy navigation
- large rounded cards
- oversized contemporary spacing
- gradient-heavy branding
- replacing +1 with heart/like terminology
- introducing features because "modern social apps have them"
- changing historical interaction patterns solely because they feel dated
- adding AI features to the product unless explicitly approved
- ActivityPub/federation in v1
- Hangouts/video in v1

## Ambiguity protocol

If a historical decision is ambiguous and materially affects UX:

1. Search the repository reference/evidence docs first.
2. State the ambiguity and current evidence confidence.
3. Present 2–3 historically plausible options with trade-offs.
4. Ask for user approval before implementing.

Do not invent a modern substitute and proceed silently.

## Architecture rules

- Use a **modular monolith**.
- Keep important business rules server-side.
- Do not make the browser the authority for permissions.
- Supabase is infrastructure, not the domain model.
- Client code must not directly implement authoritative audience/privacy rules.
- Use domain services for post visibility, community permissions, reshares, moderation, and audience resolution.
- Use Drizzle migrations for schema changes.
- Validate external input with Zod.
- Prefer standard PostgreSQL and portable SQL over vendor-specific shortcuts unless documented in an ADR.

## Core authorization checkpoints

The implementation must centralize at least:

- `canViewPost(viewerId, postId)`
- `canComment(viewerId, postId)`
- `canReshare(viewerId, postId)`
- `canEditPost(actorId, postId)`
- `canJoinCommunity(actorId, communityId)`
- `canPostToCommunity(actorId, communityId, categoryId?)`
- `canModerateCommunity(actorId, communityId)`
- `canViewProfileField(viewerId, profileId, field)` where historically relevant

## UI implementation

- Build a custom `gplus-ui`/historical design-system layer.
- Current MUI/Chakra defaults must not define final visuals.
- Tailwind may be used as a utility implementation, but historical design tokens belong in repository-owned configuration/CSS variables.
- Components should be reusable across desktop and mobile where behavior is shared.
- Reference screenshots must be compared at matching viewport sizes.

## Testing expectations

Every substantial UI PR must include:

- relevant screenshots
- visual comparison against historical reference when available
- unit/integration tests for non-trivial domain behavior
- Playwright coverage for user-critical flows
- accessibility checks where applicable
- migration notes for schema changes

Privacy and audience logic require negative tests proving unauthorized access is denied.

## Git workflow

For non-trivial work:

1. Create a focused branch.
2. Implement one coherent unit of work.
3. Run tests/lint/typecheck.
4. Commit with a conventional commit message.
5. Push the branch.
6. Create a PR.
7. Summarize historical evidence, implementation choices, screenshots, tests, and unresolved uncertainty.
8. **Signal that the PR is ready to merge; do not merge unless explicitly instructed.**

Avoid giant multi-feature branches.

## Scope control

Before starting a task, identify which roadmap phase it belongs to. If it is outside the approved phase, stop and ask.

No silent scope expansion.

## Required reading order for a new agent

1. `README.md`
2. `docs/01-era-and-fidelity.md`
3. `docs/02-product-requirements.md`
4. `docs/03-feature-matrix.md`
5. `docs/05-ui-ux-spec.md`
6. `docs/06-technical-architecture.md`
7. `docs/07-domain-and-data-model.md`
8. `docs/09-auth-privacy-security.md`
9. `docs/13-testing-and-quality.md`
10. `plans/CODEX-MASTER-PLAN.md`

Then inspect relevant ADRs.
