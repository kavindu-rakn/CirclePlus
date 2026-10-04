# API & Service Contracts

These contracts are modern implementation choices. They do **not** claim to reproduce Google's internal APIs.

## Contract principles

- authenticated mutations occur server-side
- Zod validates inputs
- domain services perform authorization
- APIs return stable error codes
- cursor pagination for feeds/lists
- idempotency for publish/upload-finalization where retries could duplicate state

## Error shape

```ts
{
  error: {
    code: "POST_NOT_VISIBLE" | "NOT_AUTHORIZED" | "VALIDATION_ERROR" | "RATE_LIMITED" | "NOT_FOUND" | string,
    message: string,
    fieldErrors?: Record<string, string[]>
  }
}
```

Do not leak private-resource existence when authorization policy says it should remain hidden.

## Services

### PostService

- `createPost(actor, input)`
- `editPost(actor, postId, input)`
- `deletePost(actor, postId)`
- `getPost(viewer, postId)`
- `getHomeFeed(viewer, cursor)`
- `resharePost(actor, postId, input)`

### AudienceService

- `resolveAudience(actor, audienceInput)`
- `canViewPost(viewer, post)`
- `canReshare(viewer, post)`
- `filterVisiblePosts(viewer, query)`

### CollectionService

- `createCollection`
- `updateCollection`
- `followCollection`
- `unfollowCollection`
- `getCollectionFeed`

### CommunityService

- `createCommunity`
- `requestJoin`
- `approveJoin`
- `leaveCommunity`
- `createCategory`
- `canPost`
- `canModerate`
- `moderateContent`

### InteractionService

- `plusOnePost`
- `removePlusOne`
- `createComment`
- `editComment`
- `deleteComment`

### NotificationService

- `emit(event)`
- `listForUser`
- `markRead`
- `markAllRead`

### ModerationService

- `reportEntity`
- `listReports`
- `resolveReport`
- `blockUser`
- `unblockUser`
- `suspendUser`

## Proposed route handlers

```text
GET    /api/feed
POST   /api/posts
GET    /api/posts/:id
PATCH  /api/posts/:id
DELETE /api/posts/:id
POST   /api/posts/:id/+1
DELETE /api/posts/:id/+1
POST   /api/posts/:id/comments
POST   /api/posts/:id/reshare

GET    /api/collections
POST   /api/collections
POST   /api/collections/:id/follow

GET    /api/communities
POST   /api/communities/:id/join
POST   /api/communities/:id/posts

GET    /api/notifications
POST   /api/notifications/read

GET    /api/search
POST   /api/reports
POST   /api/blocks
```

Server Actions may replace route handlers for same-origin UI flows. Keep externalizable boundaries clean enough for future tools/importers.

## Pagination

Use opaque cursors, e.g. based on `(created_at, id)` rather than offset pagination for high-churn feeds.

## Idempotency

Use idempotency keys for:

- publish post
- reshare
- finalizing uploaded media
- import jobs

## Event model

Domain events may be in-process initially:

- `post.created`
- `comment.created`
- `post.plus_oned`
- `user.followed`
- `community.joined`

Notification creation consumes these events synchronously or through a lightweight job path later.
