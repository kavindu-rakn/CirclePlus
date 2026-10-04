# Realtime & Notifications

## Why notifications are v1

Although notifications add complexity, the notification bell/tray is a strong part of the remembered 2016–2017 experience. v1 therefore includes a deliberately constrained in-app implementation.

## v1 notification types

- someone +1'd your post
- someone commented on your post
- someone mentioned you
- someone followed you
- Community membership request/approval where applicable
- Community moderation event relevant to the recipient
- Collection follow/activity only where historically justified

## Data model

Suggested fields:

```text
id
recipient_user_id
actor_user_id?
type
entity_type
entity_id
payload_json   # minimal rendering context, not authoritative object state
read_at?
created_at
```

## Delivery

1. Domain action succeeds.
2. NotificationService decides recipients.
3. Row inserted.
4. Supabase Realtime notifies subscribed recipient client.
5. Client invalidates/refetches notification query and updates badge/tray.

Do not trust realtime payloads as the sole source of truth.

## Read state

- individual mark-read
- mark-all-read
- badge count based on unread rows

## UX fidelity

The panel/tray behavior must be reconstructed from historical references. The data model should not force a generic full-page notifications design.

## Out of v1

- email notifications
- web push
- mobile push
- complex notification preferences
- cross-device guaranteed delivery semantics
