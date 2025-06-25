import qrcode
from PIL import Image, ImageDraw, ImageFont
import os
import socket
import psutil

# === Detect local IP ===
def get_preferred_ip():
    addrs = psutil.net_if_addrs()
    for iface in addrs:
        for snic in addrs[iface]:
            if snic.family == socket.AF_INET and snic.address.startswith("192.168."):
                return snic.address
    # fallback: default method
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    finally:
        s.close()
    return ip

"""
def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Connect to a public DNS server (no data sent)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    finally:
        s.close()
    return ip
"""

local_ip = get_preferred_ip()
print(f"🌐 Detected local IP: {local_ip}")

# === Define QR targets ===
base_path = f"http://{local_ip}"
targets = {
    "conductor": f"{base_path}:8001/sg-es6-gui-V1.html?mode=concert",
    "player":    f"{base_path}:8002/sg-es6-gui-V1.html?mode=preview",
}

# === Output directory ===
qr_dir = "assets/QR/qr-images"
os.makedirs(qr_dir, exist_ok=True)

# === Colors and labels ===
styles = {
    "conductor": {"label": "CONDUCTOR", "color": "darkred"},
    "player":    {"label": "PLAYER", "color": "darkgreen"},
}

# === Generate and label each QR ===
def create_qr_with_label(name, url, label, color):
    qr = qrcode.QRCode(box_size=10, border=4)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color=color, back_color="white").convert("RGB")

    # Add label
    label_height = 40
    font = ImageFont.load_default()
    W, H = img.size
    canvas = Image.new("RGB", (W, H + label_height), "white")
    canvas.paste(img, (0, 0))

    draw = ImageDraw.Draw(canvas)
    bbox = draw.textbbox((0, 0), label, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    draw.text(((W - text_w) / 2, H + (label_height - text_h) / 2), label, fill=color, font=font)

    filename = os.path.join(qr_dir, f"qr_{name}.png")
    canvas.save(filename)
    print(f"📌 Saved QR code: {filename}")
    
# === Run ===
for name, url in targets.items():
    create_qr_with_label(name, url, styles[name]["label"], styles[name]["color"])

