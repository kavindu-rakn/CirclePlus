# ADR-0004: Custom Historical MD1 UI Layer

- **Status:** Accepted

## Decision

Do not rely on current MUI/Chakra defaults for final visuals. Build repository-owned historical UI primitives based on evidence from the selected era.

## Rationale

Current Material libraries reflect later design evolution and can silently modernize spacing, shape, motion, elevation, and typography.

## Consequences

- more upfront UI work;
- much stronger historical fidelity;
- Tailwind or CSS Modules may still be implementation tools;
- visual regression/evidence review is mandatory.
