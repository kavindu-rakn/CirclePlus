# Codex First Run

Copy this prompt into ChatGPT Codex after this documentation pack is committed to the repository.

---

You are taking over implementation planning for this repository. Do **not** begin a large implementation yet.

First read, in order:

1. `AGENTS.md`
2. `STATUS.md` and `project/progress.yaml`
3. `README.md`
4. `docs/01-era-and-fidelity.md`
5. `docs/02-product-requirements.md`
6. `docs/03-feature-matrix.md`
7. `docs/05-ui-ux-spec.md`
8. `docs/06-technical-architecture.md`
9. `docs/07-domain-and-data-model.md`
10. `docs/09-auth-privacy-security.md`
11. `docs/13-testing-and-quality.md`
12. `docs/15-roadmap-and-implementation-plan.md`
13. `docs/17-research-evidence-register.md`
14. `plans/CODEX-MASTER-PLAN.md`
15. all ADRs in `docs/adr/`

Then read `docs/19-ai-engineering-workflow.md` and `docs/20-learning-and-pr-teaching.md`, and inspect the current repository/Git state.

Confirm the current task and dependencies from progress data. State the recommended model/effort, without claiming to change runtime settings. Work on one bounded issue/PR at a time. Stop at evidence/approval gates; no automatic phase advancement.

If the current task already has an open PR, finish its review/teaching handoff first. Have Control Tower select `p0-03` before starting the planning work below; do not silently switch tasks.

Your first implementation-planning task is planning only:

- summarize the project constraints in no more than 20 bullets;
- report any contradictions or missing foundational decisions;
- inventory the current repo versus the documented target architecture;
- identify which Phase 0 historical references are still required before UI implementation;
- propose a concrete repository skeleton;
- break Phase 0 and Phase 1 into small PR-sized tasks with dependencies, branch names, expected files, tests, and acceptance criteria;
- identify all points where you need a decision from me;
- explicitly list what you will **not** implement yet.

Do not modernize the interface. Do not introduce Material 3/MUI defaults. Do not add ActivityPub, Hangouts, microservices, AI features, or unrelated product ideas.

Update `project/progress.yaml` as task state changes; run `node scripts/generate-status.mjs`, `node scripts/generate-status.mjs --check`, and relevant validation. Open/update the planning PR and summarize changes, tests, risks, blockers, and remaining work. Complete review and the Learning Gate before signaling ready to merge; do not merge automatically.

Wait for my approval of the plan before starting implementation.

---
