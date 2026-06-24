"""Replace NoCode with Web in horizontal logo PNGs."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

IMG_DIR = Path(__file__).resolve().parent.parent / "assets" / "img"
TEXT_START = 422
ATELIER_X = 828
FONT_SIZE = 102
TEXT_Y = 148


def load_font(size: int):
    for path in (
        r"C:\Windows\Fonts\segoeuib.ttf",
        r"C:\Windows\Fonts\arialbd.ttf",
    ):
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def text_width(font, text: str) -> int:
    draw = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0]


def rebrand(src_name: str, dst_name: str, *, bg: tuple, fill: tuple):
    src = Image.open(IMG_DIR / src_name).convert("RGBA")
    w, h = src.size
    icon = src.crop((0, 0, TEXT_START, h))
    tail = src.crop((ATELIER_X, 0, w, h))

    font = load_font(FONT_SIZE)
    web_x = TEXT_START + text_width(font, "Web ")

    out = Image.new("RGBA", (w, h), bg)
    out.paste(icon, (0, 0), icon)
    out.paste(tail, (web_x, 0), tail)

    draw = ImageDraw.Draw(out)
    draw.text((TEXT_START, TEXT_Y), "Web", fill=fill, font=font)
    out.save(IMG_DIR / dst_name, optimize=True)
    print(f"OK {dst_name} tail_x={web_x}")


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


if __name__ == "__main__":
    main()
