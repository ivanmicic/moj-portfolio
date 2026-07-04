"""Generate horizontal Web Atelier Studio logo PNGs."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

IMG_DIR = Path(__file__).resolve().parent.parent / "assets" / "img"
TEXT_START = 422
FONT_SIZE = 112
TEXT_Y = 140
BRAND_TEXT = "Web Atelier Studio"
SQUARE_TEXT_START = 678
SQUARE_TEXT_Y = 992


def load_font():
    for path in (
        r"C:\Windows\Fonts\calibrib.ttf",
        r"C:\Windows\Fonts\arialbd.ttf",
    ):
        try:
            return ImageFont.truetype(path, FONT_SIZE)
        except OSError:
            continue
    return ImageFont.load_default()


def extract_icon(src: Image.Image, *, is_light: bool) -> Image.Image:
    icon = src.crop((0, 0, TEXT_START, src.height)).copy()
    if is_light:
        return icon

    pixels = icon.load()
    for y in range(icon.height):
        for x in range(icon.width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if r < 90 and g < 90 and b < 90:
                pixels[x, y] = (r, g, b, 0)
    return icon


def rebrand(src_name: str, dst_name: str, *, bg: tuple, fill: tuple):
    src = Image.open(IMG_DIR / src_name).convert("RGBA")
    w, h = src.size
    icon = extract_icon(src, is_light="light" in src_name)

    out = Image.new("RGBA", (w, h), bg)
    out.paste(icon, (0, 0), icon)

    draw = ImageDraw.Draw(out)
    draw.text((TEXT_START, TEXT_Y), BRAND_TEXT, fill=fill, font=load_font())
    out.save(IMG_DIR / dst_name, optimize=True)
    print(f"OK {dst_name}")


def rebrand_square():
    src = Image.open(IMG_DIR / "nocode-atelier-studio-square.png").convert("RGBA")
    out = src.copy()

    # Replace the old text while preserving the dark textured background.
    text_box = (640, 930, 1840, 1145)
    patch = src.crop((640, 1210, 1840, 1425)).filter(ImageFilter.GaussianBlur(1.2))
    mask = Image.new("L", (text_box[2] - text_box[0], text_box[3] - text_box[1]), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle((0, 0, mask.width, mask.height), radius=24, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(16))
    out.paste(patch, text_box, mask)

    draw = ImageDraw.Draw(out)
    draw.text((SQUARE_TEXT_START, SQUARE_TEXT_Y), BRAND_TEXT, fill=(255, 246, 203, 255), font=load_font())
    out.save(IMG_DIR / "web-atelier-studio-square.png", optimize=True)
    print("OK web-atelier-studio-square.png")


def main():
    rebrand(
        "nocode-atelier-studio.png",
        "web-atelier-studio.png",
        bg=(15, 15, 17, 255),
        fill=(255, 246, 203, 255),
    )
    rebrand(
        "nocode-atelier-studio-light.png",
        "web-atelier-studio-light.png",
        bg=(0, 0, 0, 0),
        fill=(36, 31, 26, 255),
    )
    rebrand_square()


if __name__ == "__main__":
    main()
