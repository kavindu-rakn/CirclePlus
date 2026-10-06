# p0-03 Repository and evidence audit

Audit date: 2026-10-06 (Asia/Colombo). Baseline: merged main `b415b55a956fa881c7f422dfb78725b2cc9aa427` (PR #3). Scope: inventory and planning only. This audit does not approve a canonical snapshot, complete research tasks, or authorize Phase 1. See the [PR backlog](../plans/PHASE-0-1-BACKLOG.md).

## Constraints (18)

- Restore the post-November-2015 consumer experience; anchor visuals in late 2016 / early 2017 (ADR-0001).
- Keep the feature envelope through approximately mid-2017; record sub-era differences.
- Primary/archived Google evidence outranks screenshots, contemporary coverage, recollection, and inference in that order.
- Preserve historical layout, density, typography, menus, dialogs, navigation, and terminology where evidenced.
- Keep +1, comments, and reshares; do not substitute modern reactions.
- Use repository-owned MD1 primitives; no current MUI/Chakra defaults, Material 3, glass, pills, or oversized rounding (ADR-0004).
- Ask before materially ambiguous historical UX; record uncertainty in the evidence register.
- Require usable Home desktop/mobile references and all Phase 0 exit criteria before Phase 1.
- Use one modular monolith with explicit domain boundaries (ADR-0002).
- Server services own visibility, permissions, audience resolution, and moderation; the browser never decides authority.
- Use PostgreSQL/Supabase and Drizzle migrations; Supabase is infrastructure (ADR-0003).
- Validate external input with Zod; keep SQL portable unless an ADR justifies an exception.
- Centralize all authorization checkpoints listed in AGENTS.md; test unauthorized access negatively.
- Use R2 for media when that work is approved; protect private access (ADR-0005).
- Keep accessibility, security, performance, and modern viewport support invisible to historical styling.
- Ship synthetic demo content with independent branding; no impersonation or affiliation claim.
- Exclude ActivityPub, Hangouts/video, AI product features, and microservices from this work/v1; preserve later-release deferrals (ADRs 0006/0007 and feature matrix).
- One bounded PR, one writer, independent review, developer Learning Gate and explicit merge decision; no new charges or automatic phase advancement.

## Repository inventory versus target

Counts refer to `git ls-files` at the baseline above, not ignored files or this PR. Reproduce with `git ls-tree -r --name-only b415b55a956fa881c7f422dfb78725b2cc9aa427`. There are **62 tracked files**, including **45 Markdown files**, **4 raw images**, **2 PDFs**, **3 JavaScript modules**, **4 `.yml` files**, **1 JSON registry example**, **1 `.yaml` progress source**, and **2 Git dotfiles**.

| Area | Actual baseline paths/counts | Target / gap |
|---|---|---|
| Documentation | 36 files under `docs/`: 24 top-level Markdown files, 8 under `adr/` (7 accepted ADRs + index), 2 reference guides, 2 acceptance/activation records | Strong planning pack; no implemented business rules |
| Root/plans | 6 root Markdown files; 3 under `plans/` | AGENTS, status, charter/requirements and role instructions exist; implementation backlog is delivered by this PR |
| Progress tools | `scripts/generate-status.mjs`, `scripts/generate-status.test.mjs`, `scripts/fixtures/progress.mjs` (3) | Dependency-free tracker, not application tests |
| GitHub | `.github/workflows/update-status.yml` (1 workflow); 3 issue templates; 1 PR template | CI runs tracker tests and freshness, not app lint/typecheck/build/migrations/Playwright |
| Portable state | `project/progress.yaml`, `project/chat-registry.example.json` | 3/55 v1 tasks done, 0/46 application tasks done at baseline; local routing ignored |
| Raw research | `initial-research-done/` (2 PDFs), `gplus-original-screenshots/` (4 images) | Leads and visible examples, not a dated reference pack |
| Curated evidence | `docs/reference/README.md`, `reference-capture-template.md` | 0 per-artifact records or dated screen folders; no canonical declaration, route/reference matrix, token measurements, or interaction captures |
| App/runtime | No tracked `apps/`, `packages/`, `src/`, `app/`, `package.json`, pnpm lock/workspace, TS/build config or `.env.example` | Next.js/React/TS/pnpm scaffold absent; dependency versions not selected |
| Domain/data | No tracked domain service source, Drizzle schema/migrations/config, auth adapter or seed code | Architecture in docs/06-09 is a specification, not implemented authority |
| Verification/assets | No tracked application tests, Playwright config, implementation screenshots, icon/font asset system or deployment config | No fidelity, privacy, auth or runtime proof yet |

The inventory covers tracked repository artifacts only. It does not assert whether external cloud accounts exist. No hosted services were provisioned. The ignored registry and inspection preview in `work/` are not portable evidence. All numbered product/engineering docs, workflow docs, master/first-run plans, and seven ADRs were read; no package installation or application execution was needed.

## Raw-source inspection and limits

All four images were visually inspected. Pixel dimensions below were read with Pillow; **raster size is not a verified CSS viewport**. The AVIF was decoded to an ignored PNG for inspection because the image viewer could not open its format directly. No source asset changed.

| Local file under `gplus-original-screenshots/` | Raster size | Visible content only | What remains unproved |
|---|---|---|---|
| `the-finished-google-resp-06809e0d85994.jpg` | 1600 x 1020 | Device composite: desktop Home, drawer, compact composer, two content columns, post actions; phone Home and compose affordance | Publication/capture date, authenticity/source, web versus native phone surface, true viewport/DPR, breakpoint or interactive behavior; device framing/occlusion prevents full geometry extraction |
| `google_plus_ndtv_new_010.jpg` | 800 x 630 | Side-by-side mobile Home and Collections, post actions, compose affordance, bottom navigation | Whether views share a build/date; source URL, viewport/device, navigation transitions and behavior |
| `images.jpeg` | 415 x 737 | Mobile Communities browse, tabs, JOIN controls and bottom navigation | Capture date/build, source, membership flow, Community detail/categories or private states |
| `nexus2cee_2015-11-18-19.10.01.avif` | 1080 x 1920 | Mobile Collections browse, tabs, FOLLOW controls and bottom navigation | Filename date is a lead only; source/date/build not verified, device/CSS dimensions and follow/detail behavior unknown |

No companion provenance records exist at baseline. High confidence in the visible pixels does not imply high confidence in their date, platform variant, legal reuse, or behavior. The raw images do not visibly cover expanded composer/audience, post detail, profile/About, notification tray, settings or Community detail. This is an image inventory finding, not a claim that those screens never existed.

`initial-research-done/Gemini-GPlus.pdf` has 14 pages; `Perplexity-GPlus.pdf` has 17 (pypdf). Opening and final pages were text-inspected for scope/source leads, not visually measured or exhaustively fact-checked. Both discuss a broader 2015-2019 window than the approved visual target; their source lists mix historical and later technical material. Gemini metadata contains no creation date; Perplexity's creation metadata is 2026-09-20, a report export timestamp, not a product screenshot date. Neither proves exact pixel values, build selection, audience semantics or contemporary pricing. Original cited sources were not opened in this bounded audit. Existing reports remain secondary inputs; no new external historical claims or verified URLs are introduced.

## Gap report against the evidence register

The High/Medium-High conclusions in [docs/17](17-research-evidence-register.md) are inherited research conclusions. This audit neither downgrades them nor converts them into independently verified primary-source records. It establishes which repository evidence is still missing.

| Register subject | Current evidence / confidence for implementation | Required resolution / owner |
|---|---|---|
| Broad redesign direction and target era | Existing register conclusions + accepted ADR-0001; inherited confidence | p0-04 trace supporting primary/contemporary sources; p0-06 declare exact compatible snapshot |
| Red, toolbar/card dimensions, radii, elevation, icons | Raw visible examples; exact values unknown | p0-04 provenance, p0-05 measured viewports, p0-07 confidence-tagged token notes |
| Responsive collapse / Stream width | Device composite and mobile crops; breakpoint unknown | p0-05 desktop narrow/wide observations plus mobile platform distinction; no breakpoint inferred from two images |
| Expanded composer/audience | No corresponding raw image | p0-05 screen/flow references; p0-08 unresolved audience options and behavioral gates |
| Notifications/mobile navigation | Navigation visible in raw mobile samples; no tray/state transition proof | p0-04 date/build verification; p0-05 tray/badge/navigation states; p0-06 platform choice |
| Comments/edit/reshare | Actions/previews visible; detail, labels and restrictions unknown | p0-05 detail/expansion references; p0-08 authoritative behavior evidence before dependent services/UI |
| Collections/Communities | Browse images only; detail, visibility, categories and approvals unknown | p0-05 detail/state coverage, p0-08 behavior register |
| Circle membership / recipient semantics | docs/07 explicitly open; no direct proof here | p0-08 evidence or explicit approved reconstruction; block dependent audience schema/rules |

## Proposed minimum reference set (collection target, not completed research)

Each required record needs a stable REF ID, product date or defensible date interval, platform/build, source/archive locator, capture date separate from product date, image dimensions, viewport/device/DPR when known, confidence, proves/does-not-prove, and lawful storage/access notes. Unknown fields stay unknown. A record with unresolved critical date/platform/viewport fields cannot serve as a canonical geometry baseline. External references plus measurement notes may replace redistribution where necessary.

| Coverage | Minimum usable state set before Phase 0 exit | Current raw coverage |
|---|---|---|
| Home desktop | One unobscured dated full Home at a known viewport, showing toolbar/drawer/composer/card actions; a second narrower web view or recording to constrain column collapse | Composite lead only |
| Home mobile / shell | Dated full Home at known device/viewport and identified mobile web/native platform; navigation open/selected and FAB entry states, with transition evidence | Composite/side-by-side leads; platform/build unverified |
| Post card/detail | Text, media/link and context/visibility examples; comments collapsed/expanded/detail; +1/comment/reshare affordances | Partial media/link cards and actions only |
| Composer/audience | Entry and expanded composer; audience/destination selector; Collection and Community/category context | Entry lead only |
| Collections | Browse tabs and detail; follow state; visibility/create/edit references or explicitly gated unresolved states | Browse leads only |
| Communities | Browse and detail/category; membership/join/request states and relevant moderator affordances | Browse lead only |
| Profile/About | Header, Posts and About views with follow affordance; field-visibility context where supported | None in raw set |
| Notifications | Closed badge and open tray/panel, read/unread state and entry/dismiss transition for selected version | Bell/nav labels only |

These eight rows mirror the roadmap's core exit coverage; no arbitrary screenshot count substitutes for sufficient evidence. One artifact may cover several states if legible and documented. Use recordings/documentation for behavior, not static pixels alone. Record cross-platform differences rather than treating Android bottom navigation as mobile-web proof. Tablet/iOS, People/Search, settings and report/block references remain collection targets from the reference guide; missing evidence blocks those later components and must stay visible in the matrix. Any reduction in approved platform coverage needs the developer's decision.

Phase 0 exit additionally requires source inventory, dated 2015/2016/2017 organization (older variants for comparison, not silently mixed), route/page matrix, approved canonical declaration, initial evidence-linked tokens, and a high-impact unresolved behavior list. p0-08 records a pass/fail per gate. Usable Home alone is necessary but insufficient. No UI/scaffold task starts simply because p0-03 merges.

## Contradictions, incomplete decisions and handling

| ID | Tension / missing decision | Treatment and gate |
|---|---|---|
| D1 | docs/01 calls late 2016 / early 2017 canonical, but docs/19-open-questions asks for exact desktop date/build; reports span 2015-2019 | Era is approved; exact artifact/build is not. p0-06 presents dated candidates, developer chooses before tokens/UI |
| D2 | Mobile samples show bottom navigation; composite phone and docs/04 allow drawer/contextual navigation | Do not blend platforms/versions. p0-05 labels variants; p0-06 asks mobile web fidelity versus native-inspired web reconstruction, or explicitly separate variants, with evidence/trade-offs |
| D3 | docs/06 allows packages or a single app; no workspace decision exists | Recommend workspace plan below as reversible implementation organization; developer approves the plan before p1-01, no new architectural style |
| D4 | docs/04 flow mentions audience snapshot; docs/07 leaves dynamic versus snapshot open; docs/08 uses object-based authorization signatures while AGENTS lists ID-based checkpoints | docs/07/AGENTS gates win. p0-08 tracks dynamic, snapshot, or evidence-approved hybrid options with privacy consequences; public service checkpoints must honor AGENTS while internal helpers may accept resolved objects. No guessed audience schema |
| D5 | docs/14 suggests feat/docs branches; app environment defaults to `codex/` | Routine reversible choice: use `codex/<task>-<scope>` for these planned PRs; conventional commit scopes unchanged |
| D6 | README/ADRs name hosted stack; operational docs forbid new services/charges | ADRs select architecture, not provisioning permission. p1-02 needs a verified existing no-charge or approved local disposable setup; never buy/install/provision as an audit side effect |
| D7 | docs/19-open-questions leaves auth method, CSS tool, demo writes, slugs, ordering, media strategy, invite policy open | CSS Modules recommended routine implementation choice; auth method/local DB availability needed before p1-02; other policy decisions block their later owning tasks, not unrelated planning |
| D8 | docs/18 requires independent identity and cleared assets; screenshots contain Google marks and third-party content | Developer approves project identity/asset use before user-visible branded shell. Neutral fixture content and independent icons recommended; raw references are comparison evidence, not shipping assets |

Mandatory human choices: approve this plan after review/learning; choose evidenced desktop/mobile canonical variants in p0-06; approve materially ambiguous UX/reconstruction in p0-08 before dependent work; approve brand/asset use and auth method before affected Phase 1 work; explicitly approve any later scope or cost change. No historical candidate has enough provenance for selection in this audit, so option comparison belongs to p0-06 rather than a fabricated decision now.

Reversible routine recommendations: workspace layout, CSS Modules, task branch names, docs filenames, and local fixture organization. These remain proposals, not historical claims. Feed ranking, demo write/reset policy, handles, private media access and exact block/reshare behavior remain named later gates; don't resolve them just to fill a plan.

## Proposed repository skeleton (not created)

Use one Next.js deployable with small internal packages, as allowed by docs/06. A single-app `src/server`/`src/ui` organization is the simpler alternative if package maintenance becomes a burden; the authorization boundary must be identical. No distributed services, task runner or Storybook is required.

```text
package.json, pnpm-lock.yaml, pnpm-workspace.yaml, tsconfig.base.json
apps/web/
  package.json, next.config.ts, tsconfig.json, .env.example
  src/app/                       # layout + eventual home route
  src/server/auth/               # verified session adapter (server-only)
  src/server/handlers/           # Zod -> actor -> domain; no table bypass
  src/config/env.ts              # server/public environment separation
  tests/e2e/                     # smoke, then critical flows
packages/gplus-ui/src/           # tokens.css + historical primitives, no DB imports
packages/contracts/src/         # public validated inputs/errors, no secrets
packages/domain/src/identity/   # services + authorization; later bounded modules
packages/db/src/                # schema, connection, repositories (server-only)
packages/db/migrations/         # Drizzle SQL + metadata, clean/upgrade tests
packages/test-utils/src/        # add only when shared fixtures are needed
docs/reference/                # curated metadata, matrix, measurements
scripts/                       # retain progress checks; later bounded seed tasks
.github/workflows/              # retain status; add scoped application checks
```

Names map `gplus-ui` to docs/06's conceptual `ui-historical`; they do not change ADR-0004. Packages expose intentional entry points. UI imports contracts, never DB/auth secrets; handlers validate and resolve actors; domain services authorize; DB adapters persist. Only Phase 1-owned paths are created by their approved PRs; future domain modules/assets/config packages are not empty scaffolding work now. Dependency versions must be checked and pinned during p1-01, not copied from report recommendations.

## Non-goals and handoff

No app directories, packages, tokens, migrations, runtime/deployment configuration, screenshots of an implementation, primary-source research campaign, full metadata capture, canonical selection or Phase 1 approval are delivered here. No task except p0-03 changes lifecycle state. Evidence confidence for this inventory is high for paths/counts/visible observations and unknown for undated historical particulars; overall p0-03 historical confidence stays medium.

Independent review must check inventory reproducibility, backlog coherence and truthful gates; Teacher then covers the final reviewed plan. p0-03 stays `review` until those gates pass, and becomes `done` only after merge/acceptance. The next-task suggestion is p0-04, still backlog and dependent on p0-03 completion; it is not selected or started.
