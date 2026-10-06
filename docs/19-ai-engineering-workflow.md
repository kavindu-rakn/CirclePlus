# AI Engineering Workflow

This is the authoritative workflow and model-routing guide. Product scope, historical target, architecture, and evidence rules remain in the [existing documentation](INDEX.md). The PR is the unit of implementation. Do not keep one giant implementation chat for the entire project.

## Chats and responsibilities

| Chat/task | Lifetime | Responsibility | Repository edits |
|---|---|---|---|
| Control Tower | Whole project | Select phase/task, coordinate dependencies, route models, explain scope | None; hand changes to Build/Fix |
| Build — PR #X | One bounded PR | Implement the selected issue with acceptance criteria and tests | Yes |
| Teach Me This Project | Persistent | Teach the final PR in simple language, connect architecture, trace files/functions/data flow/design decisions/failure modes, quiz the developer | Never |
| Review — PR #X | One PR | Independently review correctness, tests, privacy, and fidelity | None |
| Fix — PR #X | Same PR or focused follow-up | Apply accepted findings and rerun affected checks | Yes |
| Bug — issue #X | One bug/cluster | Reproduce → diagnose → fix → regression test | Yes |
| Historical/UI Review | Persistent or one PR | Compare references at matching viewports, record evidence confidence and deviations | Prefer none; request evidence/doc changes from Build/Fix |

Use a fresh review context where practical. Give the reviewer the issue, base/head commits, diff, evidence, acceptance criteria, and validation results. Let the reviewer reach conclusions before reading the builder's rationale. Critical PRs use Sol/Luna to build and Astra to independently review. Separate chats retain distinct contexts. Control Tower can coordinate them through supported app tools after direct human authorization; use [Coordinated Chat Handoffs](21-coordinated-chat-handoffs.md) and [Role Prompts](../plans/ROLE-PROMPTS.md). They do not automatically share whole histories or change models.

## Canonical PR lifecycle

Control Tower → Build → Review → Fix → Historical Review where needed → Teaching/Learning Gate → Merge → Progress update.

1. Read `AGENTS.md` and `STATUS.md`, then confirm the task in `project/progress.yaml`. Read the relevant phase documents and ADRs.
2. Select one approved task. State scope, non-goals, acceptance criteria, dependencies, evidence confidence, and recommended model/effort. Do not claim the runtime changed.
3. Inspect Git status/branch/remotes. Preserve unrelated work. Create a focused branch and PR; update the PR as review and fixes proceed.
4. Move the task through `in_progress`, `review`, `learning_gate`, and `ready_to_merge` only when their gates are satisfied. A bug fix can return it to review. Historical review blocks only affected work.
5. Obtain independent review; fix accepted findings; compare substantial UI changes with dated references. Insufficient/blocked evidence prevents large dependent implementation. Record gaps in the [evidence register](17-research-evidence-register.md) and research issues. No silent scope expansion or phase advancement.
6. Complete the [Learning Gate](20-learning-and-pr-teaching.md) on the final reviewed revision. The developer answers and explicitly confirms understanding; Control Tower retrieves the record and Builder/Fixer posts it. The teaching chat never edits the repository. Green tests alone do not complete learning.
7. Signal ready to merge and leave merging to the developer unless explicitly authorized. Record `done` only after merge and acceptance, with evidence and the merged PR link.
8. Update progress in the implementation PR at every material state change and regenerate the dashboard. After merge, use a small tracking PR for the `done` transition; never assume CI advances state. Do not begin the next phase automatically.

Control Tower dispatches and reads handoffs directly within human-authorized scope; the developer is not the message relay. For each handoff include task ID, PR link, base/head revision, what changed, tests, risks, blockers, remaining work, and the next responsible role. New commits affecting taught behavior require a short follow-up lesson/review.

## Authoritative model routing

These are project recommendations, not availability or pricing guarantees. Use supported levels exposed by the current client/model.

| Work | Model | Effort |
|---|---|---|
| Default implementation; Control Tower; teaching | GPT-6.1 Sol | Medium |
| Complex cross-domain implementation, feed queries, realtime interactions, hard state/data flow, difficult debugging; historical/UI comparison | GPT-6.1 Sol | High |
| Repetitive CRUD, tests, mechanical refactors, seed/demo data, well-specified components/pages after patterns exist | GPT-6 Luna | Medium/High |
| Architecture review, security/privacy/authorization review, difficult unknown bugs, major design decisions, final phase/critical PR audit | GPT-6 Astra | Medium/High |
| Normal escalation failed, or unusually consequential analysis | Sol or Astra | Extra, explicit exception only |
| Normal project work | Any | Max/Ultracode excluded because of usage cost |

Ambiguity and consequence determine reasoning effort, not lines of code. Use stronger models mainly at decision boundaries and review points. Start with Medium; use High for real uncertainty. Expensive escalation must be explicit and user-visible: state the failed approach, reason, model/effort, and wait for the developer to select/authorize it. Never silently escalate to Extra/Max/Ultracode. Record recommended routing per task where useful.

## Runtime selection and optional role configuration

A prompt saying “use GPT-6.1 Sol Medium” expresses intent. It does not prove that the active chat switched model or effort. Select/verify them in the runtime/user settings. An agent must report the recommendation separately from its known active settings, and say when active settings are unknown.

Inspection found no existing `.codex/` configuration, custom roles, or installed-version contract in this repository. No runtime configuration is added in this update. Builder, reviewer, tester (checks and regression evidence), and historian (dated source/evidence comparison) remain intended roles.

The [official Codex subagent documentation](https://learn.chatgpt.com/docs/agent-configuration/subagents), checked 2026-10-05, documents project-local `.codex/agents/<name>.toml` files with `name`, `description`, and `developer_instructions`; supported optional fields include `model`, `model_reasoning_effort`, and `sandbox_mode`. `.codex/config.toml` supports `[agents]` defaults. Custom role files can override model/effort; omitted settings inherit runtime settings. These configure spawned subagents, not permanent sidebar chats or the current parent chat. A supported explicit spawn request can select a subagent model, subject to client support and applicable instructions.

Before adopting those files, verify the installed client's support and trust behavior. Keep model/effort unset unless the developer approves defaults; use read-only roles for review/history where supported. Do not enable automatic delegation, paid services, or expensive models as a side effect of this documentation.

## Portable progress and GitHub tracking

`project/progress.yaml` is the portable source of truth; [STATUS.md](../STATUS.md) is generated. GitHub Projects/Milestones are optional mirrors. Map phase/release to milestones and use task IDs in issues/PRs:

Backlog → Ready → In Progress → Review → Learning Gate → Ready to Merge → Done.

Add a Blocked state with a reason and dependencies. Map these labels to `backlog`, `ready`, `in_progress`, `review`, `learning_gate`, `ready_to_merge`, `done`, `blocked`. Repo state wins when mirrors disagree; reconcile manually rather than silently replacing it.

The file uses **JSON syntax, a YAML 1.2 subset**, so Node can parse it without packages. Keep quoted keys/strings and valid JSON; general YAML shorthand/comments are not supported. Node 22+ is sufficient; no install, API key, network call, or LLM is needed:

```sh
node scripts/generate-status.mjs
node scripts/generate-status.mjs --check
node --test scripts/generate-status.test.mjs
```

Run from the repository root. Edit progress data, never the generated dashboard. Stable task IDs include phase, release, status, dependencies, issue/PR, blockers, historical confidence, recommended model/effort, and source/evidence paths. `current_phase`, `current_task`, and `next_task` point to IDs. `done` requires evidence. A PR waiting for teaching is `learning_gate`, not `done`. Research summary PDFs/raw images prove collection, not a verified historical reference pack.

Percentage = completed tasks / all tracked tasks in the selected release, with equal task weight and only `done` receiving credit. Overall means v1 (Phases 0–8), including planning; application-only completion is shown separately. Later releases/experiments remain visible outside that denominator. It is task completion, not effort spent or a forecast. When splitting tasks, preserve scope/source and expect the denominator to change. No manual percentage overrides.

CI checks data integrity, generator tests, and dashboard freshness on PRs and pushes. It never commits or advances task state. A stale dashboard fails CI: regenerate locally and commit both files. Release and phase exit criteria still control advancement, regardless of percentage.

## Coordinated operation

Use [Coordinated Chat Handoffs](21-coordinated-chat-handoffs.md) for runtime tool/authorization checks, local routing, exact-revision PR evidence, one writer, and bounded review/fix loops. No new paid services/APIs/subscriptions. Existing Codex allowance is still consumed; stop rather than buy credits or enable a billable fallback. This is a documented workflow, not an always-running watcher.
