# Research Evidence Register

## Source set

Primary research inputs currently available to this repository planning effort:

1. **Gemini Deep Research report:** `Gemini-GPlus.pdf`
2. **Perplexity report:** `Perplexity-GPlus.pdf`
3. User-provided screenshots showing the post-2015 desktop and mobile Google+ UI
4. Follow-up project decisions made after comparing the reports

The PDFs are research summaries, not primary historical artifacts. Claims inside them should be traced to their cited original sources before being treated as pixel-level truth.

## p0-03 audit note (2026-10-06)

The [repository audit](22-repository-evidence-audit.md) inspected the four raw images and the two report files. At baseline main `b415b55a956fa881c7f422dfb78725b2cc9aa427`, `docs/reference/` contains two guides and no per-artifact records. Visible Home/Collections/Communities examples are collection leads; source dates, builds, platform variants and CSS viewports remain unverified. A filename date, PDF export date or device-composite raster size is not a verified product date or viewport. Expanded composer/audience, profile/About, notification tray and other detail/behavior states remain gaps in the raw image set.

The high-confidence conclusions below retain their inherited research confidence; this audit does not independently verify their original citations. Exact visual/interaction claims still require evidence. See the [minimum reference set and gap table](22-repository-evidence-audit.md) and [p0-04 through p0-08 collection/approval plans](../plans/PHASE-0-1-BACKLOG.md). No canonical snapshot, token value or behavioral policy is selected here; Phase 0 exit remains unfulfilled.

## High-confidence historical conclusions

| Claim | Confidence | Notes |
|---|---|---|
| New Google+ launched in Nov 2015 | High | Both reports agree and cite contemporaneous material |
| Communities and Collections became central | High | Core stated redesign direction |
| Circles were de-emphasized but persisted for sharing/filtering | High | Both reports agree |
| Hangouts and Photos were decoupled from the main product | High | Both reports agree |
| UI was Material Design 1-influenced and responsive/card-based | High | Strongly documented |
| 2016–2017 is the mature target era | High | Both reports converge, with slightly different anchor recommendations |
| Notifications changed during 2016–2017 | Medium-High | Exact tray visuals/interactions need reference capture |
| Events were absent/reintroduced around the transition | Medium-High | Exact selected-version behavior must be pinned |

## Project decisions derived from research

These are **not historical facts**; they are implementation decisions:

- visual anchor: late 2016 / early 2017
- feature envelope through approximately mid-2017
- visually/behaviorally faithful rather than merely spirit-faithful
- custom MD1 component system
- modular monolith
- Supabase/PostgreSQL + Drizzle
- R2 for media
- simplified notifications in v1
- lightweight Circles/audiences in v1
- ActivityPub excluded from v1
- Hangouts excluded from v1
- curated synthetic demo universe

## Claims requiring verification before implementation

### Visual details

- exact primary red value for selected snapshot
- exact desktop toolbar height
- exact content/card widths
- breakpoint at which two-column Stream collapses
- card corner radius/elevation in the chosen snapshot
- composer expanded layout
- notification tray geometry and copy
- exact mobile bottom-navigation composition by app version
- icon SVG/path choices

### Interaction details

- comment expansion/modal behavior in chosen date
- reshare restrictions for limited audiences
- whether Circle membership changes affected already-published audience access dynamically
- exact edit history/edited labels
- Community approval queue behavior in chosen sub-era
- Collection visibility options
- notification event matrix

## Evidence collection priorities

1. Official Google blog/product posts from Nov 2015 through mid-2017.
2. Wayback/Archive.org captures of key routes.
3. Archived Android APK screenshots/recordings for the chosen app version.
4. Contemporary screenshots from tech coverage.
5. Former-user screenshots for notification/settings/edge states.
6. Material Design 1 specification for generic component behavior only—not as a substitute for product-specific evidence.

## Evidence record format

For every captured artifact, record:

```text
ID:
Date:
Platform: web / Android / iOS
Screen/feature:
Source URL/archive identifier:
Viewport/device if known:
Confidence:
What it proves:
What it does NOT prove:
Local reference path:
```
