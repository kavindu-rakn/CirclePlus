# Open Questions

These questions should be resolved with evidence or explicit product decisions before the relevant implementation phase.

## Historical

1. Exact canonical date/build for desktop visual reference?
2. Exact canonical Android app version/date?
3. Did the selected snapshot use inline comments, modal post detail, or both depending on context?
4. Exact notification tray UI after the 2016 notification-center change?
5. Which Events behavior, if any, belongs in the chosen early-2017 envelope?
6. Exact Collection visibility options?
7. Exact Community categories/moderation controls in the chosen snapshot?
8. Exact audience options in the composer after Circles de-emphasis?
9. Exact responsive breakpoint and maximum Stream width?
10. Was bottom navigation identical across Android app versions in the selected period?

## Product/engineering

1. Final project name/brand?
2. Tailwind versus CSS Modules for the historical design-system implementation?
3. Supabase hosted only, or support local Supabase from day one?
4. Guest demo interactions: read-only or resettable sandbox writes?
5. Profile handles: historical IDs versus modern slugs for implementation URLs?
6. Feed ordering: pure reverse chronology or light documented relevance?
7. Private media delivery: signed R2 URLs or authenticated proxy?
8. Invite system in v1 or development-only until public launch?
9. Should low-confidence historical screens be hidden behind a feature flag until researched?

## Decision rule

Do not block unrelated work on an unanswered question. Block only the phase/component whose behavior depends on it.
