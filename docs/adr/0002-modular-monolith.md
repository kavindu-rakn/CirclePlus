# ADR-0002: Modular Monolith

- **Status:** Accepted

## Decision

Use a modular monolith rather than microservices.

## Rationale

The project is solo-led, low-traffic, and feature-rich enough to benefit from domain boundaries but not operationally complex enough to justify distributed services.

## Consequences

- one primary deployment unit;
- explicit internal modules/services;
- easier local development and transactions;
- future extraction remains possible if a real need appears.
