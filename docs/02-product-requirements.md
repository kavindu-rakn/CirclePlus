# Product Requirements Document

## Problem

Google+ consumer service shut down in 2019. The 2015–2017 New Google+ experience no longer exists as an interactive product. Static screenshots do not reproduce the feeling of navigating the Stream, following Collections, joining Communities, posting, +1ing, commenting, receiving notifications, and using the responsive interface.

## Product goal

Provide a working, self-contained restoration of the 2015–2017 New Google+ experience for nostalgia, preservation, and portfolio demonstration.

## Core user stories

### Visitor / demo user

- I can open a populated Stream immediately.
- I can inspect realistic profiles, Collections, and Communities.
- I can experience the historical UI without creating an account.

### Registered user

- I can create and edit a profile.
- I can follow people and Collections.
- I can create posts with text/media/links.
- I can +1, comment on, and reshare content where permitted.
- I can create/follow Collections.
- I can join/post to Communities subject to membership/moderation rules.
- I can search for people, Communities, Collections, and public posts.
- I can receive in-app notifications.
- I can organize audiences through lightweight Circle/list semantics where historically relevant.
- I can report/block content/users.

### Community moderator

- I can review membership requests when required.
- I can moderate Community posts/comments.
- I can manage Community categories and member roles within the selected era's supported scope.

### Administrator

- I can review reports.
- I can remove abusive content.
- I can suspend/ban accounts.
- I can manage invite access and demo seed data.

## Functional requirements

### Identity

- authentication
- profile avatar/cover/about data
- follow/unfollow
- historical profile layout

### Stream

- cursor-based pagination
- eligible posts from followed people/Collections/Communities
- simplified ranking initially: chronological/relevance rules documented in code
- historical post card rendering

### Publishing

- composer
- text
- image media
- link previews
- optional Collection destination
- Community/category destination
- audience selection where applicable
- edit/delete subject to historical behavior and project policy

### Interactions

- +1
- comments
- reshare
- mentions

### Collections

- create/edit
- cover/theme metadata
- add posts
- follow/unfollow
- browse Featured/Following/Yours-style surfaces where historically supported

### Communities

- public/private/request-to-join modes where supported
- categories
- members
- owner/moderator/member roles
- Community Stream
- moderation basics

### Notifications

v1 includes a focused in-app notification surface for:

- +1
- comment
- mention
- follow
- Community membership/activity events
- Collection-related events where supported

### Search

Search public:

- people
- Collections
- Communities
- posts

### Safety

- invite-first registration option
- rate limiting
- report
- block
- moderation dashboard
- audit actions

## Non-functional requirements

- responsive and usable on current browsers
- period-faithful desktop and mobile rendering
- WCAG-aware semantics without visual redesign
- server-side authorization
- migration-driven database
- repeatable seed/demo data
- automated tests for privacy and critical flows
- reasonable free/near-free operating cost at portfolio scale
- documented backup/restore strategy

## Non-goals

- full Hangouts
- Google Photos recreation
- Google's proprietary recommendation ML
- enterprise Google+/Currents
- 2011–2014 UI
- ActivityPub in v1
- mainstream public growth
