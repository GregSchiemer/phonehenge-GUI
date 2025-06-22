// js/csound-ES6/CsoundObj.js
// Enhanced test version for modular sound verification
// Adapted from original design by Steven Yi and Victor Lazzarini

export class CsoundObj {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.node = null;
    this.output = null;
    console.log("✅ CsoundObj constructed");
  }

  async compileOrc(orcString) {
    console.log("📄 compileOrc() called with:\n", orcString);

    try {
      await this.audioContext.audioWorklet.addModule('/libcsound-worklet.js');
      console.log("✅ AudioWorklet module loaded successfully");
    } catch (e) {
      console.error("❌ Failed to load AudioWorklet module:", e);
    }

    try {
      console.log("🔧 Attempting to create AudioWorkletNode...");
      this.node = new AudioWorkletNode(this.audioContext, 'csound-processor');
      console.log("✅ AudioWorkletNode created successfully");
    } catch (e) {
      console.error("❌ Failed to create AudioWorkletNode:", e);
    }

    this.output = this.node;
    this.node.port.postMessage({ type: 'compileOrc', orc: orcString });
    this.output.connect(this.audioContext.destination);
    console.log("🔌 Worklet module registered and output connected");
  }

  async start() {
    await this.audioContext.resume();
    console.log("▶️ start() called — AudioContext state:", this.audioContext.state);
  }

  evalCode(score) {
    if (this.node && this.node.port) {
      this.node.port.postMessage({ type: 'evalCode', code: score });
      console.log("🎼 evalCode() sent via postMessage:", score);
    } else {
      console.warn("⚠️ Csound node or port not ready.");
    }
  }
}