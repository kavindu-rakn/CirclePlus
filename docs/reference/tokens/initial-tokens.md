# Initial web Home token measurements

Phase 0 research for [WEB-HOME-01](../visual-decision-package.md#web-home-01-approved-baseline). The sole measurement source is [REF-2015-001](../web/2015/REF-2015-001-responsive-home.md), the existing 1600 × 1020 JPEG of Google's November 2015 responsive-web mockup. Use the readings to compare a later reconstruction with the visible structure and density of the source. All observations refer to the visible, static crops.

| View | Original raster crop `[left, top, right, bottom)` | Approved modern validation context |
|---|---|---|
| Desktop web (D) | `[234,104,1305,772)` · 1071 × 668 raster px | 1280 × 800 CSS px, project DPR 1 |
| Phone web (P) | `[1172,376,1474,907)` · 302 × 531 raster px | 390 × 844 CSS px, project DPR 1 |

Coordinates use the original image origin. Historical browser viewport, DPR, zoom, capture/build and any resampling when the composite was assembled are unknown. Each screen may have been scaled separately. The crop bounds include blended edges and context in places. Exclude hardware, desktop content hidden by the phone, the phone OS keys, content outside the crops and unseen below-fold content. Native Android references and the unknown-client composite are outside this web baseline. The [January 2017 density announcement](../web/2017/REF-2017-001-january-update.md) leaves later-era visual persistence unresolved.

## Observed decoder colors

Read the most frequent decoded RGB triplet in each rectangle. Fractions below are matching pixels over sampled pixels, using Pillow 12.3.0. Confidence covers the appearance of this composite. The original CSS colors, source color space and compositing inputs are unknown. JPEG compression and edges can shift individual RGBs.

| Surface | Original-image sample boxes | Decoded modes (matches) | Visible appearance confidence |
|---|---|---|---|
| Red toolbar | D `[452,115,476,141)`, `[1105,115,1129,141)`<br>P `[1305,387,1327,413)`, `[1335,387,1357,413)` | `#DB4537` in all four (597/624, 624/624, 431/572, 572/572) | High for shared red in the crop interiors |
| Lighter search field | D `[620,116,644,142)`, `[962,116,986,142)` | `#E06053` (624/624 in each box) | High for a lighter tint. Opacity and input colors unknown |
| Neutral background | D `[323,167,347,181)`, `[780,238,804,249)`<br>P `[1257,847,1281,851)` | `#EEEEEE` (312/336, 216/264, 48/96) | High for D canvas. Medium for the narrow P inter-card seam |
| Near-white card | D `[535,266,559,274)`, `[1001,590,1025,614)`<br>P `[1352,463,1376,487)`, `[1257,805,1281,829)` | `#FEFEFE` in all four (148/192, 576/576, 576/576, 576/576) | High for sampled card interiors |
| Red compose button | P `[1424,816,1430,822)`, `[1442,836,1448,842)` | `#DC4436` (5/36), `#DF4334` (3/36) | High for red field and light pencil, low for a stable fill sample |

## Observed geometry and detail

All sizes are approximate raster px. Scanline intervals use consecutive rows or columns on the unscaled image. Locate abrupt color changes next to the quieter interiors and expect uncertainty of a few pixels at blended edges. Thresholded ink boxes use the tight extent within the specified search window, with thresholds in the reproduction recipe. Confidence refers to the stated raster observation. Historical CSS values remain unknown throughout.

| Feature | Reading and measurement location | Confidence and boundary |
|---|---|---|
| Toolbar band | D at x=1120, strong red over y=`[104,157)` (53 px). P at x=1317, y=`[376,428)` (52 px). Strong red here means R−G and R−B both at least 90 | High for the visible band. The top starts at the crop edge and each device's resize is unknown |
| Desktop composer and separation | At x=580 the white composer interior is y≈`[178,234)` (56 px). The first post's white interior begins at y≈255, leaving about 21 px between interiors | Medium for raster edges. Includes the darker edge pixels between roles |
| Desktop card columns and gutter | At y=270 the white interiors run approximately x=`[437,811)` and `[832,1203)` (374 and 371 px), with about 21 px between them. This scan crosses both cards above the phone overlap | Medium. Compare near-equal columns and a narrow gutter, about 6% of one white interior. Lower right content is obscured |
| Desktop navigation | Dark ink in Collections, Communities and Profile glyphs starts at y=223, 263 and 303 (40 px repeat). Their x extent is `[251,267)`. Search windows x=`[248,270)` at y=`[218,244)`, `[257,286)` and `[297,324)` | High for visible repeat pitch and these ink bounds. Shared gray background leaves rail width unresolved. Padding and hit areas are unknown |
| Phone card and spacing | At y=453 the near-white card interior spans roughly x=`[1172,1472)`, nearly the visible screen width. At x=1290 the first card's actions turn into a gray seam at y≈843, with the next white interior at y≈855 (about 12 px between interiors) | Medium. Crop blending hides the exact side boundary and the lower card is clipped |
| Post text | The same visible “Pecking order” label has a dark-ink box of 73 × 12 px in D (window `[448,304,530,324)`) and 59 × 10 px in P (window `[1178,473,1247,489)`) | High for the sampled ink, low for any inference about family, weight or size. Different ink sizes do not establish a scale factor |
| Menu and comment glyphs | Menu light ink spans D 14 × 10 px and P 15 × 9 px (windows `[245,119,272,142)`, `[1181,390,1208,414)`). Comment dark ink spans D 14 × 13 px and P 11 × 10 px (`[701,727,723,750)`, `[1384,809,1404,831)`) | Medium for thresholded silhouette, low for precision at this scale. Icon boxes, touch targets and asset identity are unknown |
| Phone compose button | Red extent 48 × 47 px in `[1410,805,1464,856)`. Light pencil ink about 10 × 11 px in `[1426,821,1446,841)`. The button is near the lower-right corner and overlaps the feed actions/seam in the still | Medium for the near-circle and placement. No CSS diameter/inset, fixed positioning, reveal or scroll behavior established |
| Card corners and depth | Inspect composer upper-left at `[433,174,450,187)`. Its pale top and side meet over a few edge pixels. At x=580, composer underside rows 233–239 read channel R `253,225,223,234,233,239,238` against the nearby 238 canvas | Medium for a restrained edge/depth cue. Low for separating radius, border, antialiasing, shadow and JPEG ringing. Radius and shadow parameters remain unknown |

## Proposed comparison targets

These proposals apply to research and later review of this specific web Home reconstruction. They need design approval before use as implementation values.

| Role | Proposed target | Basis and limit |
|---|---|---|
| Toolbar, search, canvas, card | Use provisional comparison swatches `#DB4537`, `#E06053`, `#EEEEEE`, `#FEFEFE` respectively | The representative modes above let reviewers check the relationships. Keep search lighter than the surrounding red and cards lighter than canvas. Final palette and foreground contrast need review |
| Phone compose control | Use the toolbar red family as the comparison target, with a light pencil | Both surfaces read as red. The button's small inconsistent samples support a color family only |
| Desktop layout | Check compact composer above the left card, narrow separation between near-equal columns, and even nav row rhythm | Use the raster intervals for visual comparison within D. CSS sizes stay open |
| Phone layout | Check one feed column that nearly fills the visible width and a circular red pencil near the lower right | Use the static P observations. CSS sizes, insets and interaction stay open |
| Type, glyphs and surfaces | Compare relative text and glyph hierarchy and the restrained card edge | Use ink bounds and scanlines above as visual cues. Exact typography, icon assets and licensing, radius and elevation stay open |

Use the approved modern viewport sizes for future comparisons at project DPR 1. A scale estimate from either crop, including one based on text or an icon, would inherit unknown zoom, source geometry and compositing. Behavior at intermediate widths, native layouts, motion/ripple timing, missing states and the original CSS values require better source evidence or an explicit reconstruction decision before affected implementation. See the [evidence gaps](../route-page-matrix.md#missing-acquisitions-accountable-owners-and-dependent-gates) and [Phase 0 backlog](../../../plans/PHASE-0-1-BACKLOG.md#p0-07--initial-evidence-linked-token-measurements).

## Reproduce from the original

Run this Python with Pillow from the repository root. The hash pins the bytes that were decoded. The recipe reads only the named local JPEG and prints sample modes, scanline triplets and thresholded boxes. Review edge picks at the original scale alongside the printed scanlines. Leave any local crop or overlay in ignored `work/` because embedded photo and mark rights remain unresolved.

```python
from collections import Counter
from hashlib import sha256
from pathlib import Path

from PIL import Image

path = Path("gplus-original-screenshots/the-finished-google-resp-06809e0d85994.jpg")
assert sha256(path.read_bytes()).hexdigest() == (
    "d136e8321974aec16a4e5022f2b6286e1e68d9105d1ddcc7fbcca2be24b5db00"
)
with Image.open(path) as original:
    picture = original.convert("RGB")
assert picture.size == (1600, 1020)

patches = {
    "D toolbar": [(452, 115, 476, 141), (1105, 115, 1129, 141)],
    "P toolbar": [(1305, 387, 1327, 413), (1335, 387, 1357, 413)],
    "D search": [(620, 116, 644, 142), (962, 116, 986, 142)],
    "D canvas": [(323, 167, 347, 181), (780, 238, 804, 249)],
    "P seam": [(1257, 847, 1281, 851)],
    "D card": [(535, 266, 559, 274), (1001, 590, 1025, 614)],
    "P card": [(1352, 463, 1376, 487), (1257, 805, 1281, 829)],
    "P compose button": [(1424, 816, 1430, 822), (1442, 836, 1448, 842)],
}
for label, boxes in patches.items():
    for box in boxes:
        pixels = list(picture.crop(box).get_flattened_data())
        rgb, count = Counter(pixels).most_common(1)[0]
        print(label, box, "#%02X%02X%02X" % rgb, f"{count}/{len(pixels)}")

def extent(box, matches):
    left, top, right, bottom = box
    points = [
        (x, y)
        for y in range(top, bottom)
        for x in range(left, right)
        if matches(*picture.getpixel((x, y)))
    ]
    xs, ys = zip(*points)
    return min(xs), min(ys), max(xs) + 1, max(ys) + 1

def dark(r, g, b):
    return max(r, g, b) <= 160

def light(r, g, b):
    return min(r, g, b) >= 185 and r - g <= 54

def red(r, g, b):
    return r - max(g, b) >= 65

def strong_red(r, g, b):
    return r - max(g, b) >= 90

def near_white(r, g, b):
    return min(r, g, b) >= 248

boxes = [
    ("D toolbar", (1120, 104, 1121, 163), strong_red),
    ("P toolbar", (1317, 376, 1318, 433), strong_red),
    ("P card width", (1172, 453, 1474, 454), near_white),
    ("D nav Collections", (248, 218, 270, 244), dark),
    ("D nav Communities", (248, 257, 270, 286), dark),
    ("D nav Profile", (248, 297, 270, 324), dark),
    ("D post text", (448, 304, 530, 324), dark),
    ("P post text", (1178, 473, 1247, 489), dark),
    ("D menu", (245, 119, 272, 142), light),
    ("P menu", (1181, 390, 1208, 414), light),
    ("D comment", (701, 727, 723, 750), dark),
    ("P comment", (1384, 809, 1404, 831), dark),
    ("P compose button", (1410, 805, 1464, 856), red),
    ("P pencil", (1426, 821, 1446, 841), light),
]
for label, box, matches in boxes:
    left, top, right, bottom = extent(box, matches)
    print(label, (left, top, right, bottom), (right - left, bottom - top))

for x, start, end in [(580, 174, 182), (580, 231, 258), (1290, 839, 858)]:
    print("column", x, [(y, picture.getpixel((x, y))) for y in range(start, end)])
for start, end in [(433, 441), (807, 837), (1199, 1208)]:
    print("row", 270, [(x, picture.getpixel((x, 270))) for x in range(start, end)])
for y in range(174, 187):
    print("corner", y, [min(picture.getpixel((x, y))) for x in range(433, 450)])
```
