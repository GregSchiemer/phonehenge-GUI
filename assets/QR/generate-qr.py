# assets/QR/generate-qr.py
import os
import qrcode
from PIL import Image, ImageDraw, ImageFont


QR_DIR = "assets/QR/qr-images"
os.makedirs(QR_DIR, exist_ok=True)

def generate_qr_image(name, url, qr_id, foreground, background, side=130):
    extra_padding = int(side * 0.35)
    qr_width = side + extra_padding
    qr_height = side

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=3,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color=foreground, back_color=background).convert('RGB')
    img = img.resize((side, side), Image.LANCZOS)

    full_img = Image.new("RGBA", (qr_width, qr_height), (0, 0, 0, 0))
    full_img.paste(img, (extra_padding, 0))

    if qr_id:
        draw = ImageDraw.Draw(full_img)
        try:
            font = ImageFont.truetype("/Library/Fonts/Arial Bold.ttf", 24)
        except IOError:
            font = ImageFont.load_default()
        text_width = draw.textlength(qr_id, font=font)
        draw.text((extra_padding - text_width, 5), qr_id, fill="white", font=font)

    output_file = f"qr_{name}.png"
    output_path = os.path.join(QR_DIR, output_file)
    full_img.save(output_path)
    print(f"📌 Saved QR code: {output_path}")

# 🎯 Example usage
if __name__ == "__main__":
    generate_qr_image(
        name="localhost8001_concert",
        url="http://localhost:8001/sg-es6-gui-V1.html?mode=concert",
        qr_id="CONDUCTOR",
        foreground="black",
        background="white"
    )

    generate_qr_image(
        name="localhost8002_preview",
        url="http://localhost:8002/sg-es6-gui-V1.html?mode=preview",
        qr_id="PLAYER",
        foreground="blue",
        background="white"
    )
# generate_qr.py
import os
import qrcode
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "QR_images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def generate_qr_image(name, url, qr_id="", foreground="black", background="white", side=130):
    extra_padding = int(side * 0.35)
    qr_width = side + extra_padding
    qr_height = side

    # Create QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=3,
    )
    qr.add_data(url)
    qr.make(fit=True)
    qr_img_raw = qr.make_image(fill_color=foreground, back_color=background).convert('RGB')
    qr_img_raw = qr_img_raw.resize((side, side), Image.LANCZOS)

    # Composite image with padding for label
    qr_img = Image.new("RGBA", (qr_width, qr_height), (0, 0, 0, 0))
    qr_img.paste(qr_img_raw, (extra_padding, 0))

    # Draw label
    if qr_id:
        draw = ImageDraw.Draw(qr_img)
        try:
            font = ImageFont.truetype("/Library/Fonts/Arial Bold.ttf", 24)
        except IOError:
            font = ImageFont.load_default()
        text_width = draw.textlength(qr_id, font=font)
        draw.text((extra_padding - text_width, 5), qr_id, fill="white", font=font)

    # Save
    filename = f"qr_{name}.png"
    path = os.path.join(OUTPUT_DIR, filename)
    qr_img.save(path)
    print(f"📌 Saved QR code: {path}")

# Example usage
if __name__ == "__main__":
    generate_qr_image(
        name="localhost8001_concert",
        url="http://localhost:8001/sg-es6-gui-V1.html?mode=concert",
        qr_id="CONDUCTOR",
        foreground="black",
        background="white"
    )

    generate_qr_image(
        name="localhost8002_preview",
        url="http://localhost:8002/sg-es6-gui-V1.html?mode=preview",
        qr_id="PLAYER",
        foreground="blue",
        background="white"
    )

