# Contributing

This is a non-commercial, open-source historical recreation project. Contributions are welcome when they improve historical fidelity, correctness, accessibility, security, or maintainability without turning the project into a new product direction.

## Before contributing

Read:

- `AGENTS.md`
- `docs/01-era-and-fidelity.md`
- `docs/03-feature-matrix.md`
- `docs/05-ui-ux-spec.md`
- `docs/17-research-evidence-register.md`

## Contribution rules

- Link historical UI changes to evidence where possible.
- Do not modernize visuals merely because current conventions differ.
- Keep public branding independent from Google.
- Do not submit copied proprietary assets unless their use has been explicitly cleared.
- Keep changes focused and testable.
- New dependencies require a brief rationale in the PR.
- New architectural direction requires an ADR.

## Pull requests

Include:

- problem/goal
- historical evidence or reason for reconstruction
- screenshots for UI changes
- test evidence
- migrations, if any
- accessibility/security considerations
- unresolved questions

Use the repository PR template.

## AI handoffs and Learning Gate

Use [AI Engineering Workflow](docs/19-ai-engineering-workflow.md) for roles/model routing and optional GitHub Projects/Milestones. One bounded task per PR; independent review where practical. Read `AGENTS.md` and `STATUS.md`, then confirm the task in `project/progress.yaml`.

Every meaningful PR requires [teaching and developer-confirmed understanding](docs/20-learning-and-pr-teaching.md) before merge readiness. Record the reviewed revision and Learning Gate completion in the PR. Mechanical exemptions need an explicit reason. The teaching chat never edits the repository.

Update progress data when task state changes; regenerate with `node scripts/generate-status.mjs` and verify with `node scripts/generate-status.mjs --check`. Run `node --test scripts/generate-status.test.mjs` for tracker changes. CI rejects stale dashboards without auto-committing. Record `done` in a tracking PR after merge/acceptance. Viewing `STATUS.md` costs no AI allowance.
