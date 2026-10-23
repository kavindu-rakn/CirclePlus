# p0-05 route, page and state evidence matrix

Prepared 2026-10-23 (Asia/Colombo), based on merged main `89aabb6bde0c3b53b21ff3c9ec9a40c8359de6ab` and the twelve p0-04 records in the [source inventory](source-inventory.md). Research only. This is coverage with explicit gaps, not a canonical selection, token specification, implementation approval or Phase 0 exit pass. The [eight audit groups](../22-repository-evidence-audit.md#proposed-minimum-reference-set-collection-target-not-completed-research) and every proposed route in [docs/04](../04-information-architecture.md#proposed-route-map) are mapped below.

The 2015 Home desktop/mobile-web composite and separate Android Home still are usable **comparison candidates**. Their capture/build/viewport limits prevent a compatible late-2016/early-2017 canonical pair from being claimed. No candidate or platform is chosen here. p0-06 remains unstarted; approval belongs to that separately authorized task and the developer.

## How to read coverage

- **V**: visible appearance in an inspected still; no click/gesture inferred.
- **D**: source documentation or annotation supports a stated action, within its platform/date scope; no executable test implied.
- **X**: missing acquisition/unknown behavior. `M1` through `M12` are local acquisition-gap labels, not new roadmap tasks. Each has an owner and dependent gate below.
- REF confidence is claim-specific: high for visible pixels/source association can coexist with unknown capture date, build, CSS viewport, DPR or target-era persistence. Overall task confidence is medium for the organized evidence, not medium for all unknown states.

Every source refers to its own publication/context date. October 23 is this research access/inspection date, never a historical capture date. New sources are locators/notes only. Four supplied images were opened at their full local raster sizes (AVIF decoded losslessly to an ignored PNG for viewing); the originals and two PDFs remain byte-for-byte unchanged. Perplexity p. 3 was rendered/reviewed as a report lead, not a primary screen reference. No new media is redistributed.

## Reference key and date/platform limits

The original twelve records remain starting inputs. The four additions expand a bounded set of states; they do not imply complete coverage.

| REF / resolving record | Evidence kind and date/platform context | What can be used / limit |
|---|---|---|
| [REF-2015-001](web/2015/REF-2015-001-responsive-home.md) | Google responsive-web case study, November 2015 context | V desktop + mobile-web Home composite; no exact build, viewport or later persistence |
| [REF-2015-002](android/2015/REF-2015-002-collections.md) | Android Collections, November 18, 2015 coverage | V browse/Featured selected and Follow labels; no follow outcome |
| [REF-2015-003](android/2015/REF-2015-003-communities.md) | Android Communities, same dated gallery | V Recommended selected/Join labels; no membership transition |
| [REF-2015-004](web/2015/REF-2015-004-announcement.md) | Google launch announcement, November 17, 2015 | Product/platform context; no measured geometry or analyzed animation |
| [REF-2015-005](android/2015/REF-2015-005-home-candidate.md) | Android Home, November 18, 2015 gallery | V closed-drawer Home/compose entry; updated viewer observation, no app interaction |
| [REF-2016-001](web/2016/REF-2016-001-update-announcement.md) | Google August 30, 2016 announcement | D richer comments, approved posting and web notification center announced; rollout/build not pinned |
| [REF-2017-001](web/2017/REF-2017-001-january-update.md) | Google January 17, 2017 announcement | D comment reveal and web photo zoom; density change is a version boundary, no breakpoint |
| [REF-2017-002](web/2017/REF-2017-002-google-bar-limit.md) | February 21, 2017 cross-product report | Limiting evidence: cannot substitute its new Google-bar panel for Google+ |
| [REF-UNDATED-001](undated/REF-UNDATED-001-gemini-report.md) | Generated report, no historical capture | Citation leads only; no independent screen/behavior proof |
| [REF-UNDATED-002](undated/REF-UNDATED-002-perplexity-report.md) | Generated report; 2026 export, broader era | Citation leads only; notification generalization remains qualified |
| [REF-UNDATED-003](undated/REF-UNDATED-003-home-collections-composite.md) | Unattributed mobile-style composite | V preview/actions only; date and native/web platform unresolved; cannot resolve M1 |
| [REF-UNDATED-004](undated/REF-UNDATED-004-updated-guide.md) | Current guide updated 2023 | Link chain only here; unchanged 2015 settings/flow not verified |
| [REF-2015-006](android/2015/REF-2015-006-drawer.md) **new** | Same 2015 Android gallery, slide 1 | V drawer-open comparison; article describes slide-out navigation, no gesture/timing proof |
| [REF-2015-007](android/2015/REF-2015-007-profile.md) **new** | Same 2015 Android gallery, slide 5 | V owner profile/posts entry; About and visitor Follow remain missing |
| [REF-2015-008](android/2015/REF-2015-008-settings.md) **new** | Same 2015 Android gallery, slides 2/6 | V distinct general/account settings; unchecked options, no toggle/submenu behavior |
| [REF-2017-003](interactions/REF-2017-003-comment-comparison.md) **new** | Google January 2017 annotated mobile comparison | V menu and additional-comments state; D intended reveal, exact mobile client unknown |

## Proposed implementation routes, not historical Google URLs

No route below is asserted to have existed at Google. No redirect, alias or page-versus-overlay behavior is selected merely because the proposed route exists. Composer, audience and safety overlays have no separate proposed route in docs/04; they are explicitly covered after this table.

| Proposed route (all 16 entries from docs/04) | Core group / related surface | Resolving evidence and outstanding route/page/state gate |
|---|---|---|
| `/` | Home desktop + Home mobile; demo/entry | Home candidates REF-2015-001/005. Root entry/redirect and signed-out treatment unknown: M1, M12 |
| `/home` | Home desktop + Home mobile; composer/post feed | Same candidates; full target-era pair, drawer states and responsive collapse missing: M1-M3 |
| `/people` | Later People/following | Navigation labels only REF-2015-001/006; People content/selected state absent: M9 |
| `/people/:handle` | Profile/About | Owner Android candidate REF-2015-007; web/visitor/About absent: M7. Handle route is project proposal |
| `/collections` | Collections | Android browse REF-2015-002; web and Following/Yours content absent: M5 |
| `/collections/:id` | Collections detail + associated posts/composer | No inspected detail/follow outcome/create/edit: M5; compose destination M4 |
| `/communities` | Communities | Android browse REF-2015-003; web and Member/Yours content absent: M6 |
| `/communities/:id` | Communities detail + membership/posting | Detail/join/request states missing M6; approved-posting announcement REF-2016-001 does not resolve them |
| `/communities/:id/category/:categoryId` | Communities category + composer context | No selected-category/posting evidence: M6, M4. No invented category navigation behavior |
| `/posts/:id` | Post/detail/comments + reshare/composer | Feed anatomy REF-2015-001; mobile comment comparison REF-2017-003. Deep-link container/client match, expanded thread and reshare missing: M3-M4 |
| `/search?q=` | Later Search | Search entry visible REF-2015-001; results/filters/empty/query behavior missing: M9 |
| `/notifications` | Notifications | REF-2016-001 announces center; no inspected open center/tray/read state: M8. Route does not decide page versus tray |
| `/settings` | Later settings | 2015 Android stills REF-2015-008; target web/client controls and selected/changed states missing: M10 |
| `/moderation` | Community moderation + project safety operations | REF-2016-001 feature context only; queues/actions/confirmation evidence missing: M6, M11 |
| `/admin` | Privileged project operations | Project requirement in docs/02/09, no claim of consumer Google admin UI: M11-M12 |
| `/demo` | Portfolio demo entry | Project requirement, no historical equivalent asserted; sign-in/write/reset policy and design remain M12 |

### Source and original-URL ledger (separate from routes)

| Source/original locator | What the locator identifies; what remains unknown |
|---|---|
| [Google case study](https://web.dev/case-studies/googleplus), formerly `developers.google.com/web/showcase/case-study/googleplus` | Primary source page for REF-2015-001, not an original Google+ Home URL. Screenshot browser address is not visible; exact product Home URL unverified here |
| [Google launch](https://blog.google/products-and-platforms/products/google-plus/introducing-new-google/), migrated from `googleblog.blogspot.com/2015/11/introducing-new-google.html` | Announcement, not a route map; no new archived replay verified |
| [Android Police gallery](https://www.androidpolice.com/2015/11/18/google-app-updated-to-v6-8-to-begin-rolling-out-the-new-ui-apk-download/) | Publisher locator for Android stills, not web routes or Android deep links |
| [Google August update](https://blog.google/products-and-platforms/products/google-plus/bringing-new-google-more-people/) / [January update](https://blog.google/products-and-platforms/products/google-plus/making-googleplus-work-better-for-you/) | Publication/feature boundaries, not proof of every account's availability or exact original post URLs |
| Original profile/Collection/Community/category/post/notification/settings Google URLs | Not established by these inspected UI images. No guessed historical permalink pattern is substituted. Modern paths above stay proposals |

## Eight core groups by platform

Platform columns are independent. An Android state never fills a mobile-web cell. The unclassified mobile example REF-2017-003 stays outside identified-client cells. `X M2` covers missing iOS **and** tablet variants; tablet web/Android are also distinct from phone.

| Audit group | Desktop web | Mobile web | Native Android phone | Native iOS phone | Tablet web / Android / iOS |
|---|---|---|---|---|---|
| Home desktop | V REF-2015-001 comparison; target full/narrow views X M1 | Not a desktop reference; Home mobile row | Not a desktop reference | Not a desktop reference | X M1-M2; no measured tablet shell |
| Home mobile / shell | Desktop companion only; row above | V REF-2015-001 phone, drawer closed; X M1-M2 | V REF-2015-005 closed + REF-2015-006 open; X M1-M2 later build | X M2; announcement support is not a screen | X M2 for all three variants; no phone stretch inferred |
| Post/detail/comments | V feed REF-2015-001; D REF-2017-001 web zoom; X M3 | V media card REF-2015-001; X M3 detail/comments | V Home excerpt REF-2015-005; X M3 full detail/thread | X M2-M3 | X M2-M3 |
| Composer/audience | V compact entry REF-2015-001; X M4 expanded/selector | V pencil entry REF-2015-001; X M4 | V pencil REF-2015-005; X M4 | X M2-M4 | X M2-M4 |
| Collections | Only nav/context REF-2015-001; X M5 browse/detail | X M5 | V REF-2015-002 Featured; X M5 detail/follow | X M2, M5 | X M2, M5 |
| Communities | Only nav REF-2015-001; X M6 | X M6 | V REF-2015-003 Recommended; X M6 detail/join | X M2, M6 | X M2, M6 |
| Profile/About | Only nav REF-2015-001; X M7 | X M7 | V owner profile REF-2015-007; X M7 visitor/About | X M2, M7 | X M2, M7 |
| Notifications | V bell REF-2015-001 + D center announcement REF-2016-001; X M8 | V bell REF-2015-001; X M8 | V bottom destination REF-2015-005; X M8 open/read states | X M2, M8 | X M2, M8 |

Unclassified mobile REF-2017-003 partially covers post comments and overflow appearance, including a Report abuse label. It does **not** identify which platform cell to fill; M3 and M11 stay open. REF-UNDATED-003 similarly cannot fill an identified-client/date cell. Platform/build confidence is unknown for those assignments, even though visible content confidence is high.

## State and transition ledger

Required states below come from the audit/product plans; a listed need is not proof that Google used that exact interaction. No recording was verified in this increment. Static sequences, publisher gallery navigation, visible controls and prose are distinguished explicitly.

| Group / needed states | Observed state coverage | Transition support / missing states |
|---|---|---|
| Home desktop: navigation exposed/closed/selected, wide/narrow stream | V left navigation exposed, Home emphasized, compact composer and two card columns in REF-2015-001 | No proof whether exposed nav is pinned or an opened drawer. Close/reopen, selected destination result, narrower state, scroll loading and breakpoint X M1 |
| Home mobile: drawer closed/open, Home selected, compose entry | V mobile-web hamburger/one card column REF-2015-001; Android closed Home REF-2015-005 and open drawer REF-2015-006 | Android article describes slide-out menu (D) in 2015. Separate stills do not prove gesture, motion, closing or target-era behavior; mobile-web open state X M2. Snackbar tap/refresh X M3 |
| Posts: text/media/link/context/visibility/actions, collapsed/expanded/detail | V image/link/context/Public/actions REF-2015-001; inline comment preview only in unclassified REF-UNDATED-003; V annotated menu/additional comments REF-2017-003 | D intended reveal from Google text/annotation. Text and pictured menu use different labels; exact client unknown. No +1 selected/unselected transition, comment submit/edit/delete, reshare flow, detail-container/return, text-only full example or visibility variants: M3-M4 |
| Composer/audience: entry/expanded, closed/open/selected audience and destination, publish/cancel | V desktop compact entry and mobile/native pencil only, REF-2015-001/005 | Expanded editor, attachment/link states, selector options, selection persistence, Collection/Community/category context, publish/cancel and edited post all X M4. No server privacy semantics inferred |
| Collections: Featured/Following/Yours, detail, follow/unfollow, create/edit/visibility | V Featured selected, other tab labels and unfollowed Follow controls, REF-2015-002 | Switching tabs, opening detail, following/result/unfollowing, existing-follow state, creation/edit and visibility options X M5. Labels alone do not prove flow or exact selected target-era tabs |
| Communities: Recommended/Member/Yours, detail/category, join/request/member/moderator | V Recommended selected and Join controls, REF-2015-003 | D approved posting announcement REF-2016-001 only. Tab results, selected category, direct join versus request, pending/member/leave, posting context and moderation states X M6; role/visibility policy unresolved |
| Profile/About: owner/visitor, Posts/About, follow/edit/field visibility | V owner identity/header/Edit Profile/posts entry REF-2015-007 | Opened About, visitor Follow/followed, edit result, field visibility selector and target web organization X M7. An info icon is not proof of the resulting About surface |
| Notifications: closed badge, open center/tray, unread/read, empty, entry/dismiss | V bell/destination only REF-2015-001/005; no verified count semantics | D web center announced REF-2016-001. Open/close/selected/empty/read/dismiss and cross-surface relation X M8. REF-2017-002 prevents importing another product's panel |

### Later and project-owned surfaces remain visible

| Surface (route or overlay) | Available evidence / required states | Owner / dependent gate |
|---|---|---|
| People and Search | Nav/search-entry appearance only; browse/follow lists, typed query, results/filter/empty/selected/loading/denied states unknown | M9; p6-03, plus p3 follow/audience rules |
| Settings | REF-2015-008 general/account appearances, unchecked options. Checked/persisted/submenu states, web/iOS/tablet and era match missing | M10; p6-07. No account integrations copied into scope |
| Report/block (post/comment/profile overlays; no separate proposed route) | REF-2017-003 menu includes Report abuse; report categories/confirmation/success and block entry/confirmation/effects unknown | M11; p6-04 and privacy gates. Visible menu is not a complete report flow |
| Community moderation and privileged moderation/admin | D approved posting feature context only; queue/selected item/approve/reject/roles/category-management/denied states missing. Project admin/report queue is an implementation need, not evidenced Google consumer UI | M6, M11; p5-05, p6-05 and authorization tests |
| Demo, root entry and registration | No Google equivalent claimed for demo/reset/invite policy. Account/menu and signed-in examples do not establish modern sign-in or demo transitions | M12; p6-06, p8; developer policy approval before dependent work |
| Help/feedback and account utility affordances (no extra route proposed) | Labels in REF-2015-001 and drawer/settings examples; destination dialogs/actions not inspected | M10-M12; preserve later evidence/policy gate rather than invent help/account integrations |
| Later native variants / iOS / tablet | Broad launch announcement REF-2015-004 and responsive claim do not supply matching screenshots; no app installed or APK executed | M1-M2; p0-06 compatibility, p7 mobile fidelity. No coverage reduction selected |

## Source-sized observations, raster versus viewport

These are qualitative geometry observations and artifact dimensions, **not p0-07 token measurements**. No CSS/dp size, color value, radius, shadow, breakpoint or timing is set.

| Inspected artifact | Raster / visible structure | Geometry uncertainty |
|---|---|---|
| REF-2015-001 supplied JPEG | 1600 x 1020 entire composite; desktop red bar, left navigation and two unequal-height card stacks; phone overlaps desktop and shows one card column/FAB | Device frames, occlusion and inset screens prevent treating raster as viewport. No browser chrome/scale/DPR; responsive collapse cannot be found from two depictions |
| REF-UNDATED-003 supplied JPEG | 800 x 630 entire side-by-side composite; link card/preview on left, two-column Collection tiles on right | Two cropped UI panels, not a continuous viewport; platform/date/scale and equal capture conditions unknown |
| REF-2015-002 supplied AVIF | 1080 x 1920; system bars, toolbar/tabs, two-column colored cards and bottom destinations; Featured underline | Raster includes OS regions; dp/DPR unknown; clipped lower cards do not specify scrolling or responsive behavior |
| REF-2015-003 supplied JPEG | 415 x 737; system bars, green toolbar/tabs, two-column Community cards with Join and bottom destinations | Resized-source history unknown; do not use apparent size difference from AVIF as a UI change |
| REF-2015-005/006/007/008 publisher viewer | 1080 x 1920 delivered derivatives observed for Home, drawer, profile and both settings stills; inline gallery uses smaller derivatives | Publisher `dpr=1.5` is an image-service option. Neither it nor a 1080-wide derivative identifies original device scale/build. Viewer fits image to current browser; no numerical UI measurements taken |
| REF-2017-003 page-rendered comparison | 1200 x 603 natural size of delivered derivative, displayed scaled; side-by-side mobile post/menu and additional-comment states with annotations | Composite/annotations, not a product viewport; direct media navigation blocked. No source-sized original acquired, exact client unknown |

For later implementation comparisons, acquire an unobscured same-platform screenshot with documented viewport/device and DPR, record crop/scale, and render the implementation at that matching context. The current browser's viewport and today's publisher derivative sizes are not historical viewport evidence. The January density announcement also prevents assuming 2015 geometry persisted unchanged.

## Missing acquisitions, accountable owners and dependent gates

These refine p0-04 G1-G5; they do not erase them. **Control Tower** owns scheduling a bounded acquisition revisit; the named **coverage Builder** performs only authorized research, and persistent **Historian** verifies provenance/platform claims. The developer owns consequential variant/policy approvals. This handoff assigns responsibility, not permission to start any dependent task.

| Gap | Specific missing acquisition / current limit | Named owner / gate |
|---|---|---|
| M1 - target Home compatibility (G2/G5) | Unobscured dated Q4-2016/Q1-2017 desktop Home plus narrower web state and compatible mobile Home with usable viewport/scale. Bounded primary checks did not acquire this pair; 2015 comparisons cannot fill it | Control Tower schedules next authorized coverage Builder; Historian checks compatibility; p0-06 developer selection, p0-07 and p1-04 remain gated |
| M2 - platform shell/state gaps (G5) | Target mobile-web open/closed/selected navigation; later Android; iOS phone; tablet web/Android/iOS, each identified independently | Coverage Builder via Control Tower; Historian platform check; p0-06 and p7, no implied platform reduction |
| M3 - post and comment states (G3) | Identified-client target detail/thread, +1 states, comment creation/edit and return; match annotated 2017 reveal to client/labels; reshare/container behavior | Coverage Builder + Historian; p0-08 unresolved behavior and affected p2 flows |
| M4 - composer/audience (G3) | Expanded/attachment/audience/destination selected and cancel/publish states, context/category and restrictive-share evidence | Coverage Builder; Historian checks era; developer resolves ambiguity in p0-08 before p2-04, p3-04/privacy work; no rule chosen here |
| M5 - Collections (G3) | Dated web/mobile browse alternatives and detail/follow result/create/edit/visibility | Coverage Builder + Historian; p0-08 and p4 affected UI/services |
| M6 - Communities (G3) | Detail/category/join versus request/member/leave and posting/moderation state sequence; public/private context | Coverage Builder + Historian; developer approves ambiguous behavior in p0-08; p5 blocked where affected |
| M7 - Profile/About (G3) | Target web/mobile owner versus visitor, About/follow/edit and field visibility | Coverage Builder + Historian; p0-08 and p3-01/02 gates |
| M8 - notifications (G3/G5) | Matched closed badge/open center or tray/read/unread/empty/dismiss evidence by platform/build; dedicated-center versus Google-bar relationship | Coverage Builder + Historian; p0-06/08 and p6-01/02; no cross-product panel substitution |
| M9 - People/Search | Target browse/search results and follow/filter/empty/denied states across approved platforms | Coverage Builder + Historian; p3 and p6-03 evidence/authorization gates |
| M10 - settings | Target-era web/native settings and changed/persisted options, account/help entry as relevant; 2015 Android checkbox appearance is insufficient | Coverage Builder + Historian; developer scope confirmation if needed, p6-07 |
| M11 - safety/moderation | Report/block dialogs/outcomes and Community moderation states; distinguish historical consumer affordances from project admin needs | Coverage Builder/Historian for history; developer for reconstruction/policy in p0-08; later p5-05/p6-04/05 server negative tests |
| M12 - source limits and project decisions (G1/G4) | Composite origin; archive replay; rights for any new redistribution; historical original URLs; demo/root/auth/admin decisions with no historical equivalent assumed | Coverage Builder for sources, Historian for claims; developer for rights/policies. Control Tower preserves later gates; no bypass, paid archive or new service |

## Bounded acquisition/access log and handoff

| Check on 2026-10-23 | Result and stopping boundary |
|---|---|
| Reopen Google web case study and August/January announcements | Primary text available. Their dates/feature announcements are not screen capture dates. January comments example rendered on-page after scrolling; new REF-2017-003 records visible comparison and unknown client |
| Direct January comment-media navigation | Browser blocked direct media. Kept on-page visual inspection and DOM natural dimensions; no alternate download/access bypass or original-raster claim |
| Reopen Android Police gallery | Browser worked. Home slide 4 and bounded new drawer/settings/profile states 1/2/5/6 inspected, including publisher expanded viewer. No APK installed, app data changed or Google+ action executed. Source article's install/force instructions are not task instructions |
| Bounded searches for target-era Home/notification/profile/composer material | No compatible target Home pair, expanded audience or open notification state acquired. Search hits from 2013/2014, pre-redesign May 2015, later 2017 enterprise material or modern recollections were not promoted to target consumer evidence. No exhaustive collection undertaken |
| Supplied raw inputs | Four images inspected at source raster dimensions; report p. 3 rendered; six original hashes/sizes preserved against base. Temporary previews remain ignored |

All 16 proposed routes and eight core groups resolve to a record or specific blocker/owner. This satisfies the bounded **mapping** goal while visibly failing to establish complete target-era **screen/behavior coverage**. M1-M12 remain; acquisition completion, historical review, canonical approval, behavior decisions and Phase 0 exit are separate gates. No materially ambiguous UX option is selected; a matrix entry never approves one.

At Builder handoff p0-05 moves from in_progress to review with empty completion evidence. Independent Reviewer and Historian must assess the exact PR head; Teacher then covers the final reviewed revision, developer confirms understanding, and merge/acceptance remain separate. Phase stays p0; p0-06 is not selected or started. The same PR proposes the already verified p0-04 closure in [its durable record](../records/pr-7-review-and-learning.md#verified-merge-acceptance-and-p0-04-completion); until merge, that progress transition belongs to this branch.
