# Learning and PR Teaching

Every significant PR needs a teaching session before it is ready to merge from the developer-learning perspective. Use the persistent **Teach Me This Project** chat. It reads the final reviewed PR, issue, relevant architecture/phase docs, evidence, and tests. It never edits code or repository files.

## Lesson format

Explain briefly in simple language, then go deeper where the developer needs it:

1. **Problem solved:** concrete before/after behavior and acceptance criteria.
2. **Architecture fit:** why this exists in the restoration; which domain/phase it serves and which historical behavior it preserves.
3. **End-to-end flow:** walk one action from UI through validation/session, server/domain service, authorization, data/storage, response, cache/realtime, and UI update. For documentation/tooling PRs, trace input → validation → generated output → CI instead.
4. **Important files and symbols:** identify modules/functions/classes and what each owns; link the final revision. Explain the boundaries rather than reading every line.
5. **Contracts:** data model, API, schema/migration changes and compatibility. Say explicitly when absent.
6. **Security/privacy:** who can do/see what, server enforcement, negative tests, and potential leaks where relevant.
7. **Decisions:** why this implementation was chosen, meaningful alternatives, cost/complexity trade-offs, and historical evidence confidence.
8. **Failure and debugging:** likely failures, symptoms, where to inspect, how to reproduce, and tests that catch regressions.
9. **Interview/viva explanation:** the developer should describe the problem, architecture placement, flow, permissions, decisions, and one failure scenario without reading the diff.
10. **Comprehension:** ask 3–8 questions, wait for answers, correct gaps, and revisit weak areas. Do not mark understanding complete based on an assistant's own answers.

Possible questions (choose 3–8 relevant to the PR):

- What problem does this change solve, and what remains outside scope?
- Walk one user action from click to persisted result and back.
- Which file owns the business rule, and why?
- Why must limited post access be checked on the server?
- What contract/schema changed, and how would an older caller behave?
- What historical evidence supports this behavior? What is uncertain?
- Which failure would you investigate first, and what test would reveal it?
- Why choose this design over the main alternative?

For this workflow PR: explain why `learning_gate` is not `done`, how the percentage is derived, and how a stale dashboard is detected without an AI call.

## Learning Gate

- [ ] Final reviewed PR/head revision identified.
- [ ] Developer can explain the problem and architecture fit.
- [ ] Developer can trace the data/control flow and important files/symbols.
- [ ] Contracts/schema and authorization implications explained, or marked not applicable with a reason.
- [ ] Design choices, alternatives, historical evidence, and uncertainty understood.
- [ ] Developer can describe likely failure modes and a debugging approach.
- [ ] 3–8 questions answered; gaps corrected and rechecked.
- [ ] Developer confirms understanding on the final revision.

The developer posts a brief completion record in the PR: revision, teaching chat/session reference if available, questions covered, gaps resolved, confirmation. Build/Fix or the developer updates `project/progress.yaml` and regenerates `STATUS.md`. The teaching chat provides the lesson and record text only.

Small mechanical PRs may be explicitly exempted by the developer with a reason (for example, typo-only correction with no behavior or architecture change). Record the reason in the PR; never assume exemption because the diff is short. This workflow/generator PR is significant and is not exempt.

Move `learning_gate` → `ready_to_merge` only after learning and other review/test/evidence gates pass. New meaningful changes after teaching require a focused follow-up. `done` requires merge/acceptance. Passing the Learning Gate does not authorize automatic merge.

See [AI Engineering Workflow](19-ai-engineering-workflow.md) for roles, routing, and progress state transitions.
