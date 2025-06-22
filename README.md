# consort-GUI

This directory contains an early ES6-compliant version of the Phonehenge GUI. It provides a standalone interface for the 25-phone visual layout, designed before Csound integration.

## Usage

To run the GUI locally:

```bash
cd ~/Developer/SG/consort-GUI
python3 -m http.server 8002
Then open in a browser:
http://localhost:8002/sg-es6-gui-V1.html
Notes
This GUI does not use dynamic module loading or WebAssembly.
Useful for comparing against Csound-enabled versions in SatGam.
Serves as a baseline when troubleshooting ES6 animation and layout logic.

Paste it **as one block** into Terminal (not BBEdit), and the `README.md` will be replaced instantly.
