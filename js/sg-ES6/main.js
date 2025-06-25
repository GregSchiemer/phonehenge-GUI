// main.js — Entry point for ES6 GUI (optional CSOUND support)

import { installHengePrototype } from './canvasExtensions.js';
import { initCanvas, saveCanvasBackground } from './canvasUtils.js';
import { ColorFamily } from './color.js';
import { savePhoneHenge25 } from './henge.js';
import { runTimeStart } from './runTime.js';

let appInitialized = false;

export function initApp() {
  if (appInitialized) {
    console.log("↪️ App already initialized, resuming...");
    return;
  }

  console.log("🎡 Launching app...");
  appInitialized = true;

  installHengePrototype();
  initCanvas();               				// Setup base canvas + store in arrU
  saveCanvasBackground(ColorFamily.NONE);	// Setup background (arrB)
  savePhoneHenge25();						// Setup button geometry (arrA)
  runTimeStart();         				
}
