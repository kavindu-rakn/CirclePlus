# Project Charter

## Purpose

Recreate the New Google+ consumer experience that existed after the November 2015 redesign, with enough visual and behavioral fidelity that a former 2015–2017 user recognizes it as the product they remember rather than as a modern social application wearing a retro theme.

## Audience

1. The primary developer and maintainer.
2. Former Google+ users interested in the 2015–2017 era.
3. Recruiters/engineers reviewing the repository as a software-engineering portfolio project.
4. Open-source contributors interested in product preservation.

## Project character

- solo-led
- open source
- non-commercial
- portfolio-hosted
- nostalgia/preservation motivated
- not intended for mainstream growth or hyperscale operation

## Product principles

1. **Restore, do not reinterpret.**
2. **Interest graph over social graph.** Communities and Collections define the selected era.
3. **Evidence over memory.** Historical sources arbitrate disagreements.
4. **Modern internals, historical surface.** Modern security, deployment, data design, accessibility, and testing are encouraged.
5. **Ship a coherent era, not every Google+ feature ever made.**
6. **Protect the fun.** Avoid scope that converts a hobby restoration into permanent infrastructure work.

## Success criteria

The project is successful when:

- a past 2015–2017 user can identify the era without explanation;
- the main Stream, Collections, Communities, profile, composer, +1/comment/share, and notification flows work end to end;
- desktop and mobile layouts are recognizably period-correct;
- privacy/audience behavior is enforced server-side;
- the public demo is populated enough to feel alive;
- the codebase demonstrates clean architecture, testing, migrations, moderation basics, and CI;
- the project can be run locally by another developer from repository documentation.

## Non-goals

- recreating Google infrastructure
- rebuilding 2011–2014 Google+
- launching a new social-media business
- competing with Mastodon, Reddit, Facebook, or modern networks
- full Google ecosystem integration
- raw WebRTC/Hangouts implementation
- ML recreation of Google's proprietary feed ranking
- ActivityPub federation in v1
- using Google branding in a way that implies affiliation
