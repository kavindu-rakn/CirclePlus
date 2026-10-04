# Authentication, Privacy & Security

## Threat model focus

The most damaging failure for this project would be leaking limited/private content. Historical sharing semantics are not merely UX—they are authorization requirements.

## Authentication

Use Supabase Auth for:

- email/password or magic-link depending final product decision
- optional approved OAuth providers
- session management

Public demo mode should use a constrained demo identity or read-only seeded session rather than exposing privileged credentials.

## Authorization layers

### Application/domain layer — authoritative

Every sensitive action passes through server-side authorization.

### Database/RLS — defense in depth

Use RLS where it materially reduces accidental exposure, but do not bury all domain meaning in opaque policies.

Complex feed visibility may be easier to reason about in server-side SQL/domain queries plus targeted RLS for table-level defense.

## Audience privacy

Required negative tests:

- unrelated user cannot view limited post
- user removed from required audience cannot view if historical semantics are dynamic
- blocked user cannot interact according to project policy
- private Community content cannot leak to non-members
- media belonging to private content cannot be fetched via public URL
- reshare cannot broaden an audience where historical rules forbid it

## Upload security

- signed upload URLs
- content-length limit
- MIME/type validation
- decode/re-encode images with Sharp
- strip dangerous metadata where appropriate
- store generated variants separately
- reject executable/script payloads
- no user-controlled object paths

## Web security

- strict Content Security Policy
- sanitize/render rich text safely
- no raw untrusted HTML
- CSRF protection where cookie-based mutation paths require it
- secure, HttpOnly cookies where applicable
- same-site policy appropriate to auth flow
- rate limit auth and mutation endpoints
- validate all IDs and ownership server-side

## Secrets

- no service-role secrets in client bundles
- use environment separation
- document required secrets in `.env.example`, never actual values
- rotate compromised credentials

## Logging

Log security-relevant events without logging sensitive post bodies unnecessarily:

- auth failures/rate-limit events
- moderation/admin actions
- suspicious upload failures
- privilege changes

## Security release gate

Public signup must not open until:

- report/block flows work
- auth rate limits exist
- upload limits exist
- private-content tests pass
- admin moderation actions are audited
