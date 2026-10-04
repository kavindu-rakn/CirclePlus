# Testing & Quality

## Test pyramid

### Unit

Focus on domain rules:

- audience resolution
- post visibility
- Community role permissions
- reshare restrictions
- notification recipient rules
- block interactions
- feed eligibility

### Integration

- service + database queries
- RLS/authorization boundaries
- media finalization
- search visibility
- moderation actions

### End-to-end

Playwright flows:

1. sign in
2. create post
3. +1/comment/reshare
4. create/follow Collection
5. join/post to Community
6. receive notification
7. search entity
8. block/report
9. restricted post denied to unauthorized user

## Historical visual regression

This is a first-class quality system, not cosmetic QA.

For reference-backed screens:

1. record source screenshot dimensions/date/source;
2. reproduce matching viewport;
3. capture implementation screenshot;
4. compare overlay/diff;
5. document accepted deviations.

Do not blindly use a numeric pixel-diff threshold when the historical screenshot includes dynamic content. Compare component geometry and stable regions.

## Accessibility

Automate what is reliable and manually check:

- keyboard flow
- dialog focus trap
- menu navigation
- visible focus
- screen-reader labels
- contrast
- reduced motion

## Security tests

Mandatory negative tests for:

- limited/private posts
- private Community content
- unauthorized mutations
- object/media access
- moderator/admin boundaries
- blocked-user restrictions

## CI release gates

PR must pass:

- lint
- typecheck
- unit tests
- integration tests as available
- production build
- migration validation
- selected Playwright suite

UI PRs must attach screenshots.

## Performance

Track:

- initial route load
- Stream query latency
- image payload size
- CLS/LCP for key public screens

Do not sacrifice historical appearance for synthetic benchmark scores without discussion.
