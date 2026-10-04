# ADR-0007: No Hangouts/Video in v1

- **Status:** Accepted

## Decision

Exclude Hangouts/video from v1.

## Rationale

Hangouts had been decoupled from the main Google+ experience by the selected era, while real-time video carries disproportionate implementation and operational complexity.

## Consequences

- resources stay focused on Stream, Collections, Communities, profiles, and notifications;
- if explored later, use a managed/open-source WebRTC platform such as LiveKit rather than building raw SFU infrastructure.
