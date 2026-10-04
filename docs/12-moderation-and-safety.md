# Moderation & Safety

## Launch posture

Start **invite-first**. Public registration is not necessary for portfolio value and dramatically increases moderation burden.

## Required v1 safety features

### Reporting

Reportable:

- post
- comment
- profile
- Community where appropriate

Initial reasons:

- spam
- harassment
- sexual/NSFW content
- illegal/harmful content
- impersonation
- other

### Blocking

Blocking must be enforced server-side. Expected policy:

- blocked users' content hidden from blocker
- blocked user cannot mention/comment on blocker's content where policy requires
- direct profile visibility behavior should be decided explicitly

### Rate limits

Apply to:

- signup/login attempts
- post creation
- comment creation
- reports
- follows/+1 bursts
- uploads

Limits should be configuration-driven, not hard-coded in UI.

### Community moderation

v1 minimum:

- owner/moderator roles
- remove post/comment
- remove/ban member
- handle join requests if Community mode requires it

### Admin moderation

- report queue
- inspect context
- delete/restore if supported
- suspend/ban account
- audit log

## Spam controls

Start simple:

- invite tokens
- verified email if public signup opens
- CAPTCHA if needed
- duplicate/repeated-post heuristics
- excessive-link heuristic
- domain deny list for obvious abuse

Do not begin with ML moderation.

## Demo universe safety

Synthetic demo users must be clearly non-real internally and must not impersonate real people. Avoid copyrighted profile photos without permission; use generated/original/openly licensed assets.

## Public launch gate

Do not open broad signup until:

- report/block functions tested
- admin moderation works
- basic rate limiting works
- invite or CAPTCHA friction exists
- Terms/Community Guidelines are linked
- private-content authorization tests pass
