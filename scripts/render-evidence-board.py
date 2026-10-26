"""Render a private p0-06 decision board from unchanged local originals.

Requires Python 3 and Pillow with AVIF support. No network, browser or AI calls.
Run from any directory: python scripts/render-evidence-board.py
Outputs remain under ignored work/visual-decision-package/.
"""

from hashlib import sha256
from html import escape
from pathlib import Path
import os

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "work" / "visual-decision-package"
ASSETS = ROOT / "gplus-original-screenshots"
INPUTS = {
    "web": ("the-finished-google-resp-06809e0d85994.jpg", "d136e8321974aec16a4e5022f2b6286e1e68d9105d1ddcc7fbcca2be24b5db00"),
    "collections": ("nexus2cee_2015-11-18-19.10.01.avif", "c77bf18b5a853a58d01f9a771b1103b516de1a9bf6a8cbbe319e401c754d2ddd"),
    "communities": ("images.jpeg", "5e427cc1b48b5d50e01525ffd634a5a2d01d1fbf221f5f2cd12c513cae2fa94c"),
    "unknown": ("google_plus_ndtv_new_010.jpg", "c77f8b847a75cfe14e1bcadbaaf3c0a0e791d8107fc9cd198a6293c37397d245"),
}

# Annotation fonts only. These are not proposed product fonts or token values.
FONT_DIRS = [Path(os.environ.get("WINDIR", "C:/Windows")) / "Fonts", Path("/usr/share/fonts/truetype/dejavu")]


def font(size, bold=False):
    names = ["segoeuib.ttf" if bold else "segoeui.ttf", "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"]
    for folder in FONT_DIRS:
        for name in names:
            if (folder / name).exists():
                return ImageFont.truetype(str(folder / name), size)
    raise RuntimeError("Install no packages automatically: provide Segoe UI or DejaVu Sans first.")


INK = "#202936"
MUTED = "#475568"
RED = "#9E292B"
AMBER = "#805500"
TEAL = "#176358"
BG = "#EDF0F3"


class Board:
    def __init__(self, height, number, title, subtitle):
        self.image = Image.new("RGB", (1920, height), BG)
        self.draw = ImageDraw.Draw(self.image)
        self.draw.rectangle((0, 0, 1920, 176), fill=INK)
        self.text(f"CIRCLEPLUS / PHASE 0 / PRIVATE LOCAL REVIEW / {number} OF 2", 60, 22, 1800, size=23, color="#CBD5E1")
        self.text(title, 60, 58, 1800, size=48, bold=True, color="white")
        self.text(subtitle, 60, 123, 1800, size=27, color="white")

    def text(self, value, x, y, width, size=28, color=INK, bold=False, bottom=None):
        face = font(size, bold)
        line_height = round(size * 1.40)
        for paragraph in value.split("\n"):
            lines, current = [], ""
            for word in paragraph.split():
                candidate = f"{current} {word}".strip()
                if self.draw.textlength(candidate, font=face) <= width:
                    current = candidate
                else:
                    if not current:
                        raise ValueError(f"Word does not fit: {word}")
                    lines.append(current)
                    current = word
            lines.append(current)
            for line in lines:
                if bottom is not None and y + line_height > bottom:
                    raise ValueError(f"Text overflows reserved area: {value[:60]}")
                self.draw.text((x, y), line, font=face, fill=color)
                y += line_height
        return y

    def panel(self, rect, fill="white", outline=None):
        self.draw.rectangle(rect, fill=fill, outline=outline, width=3 if outline else 1)

    def fit(self, source, rect):
        x, y, right, bottom = rect
        fitted = ImageOps.contain(source, (right - x, bottom - y), Image.Resampling.LANCZOS)
        left, top = x + (right - x - fitted.width) // 2, y + (bottom - y - fitted.height) // 2
        self.image.paste(fitted, (left, top))
        return {"box": list(rect), "rendered_xywh": [left, top, fitted.width, fitted.height], "scale_x": fitted.width / source.width, "scale_y": fitted.height / source.height}

    def footer(self, value):
        y = self.image.height - 89
        self.draw.line((60, y - 13, 1860, y - 13), fill="#AEB8C3", width=2)
        self.text(value, 60, y, 1800, size=25, color=MUTED, bottom=self.image.height - 10)

    def save(self, filename):
        self.image.save(OUT / filename)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    loaded = {}
    manifest = {"purpose": "Private decision aid; web Home structure exception approved, WEB-HOME-01 baseline pending", "decision_date": "2026-10-27", "approved_scope": "REF-2015-001 web Home structure only; not historical persistence", "proposal": {"id": "WEB-HOME-01", "state": "pending consolidated baseline/viewport approval", "project_css_viewports": {"desktop": [1280, 800], "phone": [390, 844]}, "project_dpr": 1, "historical_css_viewport_dpr": "unknown"}, "coordinate_system": "Original raster pixels; crop boxes are left/top inclusive, right/bottom exclusive", "assets": {}, "placements": {}}
    for key, (name, expected) in INPUTS.items():
        path = ASSETS / name
        actual = sha256(path.read_bytes()).hexdigest()
        if actual != expected:
            raise ValueError(f"Original hash mismatch: {name}")
        loaded[key] = Image.open(path).convert("RGB")
        manifest["assets"][key] = {"path": path.relative_to(ROOT).as_posix(), "sha256": actual, "raster_size": list(loaded[key].size)}

    a = Board(2540, 1, "What we can see. What is still missing.", "Updated 2026-10-27 / web Home structure approved / baseline pending / target-era pair still missing")
    for x, title in [(60, "TARGET: DESKTOP WEB HOME"), (980, "TARGET: MOBILE WEB HOME")]:
        a.panel((x, 210, x + 880, 439), fill="#FFF5E5", outline="#B8863B")
        a.text(title, x + 24, 228, 832, size=30, bold=True, color=AMBER)
        a.text("MISSING", x + 24, 274, 832, size=45, bold=True, color=AMBER)
        a.text("Q4 2016 / Q1 2017: no usable, compatible Home image verified in this pack.", x + 24, 344, 824, size=28, bottom=430)

    a.text("2015 WEB COMPARISON / REF-2015-001", 60, 473, 1800, size=33, bold=True, color=TEAL)
    a.text("One Google device composite, separated here for inspection; not two independent captures.", 60, 521, 1800, size=28)
    a.panel((60, 580, 1230, 1315))
    a.panel((1280, 580, 1860, 1315))
    desktop_box = (234, 104, 1305, 772)
    phone_box = (1172, 376, 1474, 907)
    manifest["placements"]["desktop_crop"] = {"crop_xyxy": list(desktop_box), **a.fit(loaded["web"].crop(desktop_box), (70, 590, 1220, 1305))}
    manifest["placements"]["phone_crop"] = {"crop_xyxy": list(phone_box), **a.fit(loaded["web"].crop(phone_box), (1360, 590, 1780, 1305))}
    a.text("DESKTOP WEB / Home", 60, 1340, 1170, size=32, bold=True)
    a.text("Visible: red toolbar, left navigation, compact composer and multiple card columns. Phone mockup obscures the lower-right desktop area.", 60, 1392, 1150, size=29)
    a.text("Source context: November 2015. Exact capture/build/CSS viewport/DPR unknown. No proof of 2016-2017 persistence.", 60, 1530, 1150, size=29, color=MUTED)
    desk_width, desk_height = manifest["placements"]["desktop_crop"]["rendered_xywh"][2:]
    phone_width, phone_height = manifest["placements"]["phone_crop"]["rendered_xywh"][2:]
    a.text(f"Crop [234,104,1305,772) from 1600 x 1020; 1071 x 668 raster scaled to {desk_width} x {desk_height}.", 60, 1665, 1150, size=25, color=MUTED, bottom=1750)
    a.text("MOBILE WEB / Home", 1280, 1340, 580, size=32, bold=True)
    a.text("Visible: single card column and red compose pencil. Black bottom keys are Android OS keys; not Google+ destinations.", 1280, 1392, 580, size=29, bottom=1570)
    a.text(f"Same 2015 context and unknowns. Crop [1172,376,1474,907): 302 x 531 scaled to {phone_width} x {phone_height}.", 1280, 1605, 580, size=25, color=MUTED, bottom=1750)

    a.text("OTHER LOCAL IMAGES / CONTEXT, NOT A MOBILE-WEB HOME SUBSTITUTE", 60, 1790, 1800, size=29, bold=True)
    a.panel((60, 1850, 960, 2410))
    a.panel((990, 1850, 1860, 2410))
    a.text("NATIVE ANDROID / November 18, 2015 article", 80, 1865, 850, size=27, bold=True)
    manifest["placements"]["collections_full"] = a.fit(loaded["collections"], (83, 1920, 255, 2225))
    manifest["placements"]["communities_full"] = a.fit(loaded["communities"], (285, 1920, 457, 2225))
    a.text("REF-2015-002 / Collections\n1080 x 1920 raster\nREF-2015-003 / Communities\n415 x 737 raster", 490, 1934, 440, size=25)
    a.text("Full rasters resized to fit, no crop. Gallery association verified; exact capture/build/dp/DPR unknown. Browse screens, not Home or web.", 80, 2250, 850, size=26, bottom=2400)
    a.text("UNKNOWN DATE / UNKNOWN CLIENT", 1010, 1865, 820, size=27, bold=True)
    manifest["placements"]["unknown_full"] = a.fit(loaded["unknown"], (1010, 1920, 1400, 2225))
    a.text("REF-UNDATED-003\nHome / Collections composite\n800 x 630 entire raster\nFull image resized; no crop.", 1430, 1935, 400, size=25, bottom=2210)
    a.text("Origin, date, native versus web and build unverified. Filename and image dpi do not establish them. CSS viewport/DPR unknown.", 1010, 2250, 820, size=26, bottom=2400)
    a.footer("All scale values describe this board's raster presentation, never a historical CSS viewport. Original files unchanged.")
    a.save("01-evidence-and-gaps.png")

    b = Board(2100, 2, "Structure approved. Specific baseline proposed.", "B approved for web Home structure only / WEB-HOME-01 pending / no tokens, app work or merge")
    b.text("One bounded decision recorded. One consolidated proposal remains.", 60, 211, 1800, size=34, bold=True)
    b.text("Decision notes only, not historical screenshots or a product mockup. Updated 2026-10-27.", 60, 265, 1800, size=29, color=MUTED)
    for x, title, subtitle, tint, stroke in [(60, "APPROVED / web Home structure", "Named 2015-derived reconstruction exception", "#EDF8F4", "#176358"), (990, "PENDING / WEB-HOME-01", "One source/crop/exclusion and viewport proposal", "#FFF7E9", "#B8863B")]:
        b.panel((x, 335, x + 870, 1815), fill=tint, outline=stroke)
        b.text(title, x + 28, 363, 814, size=36, bold=True)
        b.text(subtitle, x + 28, 427, 814, size=28, color=MUTED, bottom=525)

    def section(x, y, heading, body, bottom):
        b.text(heading, x, y, 802, size=29, bold=True, color=TEAL if x < 900 else AMBER)
        return b.text(body, x, y + 48, 802, size=29, bottom=bottom)

    section(88, 560, "APPROVAL RECORDED / 2026-10-27", "REF-2015-001 web Home structure: desktop red toolbar, left navigation, compact composer and card columns; phone-web single feed column and red compose pencil.", 815)
    section(88, 875, "PROJECT INFERENCE, NOT NEW EVIDENCE", "The developer permits 2015-derived structural borrowing. This does not prove persistence into late 2016 / early 2017 or supply the missing target-era Home images. Other routes retain the original era anchor.", 1175)
    section(88, 1210, "OUTSIDE THIS APPROVAL", "Native navigation, unknown composite, exact geometry/tokens, unseen behavior, expanded composer, audience/privacy and other routes. No p0-07, application implementation, learning completion, merge or Phase 1.", 1495)
    section(88, 1525, "NO RECONFIRMATION OF B NEEDED", "The structure exception is already approved. The remaining decision is the single concrete baseline and test-context proposal on the right, after independent review. No new source hunt is required to prepare it.", 1795)

    section(1018, 560, "SOURCE / DOCUMENTED RASTER CROPS", "REF-2015-001, one 1600 x 1020 composite. Desktop [234,104,1305,772); phone [1172,376,1474,907). Same visible structure as page 1. No covered or unseen content reconstructed.", 825)
    section(1018, 875, "PROPOSED MODERN VALIDATION CONTEXTS", "Desktop 1280 x 800 CSS: left rail, compact composer, two card columns. Phone 390 x 844 CSS: one column and pencil, no persistent side rail or native bottom destinations. Project DPR 1 for both, not historical DPR.", 1175)
    section(1018, 1210, "RISK / EXCLUDED REGIONS", "Exclude hardware frames, phone OS keys, occluded desktop area and unseen below-fold content. January 2017 density may differ. No historical CSS sizes, breakpoint, drawer behavior or tokens inferred from these crops.", 1495)
    section(1018, 1525, "ONE REMAINING DECISION AFTER REVIEW", "Approve WEB-HOME-01 source/crops/exclusions and both project test sizes together, accepting the 2015-derived risk. Historical geometry and component/interaction/privacy gaps stay gated. This proposal is not yet approved.", 1795)

    b.text("Test sizes are project choices, not recovered historical viewports", 60, 1860, 1800, size=32, bold=True)
    b.text("1280 x 800 gives a concrete multi-column desktop check; 390 x 844 gives a narrow phone fitting/overflow check. Neither viewport has been tested in an app. Other sizes and breakpoints remain unresolved.", 60, 1911, 1800, size=28, color=MUTED, bottom=2010)
    b.footer("p0-06 BLOCKED / structure exception approved / final baseline pending / 6 of 55 tasks / app 0 of 46 / p0-07 unstarted")
    b.save("02-decision-options.png")

    for name in ["01-evidence-and-gaps.png", "02-decision-options.png"]:
        manifest.setdefault("outputs", {})[name] = {"sha256": sha256((OUT / name).read_bytes()).hexdigest(), "size": list(Image.open(OUT / name).size)}
    import json
    (OUT / "render-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    sections = "\n".join(f'<section><h2>{escape(title)}</h2><a href="{name}"><img src="{name}" alt="{escape(alt)}"></a><p><a href="{name}">Open full-resolution PNG</a></p></section>' for name, title, alt in [
        ("01-evidence-and-gaps.png", "1. Existing images and target-era gaps", "Two missing target-era web Home placeholders, 2015 desktop and phone web crops, native Android browse comparisons and an unknown composite; all dated and qualified."),
        ("02-decision-options.png", "2. Approved structure and pending WEB-HOME-01", "Approved 2015-derived web Home structure borrowing beside a pending source/crop/exclusion and modern project viewport proposal. No final baseline or implementation approval."),
    ])
    (OUT / "index.html").write_text('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Private p0-06 visual decision package</title><style>body{font:18px system-ui,sans-serif;background:#edf0f3;color:#202936;margin:24px auto;max-width:1920px;padding:0 16px}img{display:block;width:100%;height:auto}a{color:#176358}section{margin:32px 0}h1{font-size:28px}</style><h1>Private p0-06 visual decision package</h1><p>Updated 2026-10-27. B approved for web Home structure only; WEB-HOME-01 baseline/viewport proposal pending. Images remain local. No external requests, scripts or fonts. Click each page for readable full resolution. No tokens, application work or merge authorized.</p>' + sections + '</html>\n', encoding="utf-8")
    print(f"Rendered two PNG pages, local index.html and render-manifest.json in {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
