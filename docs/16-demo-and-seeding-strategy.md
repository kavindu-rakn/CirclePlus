# Demo & Seeding Strategy

## Problem

An empty social network destroys the revival illusion. A portfolio visitor should not have to recruit friends before the interface makes sense.

## Primary solution: curated demo universe

Create a deterministic synthetic network with:

- 100–300 demo profiles
- 20–40 Communities
- 40–80 Collections
- several thousand posts/comments/+1s
- realistic follow relationships
- varied media-heavy content
- historically plausible interest categories: Android, photography, programming, astronomy, travel, art, gaming, science, etc.

Numbers may be reduced initially; relationship quality matters more than volume.

## Rules

- do not impersonate real people
- do not copy real former users' content
- use generated/original/openly licensed media
- mark records internally as demo/synthetic
- public UI does not need to shout “fake” on every card, but demo mode should clearly explain that the populated world is synthetic

## Demo modes

### Portfolio visitor

- one-click demo entry
- safe ability to interact within a sandbox
- resettable state

### Development seed

- small deterministic dataset for fast tests

### Full demo seed

- larger dataset for visual/portfolio realism

## Real user seeding

After the product is stable:

- invite a small number of former users
- create a few nostalgia/tech Communities
- ask early testers to create their own profiles/content

## Takeout later

Google Takeout import is a v2 feature. Import only data the user is entitled to restore. Export schemas can inform our importer/domain mapping but must not be presented as Google's internal database schema.

## Why not ActivityPub in v1

Federation adds foreign content semantics, remote identity, signatures, retries, moderation, compatibility problems, and risks turning the Stream into Mastodon content rendered as Google+ cards. This undermines historical restoration and dramatically raises operational scope.
