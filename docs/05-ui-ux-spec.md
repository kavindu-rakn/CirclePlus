# UI/UX Specification

## Design target

Material Design 1-era Google+ as experienced around late 2016 / early 2017.

This document intentionally does not hard-code final pixel values until the reference pack provides evidence. Tokens should be measured from screenshots/archived material and recorded centrally.

## Visual language

### Required characteristics

- Roboto-era typography where legally/technically appropriate
- strong red app-bar treatment for the selected snapshot
- white content cards on a light gray application canvas
- MD1 drop-shadow/elevation behavior
- compact typography and information density
- square/very-low-radius surfaces rather than contemporary rounded cards
- historical Material iconography or independently recreated equivalents
- floating compose action on mobile where supported by evidence
- large photographic media surfaces
- subdued dividers and metadata

### Avoid

- Material You tonal surfaces
- glass/blur
- gradient backgrounds
- capsule navigation
- excessive 20–32px corner radii
- huge whitespace
- modern social-media reaction rows
- dark mode unless deliberately introduced as a clearly non-historical optional mode after v1

## Design tokens

Create repository-owned tokens such as:

```css
--gplus-primary
--gplus-app-bg
--gplus-surface
--gplus-divider
--gplus-text-primary
--gplus-text-secondary
--gplus-elevation-card
--gplus-elevation-fab
--gplus-elevation-fab-active
--gplus-toolbar-height
--gplus-nav-width
--gplus-card-width
--gplus-content-gap
```

Do not finalize values from memory. Attach evidence in the reference register.

## Core components

Recommended internal component layer:

```text
HistoricalAppBar
HistoricalNavDrawer
HistoricalIconButton
HistoricalFab
HistoricalCard
HistoricalMenu
HistoricalDialog
HistoricalTabs
HistoricalAvatar
HistoricalTooltip
HistoricalSnackbar
PostCard
PostComposer
PostActions
CommentThread
NotificationTray
ProfileHeader
CollectionCard
CommunityCard
CommunityHeader
PeopleCard
AudienceSelector
```

## Home Stream

- Preserve historical card widths, gutters, and one/two-column behavior where evidence is strong.
- Do not auto-add three/four columns on ultrawide screens merely to use space.
- If modern viewport width exceeds historical expectations, center the historical layout or use a conservative extension documented as Tier C modernization.
- Media should preserve historical crop/aspect behavior per card type.

## Post card anatomy

Expected regions:

1. author avatar/name
2. Collection/Community context where applicable
3. visibility + timestamp metadata
4. text body
5. link/media block
6. action row (+1, comment, share)
7. counts and previewed comments as supported by the selected snapshot

## Composer

- Initial state should match the compact "What's new with you?" style entry surface where evidence supports it.
- Expanded composer should preserve historical destination/audience concepts.
- Community posts must expose Community/category context.
- Collection association must be explicit.

## Collections

Key views:

- discovery/browse
- Following
- Yours
- Collection detail
- profile-associated Collections

Collection cards should be image-forward and strongly period-specific.

## Communities

Include:

- Community header/cover
- membership state
- category navigation
- Stream
- member/moderator affordances
- moderation state when relevant

## Profiles

The selected era should emphasize:

- identity/header
- Posts
- About
- Collections
- Communities/follow relationships where historically visible

Do not restore old 2013-era Circles-first profile structure.

## Notifications

The notification surface should be visually treated as an important nostalgia component, not a generic modern notifications page. Reconstruct tray/panel behavior from references before implementation.

## Responsive policy

- Desktop, tablet, and mobile may have different historical interaction structures.
- Use modern CSS for resilience, but keep the same visible information hierarchy.
- Current phone aspect ratios may require extra vertical room; do not enlarge historical components simply because the screen is taller.
- Honor safe areas without making them visually dominant.

## Motion

Use restrained MD1-style motion:

- ripple feedback
- FAB elevation/state changes
- drawer/menu/dialog transitions
- snackbars

Exact timings/easings should be measured from source material where possible.

## Accessibility

Modern semantics are mandatory even when not historically visible:

- keyboard reachability
- focus indicators compatible with the historical visual language
- meaningful labels
- reduced-motion handling
- color contrast checks

Accessibility improvements should not redesign the interface.
