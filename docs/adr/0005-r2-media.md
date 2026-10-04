# ADR-0005: Cloudflare R2 for Media

- **Status:** Accepted

## Decision

Use Cloudflare R2 for user media, with signed upload/access flows as required by visibility.

## Rationale

Low-cost object storage, suitable portfolio-scale economics, and decoupling media from application compute.

## Consequences

- application owns upload authorization and media metadata;
- private/limited media requires access control, not globally public URLs;
- image normalization/variants handled with Sharp.
