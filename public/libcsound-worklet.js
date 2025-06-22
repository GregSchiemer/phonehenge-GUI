// Simplified libcsound-worklet.js for AudioWorklet testing

console.log("🧪 Simple worklet file loaded");

class SilentProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    console.log("✅ SilentProcessor constructed");
  }

  process(inputs, outputs) {
    const output = outputs[0];
    for (let channel = 0; channel < output.length; channel++) {
      const outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; i++) {
        outputChannel[i] = 0;
      }
    }
    return true;
  }
}

registerProcessor('csound-processor', SilentProcessor);