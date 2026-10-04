# ADR-0006: No ActivityPub in v1

- **Status:** Accepted

## Decision

Do not implement ActivityPub/federation in v1.

## Rationale

Federation solves a different problem than historical restoration and introduces remote identity, signing, retries, compatibility, foreign content semantics, abuse, and moderation complexity.

## Consequences

- empty-room problem is solved through curated demo data and invited users;
- federation may be explored later as a clearly separate experimental mode.
