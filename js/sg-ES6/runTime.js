// runTime.js
// Start live performance interaction

console.log('🔔 runTimeStart fired');

import { drawCanvas } from './canvasUtils.js';
import { drawPhoneHenge25 } from './henge.js';
import { drawTopText, drawSubText, drawMidText, drawLowText } from './text.js';
import { runConcert } from './animation.js';
import { arrU } from './canvasUtils.js';
import { initApp } from './main.js';
import { scanKeys } from './enableKeys.js';
import { isInsideCircle } from './helpers.js';
import { clockify } from './helpers.js';

const modeConfig = {
  concert: {
    name: 'CONCERT MODE',
    timePeriod: 1000,
    active: true
  },
  preview: {
    name: 'PREVIEW MODE',
    timePeriod: 1,
    active: false
  }
};

export function runTimeStart() {
const{ cnv, ctx } = arrU[0];
drawCanvas(0);
drawPhoneHenge25(18);
let seconds = 0;
const timeStr = clockify(seconds);

const isConcertMode = false;
const activeMode = isConcertMode ? modeConfig.concert : modeConfig.preview;

drawTopText('Phonehenge');
drawSubText('tap clock to start');
drawMidText(timeStr);

drawLowText(activeMode.name);

const timePeriod = activeMode.timePeriod;

scanKeys();

  cnv.addEventListener('click', function goSelectHandler(e) {
    let mX = e.clientX - cnv.getBoundingClientRect().left;
    let mY = e.clientY - cnv.getBoundingClientRect().top;
    let x = ctx.mid.x;
    let y = ctx.mid.y;
    let r = ctx.tapRadius;

    console.log(`✅ mid.x: ${x}, mid.y: ${y}, tap radius: ${r}`);

    if (isInsideCircle(mX, mY, x, y, r)) {
      	cnv.removeEventListener("click", goSelectHandler); // ✅ Prevent double-taps
      	console.log("✅ animation running");
    	runConcert(ctx, timePeriod);
    } else {
      console.warn("⚠️ Not triggered. Tap clock again");
    }
  });
}
