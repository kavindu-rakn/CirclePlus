# Era & Fidelity

## Chosen era

### Historical window

The project covers the **New Google+** generation beginning with the November 2015 redesign and extending through the mature 2016–2017 experience.

### Visual anchor

**Late 2016 / early 2017** is the canonical visual baseline.

This captures the recognizable red Material-era toolbar, card-based Stream, Communities/Collections emphasis, mobile FAB/navigation patterns, and mature notification experience without anchoring the restoration to the decline/shutdown state.

### Feature envelope

Features may be included if they are verified within approximately **November 2015 → mid-2017** and do not contradict the chosen visual baseline.

The product did not remain static. Therefore, a feature may be historically valid while not belonging to the exact chosen visual snapshot. Such cases must be documented rather than silently blended.

## Why not 2013-era Google+

The early product centered Circles and the social graph. The selected era shifted toward an **interest graph**, with Communities and Collections becoming central while Circles were de-emphasized in the interface. Photos and Hangouts had also been decoupled as standalone products/services.

## Fidelity tiers

### Tier A — evidence-backed reproduction

Use when screenshots, primary documentation, or strong contemporary material exists.

Reproduce:

- structure
- component geometry
- density
- typography
- icon placement
- shadows/elevation
- labels/copy
- interaction model
- responsive behavior visible in evidence

### Tier B — conservative reconstruction

Use when the feature is known but exact interaction details are incomplete.

Rules:

- use nearby period patterns from the same product;
- prefer Material Design 1-era conventions;
- preserve terminology and information architecture;
- record confidence as Medium or Low;
- avoid introducing 2020s patterns without necessity.

### Tier C — invisible modernization

Allowed when it does not change the remembered interface:

- semantic HTML
- ARIA
- keyboard focus
- high-DPI support
- image optimization
- performance caching
- robust auth/security
- CI/CD
- resilient modern viewport behavior
- modern browser compatibility

## Historical confidence labels

Use one of:

- **High:** direct screenshot/recording or primary documentation.
- **Medium:** consistent contemporary coverage or multiple secondary sources.
- **Low:** plausible reconstruction from period conventions.
- **Unknown:** insufficient evidence; implementation must not proceed without explicit decision if user-visible.

## Anti-drift checklist

Before approving a UI change, ask:

- Does this look like Material Design 1 rather than Material 3?
- Did we add rounding, whitespace, pills, gradients, blur, or motion because they are fashionable now?
- Did we rename a historical action?
- Did we simplify a historically important awkward interaction without permission?
- Do we have evidence for the breakpoint/layout behavior?
- If evidence is missing, is the uncertainty recorded?

## Chosen project stance

This project is **visually faithful + behaviorally faithful + technically modern**.

It is intentionally stricter than a mere “spirit-faithful” homage.
