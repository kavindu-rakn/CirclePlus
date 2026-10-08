# p0-04 source inventory and acquisition gaps

Prepared 2026-10-08 for Phase 0, from main `c920ee4f15cd7e217b734f65cad9930729648abf`. This inventories the six supplied files and a bounded set of citation/source leads. It supplies candidates for later coverage and canonical approval; it does not select a canonical snapshot, establish token values, or satisfy Phase 0 exit. Task acceptance includes reporting missing acquisition explicitly. See the [approved backlog](../../plans/PHASE-0-1-BACKLOG.md) and [evidence register](../17-research-evidence-register.md).

## Method and date meanings

All four local images were visually inspected on October 7. Both reports were text-extracted in full, with relevant historical claims and bibliographies reviewed; Gemini p. 1 and Perplexity p. 3 were also rendered and visually inspected. File metadata and hashes were rechecked October 8. Online checks below occurred October 7–8, 2026 (Asia/Colombo); these are access dates, never historical product dates.

Records distinguish publication/update dates, claimed product context, unknown capture dates, export metadata and archive replay dates. A filename timestamp, PDF export date, raster size, publisher image derivative or 72-dpi metadata does not establish capture time, CSS viewport or device DPR. Year folders group verified source/product context, not an asserted exact screenshot date. Undated reports and unresolved images stay in `undated/`. No archive replay was verified.

Confidence is claim-specific: a high-confidence visual match or primary announcement does not make unknown capture/build/geometry high-confidence. A generated report is a lead, not primary historical evidence. No new media was committed; existing originals remain unchanged. External references and rights limits are recorded rather than assuming redistribution permission.

## Six supplied inputs

Each linked record states what the item proves, what it does not prove and its inspection limits. Paths in metadata are relative to the repository root.

| Input | Record | Verified information | Unresolved limits |
|---|---|---|---|
| [Gemini-GPlus.pdf](../../initial-research-done/Gemini-GPlus.pdf) | [REF-UNDATED-001](undated/REF-UNDATED-001-gemini-report.md) | 14 pages; 73 bibliography entries; generated research summary | Publication/export date unknown; recommendations and untraced claims are not historical truth |
| [Perplexity-GPlus.pdf](../../initial-research-done/Perplexity-GPlus.pdf) | [REF-UNDATED-002](undated/REF-UNDATED-002-perplexity-report.md) | 17 pages; 80 references; export metadata September 20, 2026 | Export is not product date; notification/date claims need qualification |
| [google_plus_ndtv_new_010.jpg](../../gplus-original-screenshots/google_plus_ndtv_new_010.jpg) | [REF-UNDATED-003](undated/REF-UNDATED-003-home-collections-composite.md) | 800 × 630; mobile Home/Collections composite | Filename suggests a search lead only; origin/date/platform variant remain unverified |
| [the-finished-google-resp-06809e0d85994.jpg](../../gplus-original-screenshots/the-finished-google-resp-06809e0d85994.jpg) | [REF-2015-001](web/2015/REF-2015-001-responsive-home.md) | 1600 × 1020; visual match to Google responsive-web case study | Device composite, not a viewport; exact capture date/build unknown |
| [nexus2cee_2015-11-18-19.10.01.avif](../../gplus-original-screenshots/nexus2cee_2015-11-18-19.10.01.avif) | [REF-2015-002](android/2015/REF-2015-002-collections.md) | 1080 × 1920; Collections visually matches Android Police gallery slide 7 | Exact screenshot time, pictured build and transcode history unknown |
| [images.jpeg](../../gplus-original-screenshots/images.jpeg) | [REF-2015-003](android/2015/REF-2015-003-communities.md) | 415 × 737; Communities visually matches gallery slide 8 | Generic filename/resized local image; original scale/capture date unknown |

### Preservation fingerprints

SHA-256 is a local preservation check, not proof of historical authenticity or byte identity with an online derivative.

| Input basename | Bytes | SHA-256 |
|---|---:|---|
| `Gemini-GPlus.pdf` | 324408 | `4d8c578b268e7a672d64fd5b3347c855052d99d7e8522c22fe1ac7a3545f10fe` |
| `Perplexity-GPlus.pdf` | 1025621 | `1abb8badfc55c3e45b417de5de81993c8e529ce8383ea70583242184b12601b8` |
| `google_plus_ndtv_new_010.jpg` | 384757 | `c77f8b847a75cfe14e1bcadbaaf3c0a0e791d8107fc9cd198a6293c37397d245` |
| `the-finished-google-resp-06809e0d85994.jpg` | 104659 | `d136e8321974aec16a4e5022f2b6286e1e68d9105d1ddcc7fbcca2be24b5db00` |
| `nexus2cee_2015-11-18-19.10.01.avif` | 190074 | `c77bf18b5a853a58d01f9a771b1103b516de1a9bf6a8cbbe319e401c754d2ddd` |
| `images.jpeg` | 29885 | `5e427cc1b48b5d50e01525ffd634a5a2d01d1fbf221f5f2cd12c513cae2fa94c` |

## Additional bounded source records

| Record | Source/date context | Use and limit |
|---|---|---|
| [REF-2015-004](web/2015/REF-2015-004-announcement.md) | Google launch announcement, November 17, 2015 | Primary support for redesign direction/date; not pixel geometry or exact native release availability |
| [REF-2015-005](android/2015/REF-2015-005-home-candidate.md) | Android Police, November 18, 2015, gallery slide 4 | Visually inspected Android Home candidate alongside supplied Collections/Communities matches; external locator only, exact pictured build unknown |
| [REF-2016-001](web/2016/REF-2016-001-update-announcement.md) | Google update announcement, August 30, 2016 | Notification-center/comment/community rollout context; no inspected tray image or universal availability date |
| [REF-2017-001](web/2017/REF-2017-001-january-update.md) | Google update announcement, January 17, 2017 | Primary context for density/comments/photo zoom and planned January 24 Events/classic-web changes; image acquisition remains incomplete |
| [REF-2017-002](web/2017/REF-2017-002-google-bar-limit.md) | 9to5Google, February 21, 2017 | Explicitly distinguishes Google+ from a broader Google-bar refresh; text evidence only, not a Google+ tray reference |
| [REF-UNDATED-004](undated/REF-UNDATED-004-updated-guide.md) | Elegant Themes guide, current update January 7, 2023 | Both PDFs cite it; useful link chain to Google case study. Original 2015 publication/revision not verified |

## Bounded report citation tracing

This checks claims that affect provenance/era/core-screen acquisition. It is not verification of all 153 bibliography entries. Report recommendations do not override the mission, ADRs or human canonical approval.

| Report location/lead | Checked chain | Result |
|---|---|---|
| Gemini p. 1, ref. 4, November 18 redesign date | Wikipedia citation lead compared with official [REF-2015-004](web/2015/REF-2015-004-announcement.md) | Primary announcement is November 17. November 18 secondary/app coverage is a separate date; Wikipedia was not adopted as primary proof |
| Gemini ref. 5 / Perplexity ref. 5 | Elegant Themes → Google Developers → web.dev, [REF-UNDATED-004](undated/REF-UNDATED-004-updated-guide.md), [REF-2015-001](web/2015/REF-2015-001-responsive-home.md) | Google attribution and responsive-site image confirmed. Case-study payload figures describe its comparison, not every user/session; modern guide update is not a verified original publication date |
| Gemini ref. 6 | [iDownloadBlog November 18 coverage](https://www.idownloadblog.com/2015/11/18/google-plus-redesign/) | Secondary announcement/app-rollout lead checked; no exact pictured app build established |
| Perplexity refs. 2 and 27 | Official announcement and [9to5Google November 17 coverage](https://9to5google.com/2015/11/17/google-plus-redesign/) | Corroborate November 17 announcement and Communities/Collections emphasis; not proof of a late-2016 screen |
| Perplexity p. 3, September 2016 notification-center wording | [REF-2016-001](web/2016/REF-2016-001-update-announcement.md) | Google announced it August 30 with rollout in coming weeks. This qualifies announcement timing; September availability is not ruled out |
| Perplexity p. 3, notification/Mr. Jingles narrative citing ref. 12 | Separate bibliography ref. 50 used as a limiting comparison: [REF-2017-002](web/2017/REF-2017-002-google-bar-limit.md) | Page 3 cites ref. 12, not ref. 50. The separate ref. 50 coverage says Google+ and Photos still used the older panel on February 21. A cross-product refresh cannot establish the Google+ notification UI |
| Reports' broad 2016–2017/Events evolution | [REF-2017-001](web/2017/REF-2017-001-january-update.md) | January 17 post schedules Events for January 24 (excluding G Suite). Do not infer exact earlier variants or completed rollout from this announcement alone |
| Gemini pp. 4–5 and bibliography; both reports' recommended anchor | Report-level inspection, source families identified | Mixed MD1/M2/M3 guidance, later graph research and export schema cannot prove historical product tokens/internals. Mid-2017 or late-2016–2018 recommendations are unapproved opinions; no modern layout/federation recommendation adopted |

## Access and failure log

Access is what these methods observed, not a promise that a URL will remain available. Browser inspection was used when text retrieval failed. No authentication bypass, paid archive or APK installation was used.

| Locator | Access date | Observed result |
|---|---|---|
| [Google introduction](https://blog.google/products-and-platforms/products/google-plus/introducing-new-google/) | October 7–8 | Text available; November 17, 2015 date displayed |
| [Original Google Blog URL](https://googleblog.blogspot.com/2015/11/introducing-new-google.html) | October 8 | Redirected to migrated Google introduction; no archived replay |
| [web.dev case study](https://web.dev/case-studies/googleplus) | October 8 | Text and browser image available; Last updated November 17, 2015 UTC. Query-string variant failed October 7; canonical URL succeeded |
| [Older Developers case-study URL](https://developers.google.com/web/showcase/case-study/googleplus) | October 8 | Redirected to web.dev; follows the guide's primary-source link |
| [Named web.dev image](https://web.dev/static/case-studies/googleplus/image/the-finished-google-resp-06809e0d85994.jpg) | October 8 | Direct text fetch failed; page-rendered optimized derivative visually inspected, no byte comparison |
| [Elegant Themes guide](https://www.elegantthemes.com/blog/resources/your-guide-to-the-brand-new-redesign-of-google) | October 7–8 | Text/links available; current January 7, 2023 update displayed. December 2015 comments do not establish original publication/unchanged contents |
| [iDownloadBlog](https://www.idownloadblog.com/2015/11/18/google-plus-redesign/) | October 7 | Text available; November 18, 2015 secondary coverage |
| [9to5Google launch](https://9to5google.com/2015/11/17/google-plus-redesign/) | October 7 | Text available; November 17, 2015 secondary coverage |
| [Android Police gallery article](https://www.androidpolice.com/2015/11/18/google-app-updated-to-v6-8-to-begin-rolling-out-the-new-ui-apk-download/) | October 8 | Text retrieval failed (502/internal error); live browser article/gallery worked. Slides 4, 7, 8 visually inspected; publisher derivatives are not original device resolution |
| [AndroidPure backup lead](https://www.androidpure.com/google-6-8-app-with-new-ui-rolls-out-apk-available-for-download/) | October 8 | Text retrieval returned November 20 article referencing Android Police; live browser returned 404. Rejected as an independently inspected visual source |
| [Google August update](https://blog.google/products-and-platforms/products/google-plus/bringing-new-google-more-people/) | October 8 | Text/browser page available; August 30, 2016 announcement |
| [Google January update](https://blog.google/products-and-platforms/products/google-plus/making-googleplus-work-better-for-you/) | October 7–8 | Text available; image elements located in browser but not visibly inspected. Direct image navigation blocked by client; no bypass/download. Treat as acquisition leads |
| [9to5Google notification article](https://9to5google.com/2017/02/21/google-bar-notification-panel-material-redesign/) | October 7–8 | Text available, including explicit Google+/Photos exception; images not inspected |
| [Wayback availability query](https://archive.org/wayback/available?url=googleblog.blogspot.com%2F2015%2F11%2Fintroducing-new-google.html&timestamp=20151118) | October 8 | Retrieval failed internally; no replay URL/date accepted. Live migrated primary source used with archive gap recorded |
| NDTV filename/origin searches | October 7–8 | Bounded exact-name/product searches did not establish the supplied composite's original page. No guessed source URL or date assigned |

## Explicit acquisition blockers and handoff

The inventory is ready for independent technical/historical review. The following are missing acquisitions, not permission to fill gaps from memory. Overall provenance confidence is medium; exact capture/build/viewport confidence remains unknown where stated.

| Gap | Needed before dependent work | Owner/gate |
|---|---|---|
| G1 — unresolved composite origin | Original page/archive or independently dated matching image for REF-UNDATED-003 | Next explicitly authorized research worker; otherwise retain unknown/exclude it from dated selection |
| G2 — compatible target-era Home pair | Dated late-2016/early-2017 desktop and mobile evidence, with platform and usable viewport/scale context | Next authorized acquisition/coverage task; p0-06 human approval still required. The 2015 candidates do not establish target-era persistence |
| G3 — missing core states | Expanded composer/audience, post-detail/comments, profile/About, notification tray and Collection/Community detail/behavior evidence | Next authorized coverage researcher; affected canonical/behavior decisions remain blocked. The four raw images cover browse/Home appearances only |
| G4 — archive/media/rights limits | Verifiable archive replays where obtainable; inspect January update media through permitted access; resolve reuse rights before new asset redistribution | Authorized researcher and developer as needed; text announcements are usable while image geometry remains unknown |
| G5 — platform/version limits | iOS/tablet and later Android/native versus mobile-web compatibility, exact pictured builds where material | Later approved coverage/canonical work; no blended platform baseline inferred here |

No route/state matrix, canonical approval, token measurement, schema or application work was performed. p0-04 remains unfinished until review, Learning Gate and explicit merge/acceptance; downstream tasks are not started by this inventory.
