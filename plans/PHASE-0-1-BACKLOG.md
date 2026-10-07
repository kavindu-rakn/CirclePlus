# Precise Phase 0 / Phase 1 PR backlog

Planning output of p0-03, 2026-10-06. Read the [audit and decision register](../docs/22-repository-evidence-audit.md) and [authoritative roadmap](../docs/15-roadmap-and-implementation-plan.md). Stable IDs below already exist in `project/progress.yaml`; this plan adds acceptance detail, not task completion or new task IDs. Paths marked proposed do not yet exist. Each task is one focused PR; if evidence volume exceeds a reviewable PR, return a proposed split to Control Tower rather than silently expanding scope or changing progress denominators.

## Dependency and approval rules

The progress manifest is the executable dependency source. p0-04/05/06/07 currently each depend on p0-03; the artifact dependencies below additionally constrain sequencing. Keep them as plan gates until the coordinator authorizes a manifest update; no downstream task is ready merely because its formal minimum dependencies pass. No concurrent writers.

Recommended sequence: p0-03 merge/acceptance -> p0-04 provenance -> p0-05 coverage -> p0-06 canonical approval -> p0-07 measurements -> p0-08 exit audit -> explicit Phase 1 approval -> p1-01 -> p1-02 -> p1-03 -> p1-04. Research can revisit gaps without starting application work. p0-08 formally depends on all other Phase 0 tasks including completed p0-01/02/ops-01. Every p1 task formally depends on all Phase 0 tasks; p1-04 also depends on p1-01/02/03. p1-02 and p1-03 additionally need the p1-01 scaffold in this plan. These are conservative added gates, not a waiver of manifest dependencies.

Every PR updates only its own truthful progress state and regenerates STATUS. Common validation now: `node --test scripts/generate-status.test.mjs`, `node scripts/generate-status.mjs --check`, local link/source-path consistency and `git diff --check`. Research PRs add manual source-to-claim review. CI runs existing tracker checks; app lint/typecheck/build/tests become required only once the scaffold supplies them. Every significant PR needs independent exact-revision review and developer-confirmed learning; merge is separately authorized. Completed artifacts are evidence, not proof of historical truth on their own.

## Phase 0 (research/planning, no application)

### p0-03 — Audit and actionable backlog (this PR)

- Branch: `codex/p0-03-repository-evidence-audit`; formal dependencies: none; direct task approval verified.
- Files: `docs/22-repository-evidence-audit.md`, this backlog, docs index/README/manifest links, evidence-register audit note, own progress and generated STATUS.
- Acceptance: baseline path/count inventory; no more than 20 constraint bullets; raw-source limits; gap and minimum reference set; proposed skeleton; stable PR plans; named decisions/non-goals. No other task completed or selected.
- Validation: common checks, inventory against baseline tree and visual raw-image inspection. Application tests/screenshots/migrations not applicable: no application change.
- Exit: independent review + Learning Gate + explicit merge/acceptance. p0-04 remains unstarted until selected by coordinator.

### p0-04 — Source inventory and dated records

- Branch: `codex/p0-04-source-inventory`; formal dependency p0-03 done. Inputs: raw files, docs/17, reference guides and audit gaps.
- Proposed files: `docs/reference/source-inventory.md`, companion `REF-*.md` records in `web/{2015,2016,2017}/`, `android/{2015,2016,2017}/` or `ios/` as provenance supports; register updates. Preserve originals; never rename a file to assert an unverified date.
- Work: trace the two reports' relevant citations and four raw images; record verified source/archive/product dates separately from capture/export dates, platform/version, dimensions and rights/access limits. Acquire only a bounded set needed for core coverage, with external locators/notes where redistribution is unsuitable.
- Checks: common checks; unique IDs, existing local paths or accessible external locators with access dates; inspect cited artifacts and distinguish source statements from inference.
- Acceptance: all six existing inputs inventoried with proves/does-not-prove; uncertain dates remain unknown; enough dated candidates to support p0-05/06 or explicitly report missing acquisition as blocked. No canonical choice/token values.

### p0-05 — Reference and route/page matrix

- Branch: `codex/p0-05-reference-matrix`; formal dependency p0-03; artifact gate p0-04 usable records.
- Proposed files: `docs/reference/route-page-matrix.md`, core reference records/interaction notes; focused docs/04 and register links if needed.
- Work: map modern proposed routes from docs/04 to eight core screen/state groups in the audit; mark desktop web/mobile web/native variants separately. Include open/closed/selected states, measured dimensions versus known CSS viewport/DPR, missing states and acquisition owners. Keep original Google URLs separate from implementation routes.
- Checks: common checks; every matrix REF resolves; visible geometry reviewed at source dimensions; recordings/documentation support claimed transitions; unmapped and unknown states remain explicit.
- Acceptance: Home desktop/mobile candidates usable for comparison; each core row has sufficient state coverage or a named blocker; later People/settings/report/block and tablet/iOS coverage visible. No invented breakpoint, bottom navigation or blended version.

### p0-06 — Canonical snapshot declaration

- Branch: `codex/p0-06-canonical-snapshot`; formal dependency p0-03; artifact gates p0-04 provenance and p0-05 compatible coverage.
- Proposed files: `docs/reference/canonical-snapshot.md`, docs/01 clarification and docs/17 decision links.
- Work: present 2-3 dated historically plausible desktop/mobile candidate combinations with evidence, gaps and trade-offs. Separate exact visual build from broader feature envelope; identify mobile web versus native-inspired adaptation. Ask developer before selecting ambiguous user-visible variants.
- Checks: common checks; chosen REF IDs/date/platform match source records; contradictions/deviations explicitly reviewed.
- Acceptance: direct human canonical approval recorded without private chat IDs, chosen viewport/platform set and compatibility rules, explicit excluded variants and unresolved component gates. If evidence/approval is absent, leave selection blocked; an era label alone is not enough.

### p0-07 — Initial evidence-linked token measurements

- Branch: `codex/p0-07-token-measurements`; formal dependency p0-03; artifact gates p0-05 usable dimensions and p0-06 approved baseline.
- Proposed files: `docs/reference/tokens/initial-tokens.md` and measurement notes/overlays where permitted; register links. No app CSS/package yet.
- Work: measure red/color relationships, typography, toolbar/nav/card/gutters/radii/elevation/icons and responsive observations; distinguish raw raster measurements from CSS values, account for scale/DPR; label confidence per value. Motion needs recordings, not static guesses.
- Checks: common checks; measurement reproduction at source dimensions; each proposed token maps to a REF/method/platform and uncertainty; inspect annotations visually.
- Acceptance: usable initial token specification, no unexplained precision, no memory-derived values or current library defaults; unknown motion/breakpoint/icon licensing remains gated before affected primitive work.

### p0-08 — Behavior unknowns and Phase 0 exit report

- Branch: `codex/p0-08-evidence-exit`; formal dependencies: p0-01/02/03/04/05/06/07/ops-01 done.
- Proposed files: `docs/reference/unresolved-behaviors.md`, `docs/reference/phase-0-exit.md`, docs/17 and docs/19-open-questions links.
- Work: assess all eight core rows plus each Phase 0 deliverable; trace composer/audience options, comment detail, reshare/edit restrictions, Circle membership, Collection visibility, Community approvals, notification matrix and platform navigation to evidence or explicit reconstruction options. Assign each unresolved decision to its dependent component/task.
- Checks: common checks; source-to-behavior review; pass/fail matrix for inventory/date folders/routes/canonical/tokens/core screens/high-impact unknowns. Unknown privacy semantics require evidence/approved policy before future authorization tests can be designed.
- Acceptance: sufficient core references and usable Home desktop/mobile; every high-impact unknown recorded and affected work blocked; developer approves consequential reconstruction choices before implementation. Record failed gates honestly. Merging the report cannot override a failed Phase 0 exit. Phase 1 starts only after an explicit coordinator/human phase decision.

## Phase 1 (planned, not approved to start)

Use the audit's proposed workspace unless the developer approves the single-app alternative. Proposed paths below follow that recommendation. Keep one deployable modular monolith. Existing accepted stack ADRs are not permission for billable provisioning. No versions are chosen here; p1-01 must verify supported versions with official sources at implementation time and pin the lockfile.

### p1-01 — Minimal scaffold, environment boundaries and checks

- Branch: `codex/p1-01-scaffold`; formal dependency all Phase 0 tasks done, plus passing exit report and explicit Phase 1 approval; plan approval D3.
- Proposed files: root package/lock/workspace/TS config, `apps/web` Next.js/TS minimal entry (no historical Home), `apps/web/src/config/env.ts`, `.env.example`, Vitest/Playwright/lint config, `.github/workflows/application.yml`, setup README. Add only package manifests needed for following PRs, no speculative domain modules.
- Work: reproducible pnpm install, intentional workspace boundaries, minimal render smoke, server/public env validation with Zod; secrets never client-exported. Preserve dependency-free status tooling and its workflow/path filters. Document local commands and required versions, without installation or service charges outside approval.
- Tests: fresh locked install, lint, typecheck, meaningful env-invalid/server-secret boundary tests, unit suite, production build, Playwright entry smoke; common tracker checks. Run equivalent scoped CI on existing allowed runners; if charges would result, stop/report.
- Acceptance: clean checkout can install/run/build locally using documented placeholders; missing/invalid env fails safely without printing secrets; tracker remains green; no historical UI guesses/auth/database behavior. No deployment provisioning.

### p1-02 — Identity database/auth foundation only

- Branch: `codex/p1-02-identity-auth`; formal dependency all Phase 0 tasks done; plan gate p1-01 accepted scaffold, D6 approved available local/existing disposable DB and D7 auth method.
- Proposed files: `packages/db/src/{schema,connection,repositories}`, Drizzle config/migrations, `packages/domain/src/identity/`, `packages/contracts/src/identity.ts`, `apps/web/src/server/auth/`, auth boundary tests and DB setup/migration notes. UI auth shell only with resolved evidence/branding; no provider-specific UX invented.
- Work: minimal users/profiles schema, server-verified session/actor, validated profile inputs and owner-only access/mutations; portable DB adapter. No follows/posts/audience tables or unresolved visibility semantics. No browser direct authoritative mutation, service-role secret exposure, broad signup or billable setup.
- Tests: disposable database clean migration and upgrade/recovery rehearsal; valid/expired/forged/missing session checks; unauthorized user cannot change another profile; constraints and server/client import boundaries; lint/typecheck/build, applicable auth smoke and common checks. State prerequisites honestly when a DB is unavailable.
- Acceptance: reproducible schema/session path, least-privilege credentials, explicit recovery instructions and passing negative tests. Any field-visibility UX/rule needing unresolved historical evidence remains blocked, not hard-coded. Hosted auth method/setup needs approval; do not bypass with browser authority.

### p1-03 — Historical CSS tokens and minimal primitives

- Branch: `codex/p1-03-historical-primitives`; formal dependency all Phase 0 tasks done; plan gate p1-01 scaffold; p0-06/07 evidence and D8 asset/identity approval.
- Proposed files: `packages/gplus-ui/src/tokens.css`, app bar/nav/card/icon button/FAB/menu/dialog/avatar/typography primitives with CSS Modules, component fixture route/tests, `docs/reference/comparisons/p1-03.md`, implementation captures.
- Work: only evidence-backed primitive states needed for static Home; record platform variants, unknown motion/icon decisions and deviations. No composer/domain features, notification behavior or current Material defaults. Add server-free package entry point.
- Tests: lint/typecheck/build, meaningful keyboard/focus/menu/dialog tests, reduced-motion/labels/accessibility checks, Playwright fixture states at approved viewports; inspect captures/overlays against dated refs using stable geometry, no blind pixel threshold. Common checks.
- Acceptance: reusable MD1 geometry from measured tokens, traceable references for each visible primitive; screenshots and explained deviations; keyboard controls work; no licensed asset guess. Missing evidence blocks the affected primitive, not a modern substitute.

### p1-04 — Static Home desktop/mobile shell

- Branch: `codex/p1-04-static-home`; formal dependency all Phase 0 and p1-01/02/03 tasks done; plan gate explicitly accepted canonical desktop/mobile Home evidence.
- Proposed files: `apps/web/src/app/home/page.tsx`, layout/nav composition, deterministic non-real fixture cards, Playwright Home screenshots, `docs/reference/comparisons/p1-04.md` and Phase 1 exit evidence.
- Work: compose static toolbar/navigation/entry composer/post-card appearance using approved primitives and fixture content. Only evidenced shell menu/navigation states interact; fixture actions must not claim persistence or live backend behavior. Do not build publishing/+1/comments/reshare/audience/notifications here. Those belong to later tasks.
- Tests: lint/typecheck/build, browser navigation/drawer/keyboard checks and accessibility, matching approved desktop/mobile viewport captures plus overlay/manual stable-region comparison; conservative unsupported viewport behavior documented separately. Common checks.
- Acceptance: visually convincing static Home at both reference viewports, captures attached with source IDs and deviations, no mixed native/web variant; no Phase 2 feature silently started. Phase 1 exit requires independent historical/technical review and developer acceptance; only then may Control Tower seek Phase 2 approval.

## Decisions and explicit deferrals

Mandatory decisions D1/D2/D4/D6/D7/D8 are listed in the audit with owners/gates. The developer approves the plan and learns it before merge readiness; p0-06/p0-08 supply actual evidence-backed options later. CSS Modules/workspace/file names are routine reversible proposals, not canonical historical facts.

Do not start downstream tasks while this PR is in review. No new issues, cloud resources, dependency installs, token implementation, schema creation, package directories, custom orchestration, automatic teaching exemptions or merge operation are part of p0-03. Phase 2+ implementation, full research acquisition, tablet/iOS resolution, brand selection, demo writes/reset, ranking, handles, media privacy strategy and detailed safety policy remain deferred to their owners and evidence gates. No known unknown is resolved merely by writing this backlog.
