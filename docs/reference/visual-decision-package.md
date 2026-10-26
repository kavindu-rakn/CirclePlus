# p0-06 visual package — approved WEB-HOME-01 baseline

Updated 2026-10-27 after direct human approval of **WEB-HOME-01 with its documented test sizes**, following the earlier B structure-only approval. The developer approved the complete previously reviewed source/crop/exclusion/context proposal. Both decisions are recorded; neither needs reconfirmation. **WEB-HOME-01 is the chosen scoped web Home structural baseline.** p0-06 is at `learning_gate`, completion evidence empty, p0-07 unstarted. The [canonical brief](canonical-snapshot.md#approved-web-home-01-baseline-2026-10-27) records approval and remaining gates.

## Approved borrowing and factual limits

Approved: [REF-2015-001](web/2015/REF-2015-001-responsive-home.md)'s desktop red toolbar, left navigation, compact composer and card columns; phone-web single-column feed and red compose pencil. Structural continuity is approved project inference, never verified persistence into late 2016/early 2017. The global era anchor and original source confidence stay unchanged.

Not approved: exact dimensions/tokens/breakpoints, unseen interactions, expanded composer/audience/privacy, other routes, native navigation, the unknown composite, p0-07, application implementation, learning completion, merge or Phase 1. No further baseline choice or research is needed for this approved scope.

## WEB-HOME-01 approved baseline

Chosen name: **WEB-HOME-01 — 2015-derived web Home structural baseline**. One source, one explicitly adapted web baseline, two modern validation contexts. This is not a recovered target-era screenshot pair or a pixel-perfect reference at the approved project sizes.

| Item | Approved baseline and boundary |
|---|---|
| Source | Existing 1600 × 1020 Google device composite, REF-2015-001; November 2015 implementation context. Exact capture date/build/CSS viewport/DPR remain unknown |
| Desktop source crop | `[234,104,1305,772)`, a 1071 × 668 raster region. Use visible toolbar/navigation/compact composer and pictured two-column card arrangement as the structural comparison. Do not infer covered content or exact CSS geometry |
| Phone source crop | `[1172,376,1474,907)`, a 302 × 531 raster region including black Android OS keys. Use single feed column and red compose pencil. Exclude the OS strip from product reconstruction; it establishes no Google+ bottom navigation |
| Desktop validation | **1280 × 800 CSS pixels, project DPR 1**, desktop web. Use persistent left navigation, compact composer and two card columns for this context. This width makes the visible multi-column arrangement reviewable; 800 height keeps toolbar, composer and part of the feed together |
| Phone validation | **390 × 844 CSS pixels, project DPR 1**, mobile web. Use one feed column and compose pencil, with no persistent desktop side rail or native bottom destinations. This is a concrete narrow web context for fitting/overflow review, not a historical device claim |
| Responsive boundary | No breakpoint or drawer/menu interaction is selected. Other widths, including intermediate/tablet/landscape, remain outside this two-context baseline; later evidence/explicit reconstruction decisions must precede affected work |
| Excluded image regions | Laptop/phone hardware frames, Android OS keys, desktop area hidden by overlapping phone, material outside the two crops and unseen below-fold content. No reconstruction of occluded posts, photographer content or device chrome |
| Excluded sources | Native [Collections](android/2015/REF-2015-002-collections.md)/[Communities](android/2015/REF-2015-003-communities.md) and the [unknown composite](undated/REF-UNDATED-003-home-collections-composite.md) stay comparison context only; no borrowing for this baseline |
| Compatibility risk | The [January 2017 density announcement](web/2017/REF-2017-001-january-update.md) may conflict with older geometry. The [October 2016 written column account](web/2016/REF-2016-003-october-web-account.md) does not resolve it. Retain the 2015-derived reconstruction label |
| Remaining components | Exact toolbar/card/spacing/font/icon values and licensing, composer expansion, audience/privacy, comments/reshare/detail, notifications and other routes remain separately gated; see [M3–M12](route-page-matrix.md#missing-acquisitions-accountable-owners-and-dependent-gates). This baseline approval does not authorize tokens, behavior or app work |

Coordinates are original raster pixels, left/top inclusive and right/bottom exclusive, not historical CSS rectangles. Both crops share a device mockup, not independent capture provenance. Desktop phone-occlusion remains visible; phone OS keys remain visible for context only. Board resizing is separate in the manifest. Future token work must not equate raster dimensions to CSS values or treat project DPR as recovered evidence.

### Approval record and remaining lifecycle

On 2026-10-27 the developer approved WEB-HOME-01 as the web Home structural baseline using REF-2015-001 and the documented crops/exclusions, with 1280 × 800 desktop and 390 × 844 phone CSS validation at project DPR 1. The approval accepts the disclosed 2015-derived compatibility risk and preserves historical geometry, responsive behavior and component/interaction/privacy gates. It approves the same proposal independently reviewed at `c77ecea5272740aee5b7c9ba25c5ed7ceddd0ee4`; no source, crop, size or scope changed.

The missing target-era image pair is not a renewed prerequisite for this specifically approved reconstructed baseline. It remains an evidence limitation, not recovered proof. The global era anchor remains unchanged. This approval resolves p0-06's baseline-decision blocker; focused verification of this approval/tracking/render-label delta precedes teaching. The Learning Gate, merge decision and eventual acceptance remain separate. p0-06 is not done or ready to merge, and no later task is started.

## Private pages and local reproduction

Page 1 shows missing target-era images, side-by-side web crops and separately labelled native/unknown comparisons. Page 2 now shows **approved structure** beside **approved WEB-HOME-01**, with the Learning Gate explicitly pending. Neither is an invented historical screenshot or application mockup.

Run the [renderer](../../scripts/render-evidence-board.py) with existing Python 3/Pillow with AVIF support:

```powershell
python scripts/render-evidence-board.py
```

No installation/network/browser/AI/paid calls. Four original image hashes are checked before drawing. Only ignored `work/visual-decision-package/` outputs are written:

- `01-evidence-and-gaps.png` — 1920 × 2540
- `02-decision-options.png` — 1920 × 2100; filename retained, now approved baseline / learning pending
- `index.html` — local PNG viewer, no external resources
- `render-manifest.json` — input/output hashes, raster crops/scales/placements and approval/lifecycle labels

Open the HTML or PNGs at full resolution. Segoe UI/DejaVu Sans are annotation fonts, not product typography; runtime/font differences may change wrapping/output hashes, with reserved text areas checked for overflow. Updated pages were rendered and visually inspected at full raster size. The HTML is a static wrapper; no browser-layout verification or application viewport test has been run.

Rights remain as recorded in the four REF files. Derivatives/viewer/manifest remain private and ignored; no redistribution clearance implied. Six originals and twenty REF records remain unchanged. Public files contain approval records, renderer and tracking only; no supplied private document, transcript or routing IDs. This increment records the approved baseline and prepares the Learning Gate handoff; it does not implement the product, complete learning or merge the PR.
