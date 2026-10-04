# Development Workflow

## Prerequisites

Expected local stack:

- Node.js current LTS
- pnpm
- Git
- Docker optional depending Supabase local workflow
- Supabase CLI if local services are used

## Branch strategy

Use short-lived branches:

- `feat/...`
- `fix/...`
- `docs/...`
- `refactor/...`
- `test/...`
- `chore/...`

Prefer one roadmap task per branch.

## Commits

Conventional commits:

```text
feat(stream): add post card action row
fix(auth): prevent limited post leak through search
docs(era): record 2016 notification reference
```

## Pull requests

Each PR should include:

- roadmap task/phase
- implementation summary
- historical evidence confidence
- screenshots if UI
- tests run
- migrations
- security/accessibility impact
- unresolved questions

Agents must **signal ready to merge** instead of merging automatically unless explicitly asked.

## Schema changes

1. edit Drizzle schema
2. generate migration
3. review SQL
4. test against clean database
5. test upgrade path
6. update docs if domain semantics changed

Never edit production schema manually and leave migration history behind.

## Seed data

Maintain deterministic seed scripts for:

- minimum dev data
- demo universe
- privacy edge cases
- moderation cases

Seed scripts must not create fake real-person identities.

## CI/CD

GitHub Actions should run:

- install with lockfile
- lint
- typecheck
- test
- build
- optional Playwright against preview/test environment

Vercel preview deployments are useful for visual review.

## Rollback

- Keep migrations reversible where practical.
- For risky data migrations, write explicit rollback or recovery notes.
- Never deploy destructive migration + dependent code without sequencing.
