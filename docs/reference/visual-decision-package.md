# p0-06 visual decision package — preparation only

Prepared 2026-10-27. **Neither option is selected.** The late-2016/early-2017 anchor, all existing REF limits and the [blocked canonical brief](canonical-snapshot.md) remain unchanged. p0-06 is blocked; p0-07 is unstarted. This package prepares a human decision, not an exception, canonical declaration, token measurement or implementation.

## What the two pages show

1. **Evidence and gaps:** empty Q4-2016/Q1-2017 desktop-web and mobile-web Home placeholders; side-by-side crops from the single November-2015-context [Google responsive-web composite](web/2015/REF-2015-001-responsive-home.md); separately labelled [native Android Collections](android/2015/REF-2015-002-collections.md), [native Android Communities](android/2015/REF-2015-003-communities.md) and the [unknown composite](undated/REF-UNDATED-003-home-collections-composite.md).
2. **Decision options:** two written proposals side by side, with borrowings, inference, risks and required later approval. This page contains no invented historical screenshot or application mockup.

The web crops share one device mockup, not independent capture provenance. Desktop crop `[234,104,1305,772)` retains the phone's occlusion; phone crop `[1172,376,1474,907)` includes the Android OS keys to distinguish them from Google+ destinations. Coordinates are original raster pixels, left/top inclusive and right/bottom exclusive. The other images are resized whole. Raster sizes, crop bounds and resizing are presentation metadata; exact historical capture/build/CSS viewport/DPR remain unknown. These are **not matching-viewport comparisons** or proof of 2015-to-2017 persistence.

## The actual choices

| Proposal, not adoption | Concrete scope and trade-off | What approval would still require |
|---|---|---|
| **A — retain the current faithful web evidence requirement** | Require dated, compatible target-era desktop-web and mobile-web Home evidence. Preserves fidelity; further bounded acquisition could still fail and has no promised duration | Separate authorization for any further research, then actual reference/date/platform/scale review and explicit human canonical selection |
| **B — consider a narrow 2015-derived web Home reconstruction exception** | Borrow only REF-2015-001's visible desktop red toolbar, left navigation, compact composer and card columns; phone single-column Home and red compose pencil. Infer structural continuity only as a project reconstruction basis, never as historical persistence | Explicit human approval of this named Home/web fidelity exception, followed by approval of a specific baseline, remaining decisions and viewport plan. It would permit consideration of an older comparison outside the present visual anchor; it does not satisfy the current gate |

B does not propose exact geometry, tokens, breakpoints or unobserved behavior. It excludes Android bottom destinations and the unknown composite. Missing expanded composer/audience, privacy and all other unresolved route/state evidence retain their existing gates. The [October 2016 account](web/2016/REF-2016-003-october-web-account.md) supports a bounded written column claim only; the [January density announcement](web/2017/REF-2017-001-january-update.md) creates a compatibility risk for older geometry. Neither supplies the missing Home pair. No native-inspired option is added because it would introduce a separate platform deviation without target-era images.

## Local reproduction and inspection

Run the repository's [renderer](../../scripts/render-evidence-board.py) from the checkout with an existing Python 3 environment containing Pillow with AVIF support:

```powershell
python scripts/render-evidence-board.py
```

No installation, network, browser, AI image generation or paid service is used. The script reads four existing images and checks their recorded SHA-256 values before drawing. It writes only ignored `work/visual-decision-package/`:

- `01-evidence-and-gaps.png` — 1920 × 2540
- `02-decision-options.png` — 1920 × 2100
- `index.html` — local viewer linking both PNGs at full resolution; no external resources
- `render-manifest.json` — input hashes, crop/placement/scaling metadata and output hashes

Open the HTML or each PNG locally and inspect at full resolution. Board annotation fonts use Segoe UI, falling back to DejaVu Sans; these are not proposed product typography. Font/runtime differences may change wrapping and output hashes; reserved text areas fail on overflow. The prepared pages were rendered and visually inspected at full raster size; no clipped or overlapping text was observed. The HTML is a static wrapper; no browser execution or browser-layout verification is claimed.

Image rights remain as stated in the four REF records. The derived pages, viewer and manifest stay local/ignored because embedded third-party photographs/marks and redistribution rights are not cleared. Only the renderer and decision/provenance notes are committed. All six raw originals and twenty REF records are preserved; no new evidence acquisition, canonical choice, approval, status change, application work or merge occurred.
