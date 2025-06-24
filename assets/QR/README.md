# QR Code Generator for Phonehenge GUI

This folder contains tools to generate QR codes that link to local instances of the Phonehenge ES6 GUI running on different ports. These QR codes allow quick access to the application on mobile devices.

## 📁 Folder Structure

assets/
└── QR/
├── generate-qr.py # Python script to generate QR codes
└── qr-images/ # Output directory for generated PNG files

## ⚙️ How to Use

Run the generator script from the project root or from within the `assets/QR/` directory:

```bash
python3 assets/QR/generate-qr.py
This will create two QR code images:
qr_localhost8001_concert.png – for the Conductor
qr_localhost8002_preview.png – for the Player
These point to:
http://localhost:8001/sg-es6-gui-V1.html?mode=concert
http://localhost:8002/sg-es6-gui-V1.html?mode=preview
Each image is labeled clearly (CONDUCTOR or PLAYER) and colored accordingly.
🧼 Notes
The output images are saved in assets/QR/qr-images/.
The script will create the folder automatically if it doesn't exist.
QR images are ignored by Git via .gitignore.
📦 Dependencies
Make sure the following Python packages are installed:
pip install qrcode[pil] pillow
🧪 Tip
To test on a phone:
Start a local server on your laptop (e.g., using python3 -m http.server 8002)
Ensure both phone and laptop are on the same Wi-Fi network
Replace localhost in the QR URLs with your laptop’s IP (e.g. 192.168.1.42)
Re-run generate-qr.py with updated URLs

---