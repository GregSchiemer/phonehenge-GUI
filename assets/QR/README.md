# QR Code Generator for Phonehenge GUI

QR codes allow quick access to the application for performing Phonehenge on mobile devices. This folder contains tools to generate QR codes that link to local instances of the ES6 GUI running on different ports. 

📁 **Folder Structure**

<pre>  assets/
  └── QR/
      ├── generate-qr.py   # Python script to generate QR codes
      └── qr-images/       # Output directory for generated PNG files 
</pre>

⚙️ **How to Use**

Run the generator script from the project root or from within the `assets/QR/` directory:

    `python3 assets/QR/generate-qr.py`

This will create two colour-coded QR code images labeled CONDUCTOR or PLAYER.

  - qr_localhost8001_preview.png – for Conductor
  - qr_localhost8002_preview.png – for Players

These point to:
  - 'http://localhost:8001/sg-es6-gui-V1.html?mode=preview'
  - 'http://localhost:8002/sg-es6-gui-V1.html?mode=preview'

🧼 **Animation modes**

In concert mode, an animated 31-state sequence allow players to perform a work lasting 12':24".

In preview mode players are given a rapid animation overview.

To rehearse or perform the work, the mode is changed to concert, like so:
- 'http://localhost:8002/sg-es6-gui-V1.html?mode=concert'

🧼 **Notes**

The output images are saved in assets/QR/qr-images/.

The script will create the folder automatically if it doesn't exist.

QR images are ignored by Git via .gitignore.

📦 **Dependencies**

Make sure the following Python packages are installed:

    `pip install qrcode[pil] pillow`

🧪 **Testing on phones**

  Start a local server on your laptop (e.g., using 'python3 -m http.server 8002')

  Ensure both phone and laptop are on the same Wi-Fi network.

  Replace localhost in the QR URLs with your laptop’s IP (e.g. '192.168.1.42')

  Re-run 'generate-qr.py' with updated URLs

---
