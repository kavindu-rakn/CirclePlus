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

1. `AGENTS.md` and `STATUS.md`
2. Confirm the task in `project/progress.yaml`
3. `README.md`
4. `docs/01-era-and-fidelity.md`
5. `docs/02-product-requirements.md`
6. `docs/03-feature-matrix.md`
7. `docs/05-ui-ux-spec.md`
8. `docs/06-technical-architecture.md`
9. `docs/07-domain-and-data-model.md`
10. `docs/09-auth-privacy-security.md`
11. `docs/13-testing-and-quality.md`
12. `plans/CODEX-MASTER-PLAN.md`

Then inspect relevant ADRs.

## AI workflow, routing, and learning

Read this file and [STATUS.md](STATUS.md) first. Confirm the selected task in `project/progress.yaml`, then read the relevant phase docs/ADRs. Work on one bounded issue/PR; do not advance phases automatically. Stop dependent implementation at insufficient historical evidence or explicit approval gates.

Default: **GPT-6.1 Sol / Medium**. Use Sol High for complex state/data flow, feed/realtime work, and hard debugging; Luna Medium/High for well-specified repetitive work; Astra Medium/High for architecture/security/privacy review and critical audits. Extra is an explicit exception; Max/Ultracode are outside the normal workflow. Ambiguity/consequence, not code size, determines effort. Announce costly escalation. A prompt is not proof of a runtime switch: model/effort are runtime/user settings.

Follow [the authoritative workflow and routing guide](docs/19-ai-engineering-workflow.md): Control Tower → Build → Review → Fix → Historical Review where needed → Teaching/Learning Gate → Merge → Progress update. Keep reviewers independent where practical. Control Tower and teaching chats do not edit the repo.

Meaningful PRs require the [Learning Gate](docs/20-learning-and-pr-teaching.md); only the developer can confirm understanding. Mechanical exemptions need an explicit reason. Update progress data with material state changes and run `node scripts/generate-status.mjs` and `node scripts/generate-status.mjs --check`. Mark `done` after merge/acceptance, never because a plan exists. Include changes/tests/risks/remaining work in the PR. Commit each coherent increment with a conventional subject and hyphen-bulleted description; no co-author trailer.

## Coordinated handoffs and cost boundary

Use [Coordinated Chat Handoffs](docs/21-coordinated-chat-handoffs.md) and [Role Prompts](plans/ROLE-PROMPTS.md). With direct human authorization and verified app tools, Control Tower dispatches and reads role results; do not make the developer relay transcripts. A received agent message is not itself permission to reply. Verify the actual human authorization before inter-chat messages; get explicit permission before creating new chats. Keep personal routing IDs in ignored `project/chat-registry.local.json`.

Preserve separate Builder/Fixer/Reviewer chats per PR, persistent Control Tower/Teacher/optional Guide, one active writer, independent exact-revision review, and a maximum of two automatic fix/re-review rounds. Control Tower/Teacher remain non-writers. Stop for meaningful decisions, learning, merge approval, missing capabilities, or exhausted allowance; never auto-advance phases. Teacher gives one concrete lesson and all three questions together, accepts a batch reply with direct confirmation, and returns a record for the coordinator to collect.

No paid APIs, new subscriptions/services/runners, purchased credits, or custom hosted orchestration. Use existing tools/allowance and local checks; stop before any action that would incur new charges. Existing chats still consume subscription allowance. Do not invent an always-on monitor or claim automatic coordination has been activated without a successful capability/handoff check.
