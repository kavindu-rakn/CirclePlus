# REF-2016-002 — December walkthrough acquisition lead, later edited

```yaml
id: "REF-2016-002"
platform: "article describes new Google+ web; individual slide/video clients not audited"
source_type: "author's walkthrough article with embedded slides and linked recording; later updated"
source_url: "https://www.peggyktc.com/2016/12/get-started-with-new-google-plus.html"
source_publication_date: "2016-12-09 displayed"
source_update_date: "Updated March 2019 explicitly displayed; extent of edits unknown"
captured_product_date: "author describes December 7 walkthrough; individual screen capture dates unknown"
build_version: "unknown"
archive_capture_date: "unknown; no replay/revision history verified"
capture_export_date: "unknown; slides explicitly edited for clarity"
accessed_on: "2026-10-25 Asia/Colombo"
raster_dimensions: "not acquired; no product screen accepted from this lead"
css_viewport_dpr: "unknown"
confidence: "high for observed article/date/update/links; unknown for unchanged 2016 screen content"
local_asset: "none; locators/notes only"
rights: "Page reserves original content; no permission assumed, no media downloaded or committed"
```

## Verified lead, not acquired screen coverage

The author's [2016 archive](https://www.peggyktc.com/2016/) linked this exact article. Text retrieval of the link returned cache miss; the live browser succeeded. The article describes a December 7 session with Michael Daniels and lists profile, Home stream, Collections/People/Circles/Communities, post engagement, posting and notifications. It explicitly says the shared slides have edits for clarity and displays `Updated March 2019` below the embedded recording. This limits using present slide contents as unchanged 2016 evidence.

Observed locators:

- [Linked recording](https://www.youtube.com/watch?v=5VQKzX5Jwrw), embedded title `Learn Google Plus from a TC 12.7.2016`.
- [Embedded slide deck](https://docs.google.com/presentation/d/1AxSrxOZwVVbrHjlAxT43DoPUbwZbyR3kq6_WKcDhlyw/embed?start=false&loop=false&delayms=15000&slide=id.p), viewer reports 66 slides, title `Getting Started with the New Google+`.

No registration was performed. A short introductory playback check reached approximately 0:49 of the player's 1:09:44 duration and showed the host, not product screens. The seek control was not settable through accessibility; a keyboard/coordinate attempt did not produce the requested later timestamp. Playback was stopped. No timeline/frame audit, slide-by-slide inspection, original upload-date verification or slide revision history was completed. This limited playback check is not an interaction review. No claim of viewed Home/notification/composer frames, visual source dimensions, original behavior, exact December build or compatible mobile Home is made.

Next authorized acquisition can inspect the original recording for dated web Home/state frames and compare revised slides against those timestamps. It still needs independently compatible mobile-web material. This is a concrete next path in the [blocked canonical brief](../../canonical-snapshot.md), not closure of matrix M1–M8 or a canonical option ready for approval.

## Bounded Path A revisit, 2026-10-25

The preceding paragraph records the initial acquisition checkpoint. A later authorized revisit opened the same recording on YouTube's main watch page. Its visible seek slider accepted a numeric keyboard shortcut, resolving the embedded player's intro-only seek limitation for this method. No hidden player state was mutated or media downloaded. An initial End-key test reached the end rather than a useful sample; after automatic navigation, the original recording was restored. Numeric seeking then reached the samples below.

| Verified sample | Observation and limit |
|---|---|
| Approximately 13:56–13:57, player chapter `My Profile` | The rendered recording shows a desktop-style Peggy K profile illustration with photographic cover, Follow/About controls, an interests/Collections row and left navigation. This is a profile example inside the recording; no observed click sequence establishes a live product interaction, Home layout or mobile-web appearance |
| 20:55, player chapter `Name Change` | After loading, the paused decoded frame shows a text presentation slide about names, rather than Home. A previous profile image remained visible briefly while seeking buffered; it was **not** counted as the 20:55 frame. DOM video readback then reported time 1255.44 seconds, paused, ready state 4, decoded video 1280 × 720 |

The 1280 × 720 dimensions describe the delivered video, including presentation material, not an original product screenshot, CSS viewport or DPR. The player displayed `Streamed 9y ago`; an exact upload/stream date was not independently established. The article's described December 7 session, December 9 publication and March 2019 update remain distinct from that metadata and from unknown screenshot capture/build dates.

The player exposed auto-generated chapter locators, including Profile at 11:38, My Profile at 12:30, Collections at 23:54 and Notifications Page at 53:58. Chapter titles/timestamps are navigation leads, not verified product content. A supported click on the 12:30 chapter timed out; the turn was interrupted before the resulting frame could be verified. One recovery attempt found the browser binding lost and the known tab absent, so the method stopped. No other chapter frame, current-slide comparison or compatible mobile-web source was verified. No full recording audit was performed; the existing slide deck was not inspected beyond its previously observed title/count.

This adds a limited profile illustration and successful main-player seek method, **not Home coverage**. Next required artifacts remain an identified desktop Home/full-narrow pair and a compatible mobile-web Home/navigation capture, with scale/client/date limits, plus a current-slide-to-recorded-frame comparison if slides are used. No new canonical combination, platform inference or privacy rule is approved; M1/M2 and affected state gates remain open. Focused historical recheck of these new sample/access claims is required.
