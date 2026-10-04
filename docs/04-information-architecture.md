# Information Architecture

## Primary desktop navigation

Canonical target navigation should be derived from evidence for the chosen late-2016/early-2017 snapshot. Expected top-level concepts:

- Home
- Collections
- Communities
- Profile
- People
- Settings
- Help / feedback where recreated

Circles should not be promoted to an early-Google+ primary destination unless historical evidence for the chosen snapshot requires it.

## Proposed route map

These are modern implementation routes, not claims about Google's original URLs.

```text
/
/home
/people
/people/:handle
/collections
/collections/:id
/communities
/communities/:id
/communities/:id/category/:categoryId
/posts/:id
/search?q=
/notifications
/settings
/moderation            # privileged
/admin                  # privileged
/demo                   # portfolio demo entry
```

## Desktop shell

```text
Top app bar
├─ hamburger/menu
├─ product/section title
├─ search
├─ apps/utility icon placeholders only if historically justified
├─ notifications
└─ avatar/account

Left navigation rail/drawer
└─ section links

Main content
├─ composer
└─ one/two-column Stream depending on historical breakpoint evidence
```

## Mobile shell

Expected period pattern:

- top app bar
- drawer or contextual navigation
- single-column Stream
- prominent compose FAB
- bottom navigation where historically confirmed for the selected mobile snapshot

Do not merge desktop and mobile into one generic responsive layout if evidence shows different interaction models.

## Key flows

### Create a normal post

Home → composer → content/media → audience/Collection selection → publish → Stream insertion → notification events for interactions.

### Post to Community

Community → category/destination → composer → membership/moderation authorization → publish/pending review → Community Stream.

### Follow Collection

Collections → Collection detail → Follow → Collection appears in followed state and contributes eligible posts to Home.

### Audience-restricted post

Composer → audience selector → Circles/specific people where historically supported → publish → server-side audience snapshot/visibility rule → unauthorized users denied.

### Report

Post/comment/profile → overflow menu → Report → category → record report → moderation queue.

## URL and deep-link policy

- Public profiles, Collections, Communities, and public posts should be deep-linkable.
- Private/limited resources must return authorization-safe responses and must not leak existence through metadata beyond the selected policy.
