from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
source = ROOT / "public" / "portfolio" / "masters" / "flowa-curve-to-plan.png"
target_dir = ROOT / "public" / "portfolio" / "derived"
target_dir.mkdir(parents=True, exist_ok=True)

with Image.open(source) as image:
    # Pixel crop only: preserves the final plan exactly as drawn on the source board.
    final_plan = image.crop((66, 625, 1384, 818))
    final_plan.save(target_dir / "flowa-final-plan.png", optimize=True)

icon_source = ROOT / "public" / "portfolio" / "masters" / "flowa-motion-algorithm.png"
with Image.open(icon_source) as image:
    # Original polygonal goat mark, cropped from the submitted presentation board.
    icon = image.crop((715, 0, 895, 180)).resize((96, 96), Image.Resampling.LANCZOS)
    icon.save(ROOT / "app" / "icon.png", optimize=True)

print(target_dir / "flowa-final-plan.png")
