# ADR-0003: PostgreSQL + Supabase

- **Status:** Accepted

## Decision

Use PostgreSQL hosted through Supabase, with Supabase Auth and Realtime where useful. Use Drizzle ORM/migrations.

## Rationale

The domain is highly relational: users, directed follows, Collections, Communities, memberships, posts, comments, +1s, audiences, notifications, and moderation.

## Consequences

- relational integrity is first-class;
- RLS may provide defense in depth;
- core business authorization remains server-side and portable;
- avoid coupling domain semantics to direct browser-to-table access.
