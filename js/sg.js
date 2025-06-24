/*ARRAYS*/

/*Animate*/const arrA=[];

/*Backdrop*/const arrB=[];

/*Grid*/const arrG=[];

/*Buttons*/const Buttons=[];

/*Score*/const arrS=[];

/*Text*/const arrT=[];

/*Universal*/const arrU=[];

/*Sequence*/
const sequence=[
/*1   2   3   4   5*/
[[1],[0],[0],[0],[0]],/*s1:1*/
[[1],[0],[1],[0],[0]],/*s2:2*/
[[1],[0],[1],[0],[1]],/*s3:3*/
[[1],[0],[1],[1],[1]],/*s4:4*/
[[0],[0],[1],[1],[1]],/*s5:3*/
[[0],[0],[0],[1],[1]],/*s6:2*/
[[1],[0],[0],[1],[1]],/*s7:3*/
[[1],[0],[0],[1],[0]],/*s8:2*/
[[0],[0],[0],[1],[0]],/*s9:1*/
[[0],[0],[1],[1],[0]],/*s10:2*/
[[1],[0],[1],[1],[0]],/*s11:3*/
[[1],[1],[1],[1],[0]],/*s12:4*/
[[1],[1],[1],[0],[0]],/*s13:3*/
[[0],[1],[1],[0],[0]],/*s14:2*/
[[0],[0],[1],[0],[0]],/*s15:1*/
[[0],[0],[1],[0],[1]],/*s16:2*/
[[0],[1],[1],[0],[1]],/*s17:3*/
[[1],[1],[1],[0],[1]],/*s18:4*/
[[1],[1],[1],[1],[1]],/*s19:5*/
[[1],[1],[0],[1],[1]],/*s20:4*/
[[1],[1],[0],[1],[0]],/*s21:3*/
[[0],[1],[0],[1],[0]],/*s22:2*/
[[0],[1],[1],[1],[0]],/*s23:3*/
[[0],[1],[1],[1],[1]],/*s24:4*/
[[0],[1],[0],[1],[1]],/*s25:3*/
[[0],[0],[0],[1],[1]],/*s26:2*/
[[0],[0],[0],[0],[1]],/*s27:3*/
[[1],[0],[0],[0],[1]],/*s28:2*/
[[1],[1],[0],[0],[1]],/*s29:3*/
[[0],[1],[0],[0],[1]],/*s30:2*/
[[0],[1],[0],[0],[0]],/*s31:1*/
[[0],[0],[0],[0],[0]]
];

/*METHODS*/

/*1 set local storage object*/
Storage.prototype.setObject=function(k,v){
this.setItem(k,JSON.stringify(v));
};

/*2 get local storage object*/
Storage.prototype.getObject=function(k){
const v=this.getItem(k);
return v&&JSON.parse(v);};

/*3 render rounded rectangle*/
CanvasRenderingContext2D.prototype.roundedRect=function(x,y,w,h,r){
this.save();
this.translate(x-h/2,y-w/2);
this.moveTo(h/2,0);
this.arcTo(h,0,h,w,Math.min(w/2,r));
this.arcTo(h,w,0,w,Math.min(h/2,r));
this.arcTo(0,w,0,0,Math.min(w/2,r));
this.arcTo(0,0,h/2,0,Math.min(h/2,r));
this.lineTo(h/2,0);
this.restore();
};

/*5 set PI*/
function set2Pi(){
return parseFloat((2*Math.PI).toFixed(2));
}

/*6 set angle*/
function setArcStart(angle){
return parseFloat((Math.PI*angle).toFixed(2));
}

/*7 target mouse click*/
function isInsideCircle(mX,mY,cX,cY,r){
let distance=Math.sqrt(Math.pow(mX-cX,2)+Math.pow(mY-cY,2));
return distance<=r;
}

/*8 Clockify*/
function clockify(t){
const m=mins(t);
const s=secs(t);
return m+s;
}

/*9 Minutes*/
function mins(t){
const m=Math.floor(t/60);
return `${m.toString().padStart(2,'0')}:`;
}

/*10 Seconds*/
function secs(t){
const s=Math.floor(t%60);
return `${s.toString().padStart(2,'0')}`;
}

/*COLOURS*/

/*11 custom names*/
function colorName(name){
let code = {
    offBlack:['0.725,0%,25%,1.0'],
    flatGrey:['0.725,0%,55%,1.0'],
    darkGrey:['0.725,0%,75%,1.0'],
    softGrey:['0.725,0%,85%,1.0'],
    offWhite:['0.95,0%,80%,1.0']};
return `hsla(${code[name]})`;
}

/*12 set dark*/
function dark(){
	return 'black'// 'hsl(0.925, 25%, 35%, 0.8)'
};

/*13 set light*/
function light(){
	return 'white'// 'hsl(0.725, 3%, 85%, 0.8)'
};

function hide(){
	return 'transparent';
}

/*15 family color*/
function familyColor(name){

switch(name){
	case 0:
		var warm=color('warmY');
        break;
	case 1:
        var warm=color('warmR');
        break;
	case 2:
    	var warm=color('warmG');
        break;
	case 3:
		var warm=color('warmB');
        break;
	case 4:
    	var warm=color('warmM');
        break;
    default:
        break;
	}
return warm;
}


/*16 RGBA colour shades to match iOS app*/
function color(color){
let code = {
    warmY:[235,235,0,1],
    paleY:[255,255,168,1],
    flatY:[235,235,0,0.5],
    darkY:[235,205,128,0.625],
    warmR:[255,16,64,1],
    paleR:[255,128,140,1],
    flatR:[255,16,64,0.5],
    darkR:[255,0,0,0.625],
    warmG:[64,255,0,1],
    paleG:[144,255,128,1],
    flatG:[144,255,128,0.5],
    darkG:[64,255,32,0.625],
    warmB:[0,180,255,1],
    paleB:[124,255,255,1],
    flatB:[124,255,255,0.5],
    darkB:[0,144,255,0.625],
    warmM:[255,80,255,1],
    paleM:[255,208,255,1],
    flatM:[255,208,255,0.5],
    darkM:[255,80,244,0.625]};
return `rgba(${code[color]})`;
}

/*17 family colour gradient*/
function setLinearGradient(family, gradient){
switch (family){
    case 0:
        var warm = 'dimGrey';
        var pale = 'silver';
    	break;
    case 1:
        var warm = color('warmY');
        var pale = color('paleY');
    	break;
	case 2:
        var warm = color('warmR');
        var pale = color('paleR');
        break;
    case 3:
        var warm = color('warmG');
        var pale = color('paleG');	
        break;
	case 4:
        var warm = color('warmB');
        var pale = color('paleB');
        break;
	case 5:
        var warm = color('warmM');
        var pale = color('paleM');
        break;
	default:
        break;
    }
	gradient.addColorStop(1, warm);
    gradient.addColorStop(0, pale);
return gradient;
}

/*22 Henge25*/
function henge25(ctx){
const spec={
    numberOf:25, //80,
   arcRadius:158, //180,
    arcStart:setArcStart(0.45),
     originX:ctx.mid.x,
     originY:ctx.mid.y,
	  corner:1.5,
	 hFactor:42,
	 wFactor:21,
      border:0.2
};
let h25=hGen(spec);
return h25;
}

/*23 Generate henge*/
function hGen(s){let h={
		size:s.numberOf,
	      aR:s.arcRadius,
	      sA:s.arcStart,
	     pi2:set2Pi(),
	      oX:s.originX,
	      oY:s.originY,
		  cR:s.corner,
	   width:s.wFactor*s.corner,
	  height:s.hFactor*s.corner,
	  border:s.border,
	       R:[],
	       X:[],
	       Y:[],
	      X1:[],
	      Y1:[],
	      X2:[],
	      Y2:[],
	    all7:[],
  loadArrays:function(){
        
		/*how many touch points and how big*/        
        let max=this.size;
        let radius=this.width/2;
		Buttons.push(max, radius);

		for(let i=0;i<max;i++){
		/*rotation angles*/
			let angle=this.sA+i*this.pi2/max;
			if(angle>this.pi2){
				angle=angle-this.pi2;
			}
			this.R.push(parseFloat(angle.toFixed(2))
		);/*centre coordinates*/
		const x=this.oX+this.aR*Math.cos(angle);
		const y=this.oY+this.aR*Math.sin(angle);
		this.X.push(parseFloat(x.toFixed(2)));
		this.Y.push(parseFloat(y.toFixed(2)));
		/*corner coordinates*/
		const x1=x-this.width/2;
		const y1=y-this.height/2;
		const x2=x1+this.width;
		const y2=y1+this.height;
		this.X1.push(parseFloat(x1.toFixed(2)));
		this.Y1.push(parseFloat(y1.toFixed(2)));
		this.X2.push(parseFloat(x2.toFixed(2)));
		this.Y2.push(parseFloat(y2.toFixed(2)));}
		
		/*Pack 7 arrays*/
		this.all7.push(this.X,this.Y,this.R,this.X1,this.Y1,this.X2,this.Y2);
		/*Pack touch points*/
		Buttons.push(this.X,this.Y)}
		};
	h.loadArrays();
	return h;
}

/*INIT*/

/*24 event listener entry point*/
//window.addEventListener("DOMContentLoaded", () => {
//document.addEventListener("csoundReady", () => {
//  console.log("🎬 DOM is ready and Csound initialized");
//  console.log("🎬 DOM is ready");
//  initSG();  // Now launch full GUI
//});

/*25 init*/
function initSG(){
//console.log("✅ sg.js loaded");
initCanvas();
saveCanvas(0);
savePhoneHenge25();
tapToStart();
}

/*BACKGROUND*/

/*26 save properties*/
function initCanvas(){
const cnv = document.getElementById('mobile');
let ctx = cnv.getContext('2d');
ctx.w = cnv.width;
ctx.h = cnv.height;
ctx.mid = {x:ctx.w/2, y:ctx.h/2};
ctx.pi2 = set2Pi();
ctx.tapRadius = 50;
ctx.cornerRadius = 25;    
arrU.push({ cnv: cnv, ctx: ctx });
initText(ctx);
}

/*27 text grid */
function initText(ctxT){
ctxT.textAlign = 'center';
ctxT.textBaseline = 'middle';
const x = ctxT.mid.x, y = ctxT.mid.y;
ctxT.grid = {
x1:x*0.25,
y1:y*0.25,
x2:x*0.5,
y2:y*0.5,
x3:x,
y3:y,
x4:x*1.5,
y4:y*1.5,
x5:x*1.75,
y5:y*1.75
};
arrT.push({ ctxT: ctxT });
}

/*22 save background*/
function saveCanvas(f){
const{ ctx }=arrU[0];
const ctxB = ctx;
ctxB.cornerRadius = 25;
ctxB.shadowColor = 'offWhite';
ctxB.shadowOffsetX = 0;
ctxB.shadowOffsetY = -2.5;
ctxB.strokeStyle = 'lightGrey';
ctxB.fillStyle = pickBackground(ctxB, f);
arrB.push({ ctxB: ctxB });
}

/*23 pick background colour*/
function pickBackground(ctxB, f){
/*make gradient vertical*/
const gradient = ctxB.createLinearGradient(0, ctxB.h, 0, 0);
switch(f){
	case 0:/*orphan canvas*/
		var background = setLinearGradient(f, gradient);
	return background;
	default:/*1-to-5 family canvas*/
		var background = setLinearGradient(f, gradient);
	return background;
	}
}

/*24 draw background*/
function drawCanvas(){
const { ctxB } = arrB[0];
ctxB.beginPath();
ctxB.roundRect(0, 0, ctxB.w, ctxB.h, ctxB.cornerRadius);
ctxB.fill();
ctxB.stroke();
ctxB.closePath();
}

/*TEXT*/

/*25 draw 1st level text*/
function drawTopText(text){
const{ctxT} = arrT[0];
const x = ctxT.grid.x3, y = ctxT.grid.y1, size = 30;
drawText(text, x, y, size);
}

/*26 draw 2nd level text*/
function drawSubText(text){
const{ctxT} = arrT[0];
const x = ctxT.grid.x3, y = ctxT.grid.y2, size = 24;
drawText(text, x, y, size);
}

/*27 draw centre text*/
function drawMidText(text){
const{ctxT} = arrT[0];
const x = ctxT.grid.x3, y = ctxT.grid.y3, size = 24;
drawText(text, x, y, size);
}

/*28 draw low text*/
function drawLowText(text){
const{ctxT} = arrT[0];
const x = ctxT.grid.x3, y = ctxT.grid.y4, size = 18;
drawText(text, x, y, size);
}

/*29 draw text*/
function drawText(text, x, y, size) {
const{ ctx } = arrU[0];
ctx.font = setFont(size);
ctx.shadowColor = hide();/*No text shadow*/
ctx.fillStyle = 'white';
const ctxT = ctx;
ctxT.beginPath();
ctxT.fillText(text, x, y);
ctxT.closePath();
ctx.shadowColor = dark();/*Restore drawing shadow*/
}

/*30 text font*/
function setFont(s){
	return `${s}px Helvetica Neue, Helvetica, Arial, sans-serif`;
}

/*31 text color*/
function setTextColor(f){
switch(f){
	 case 2: return 'white';
    default: return 'black';
	}
}

/*ANIMATION*/

/*49 save Henge25*/
function savePhoneHenge25(){
const{ctx}=arrU[0];
const h=henge25(ctx);
const H={size:h.size,border:h.border,width:h.width,height:h.height,radius:h.cR,arrs:h.all7};arrA.push({H});
}

/*50 draw henge25*/
function drawPhoneHenge25(state){
const stateBits = getStateBits(state);
drawState(stateBits);
}

function drawHenge25(state){
const stateBits = getStateBits(state);
drawState(stateBits);
}

function getStateBits(state){ /*5-bit code*/
	return sequence[state % sequence.length];
}

function clearCanvas(ctx) {
	ctx.clearRect(0, 0, ctx.w, ctx.h);
	}

function redrawCanvas(ctx){
	  ctx.fillStyle  = 'grey';
	  ctx.beginPath();
	  ctx.roundRect(0, 0, ctx.w, ctx.h, 25);
	  ctx.fill();
	  ctx.stroke();
	  ctx.closePath();
	}

function drawState(sB){
const{ ctx } = arrU[0];
const ctxA = ctx;
const{H} = arrA[0];
/*Unpack H.arrs*/
const[X, Y, R, X1, Y1, X2, Y2] = H.arrs;
const max = H.size, w = H.width, h = H.height, r = H.radius;
ctxA.strokeStyle = 'white';
ctxA.lineWidth = H.border;

for(let i = 0; i < max; i++){
const family = (i % 5) + 1; const mask = sB[i % 5]; const bit = mask * family; 
const x = X[i]; const y = Y[i]; const angle = R[i]; 
const g = ctxA.createLinearGradient(X1[i], Y1[i], X2[i], Y2[i]);

/*Draw retrieved objects*/
ctxA.beginPath();
ctxA.save();
ctxA.translate(x, y);
ctxA.rotate(angle);
ctxA.translate(-x, -y);
ctxA.roundedRect(x, y, w, h, r);
 switch (bit){/*hide or show*/
	case 0:
		ctxA.fillStyle = hide();
	break;
	default:
		ctxA.fillStyle = setLinearGradient(family, g);
	break;
	}
ctxA.fill();
ctxA.stroke();
ctxA.closePath();
ctxA.restore();}
}

/*SEQUENCE*/

//tapToStart
function tapToStart() {
const{ cnv, ctx } = arrU[0];
drawCanvas(0);
drawPhoneHenge25(18);

//const previewMode = true;
//const fullSecond = previewMode ? 1 : 1000;
//const allowTaps = !previewMode;

scanButtons();

// start animation
let animationStopped = true;
    cnv.addEventListener('click', function goSelectHandler() {
		if(!running){
			animationStopped = false;
    		runConcert(ctx);
		}
    });
}


/*52 tap detection*/
function scanButtons(){
  const { cnv, ctx } = arrU[0];
  const max    = Buttons[0];
  const radius = Buttons[1];
  const X      = Buttons[2];
  const Y      = Buttons[3];

  console.log(`✅ scanButtons() called — max: ${max}, radius: ${radius}`);

cnv.addEventListener('click', function playSoundHandler(e){
  let mX = e.clientX - cnv.getBoundingClientRect().left;
  let mY = e.clientY - cnv.getBoundingClientRect().top;

  let hit = false;

  for (let i = 0; i < max; i++) {
    if (isInsideCircle(mX, mY, X[i], Y[i], radius)) {

  console.log(`🖱 Clicked at (${mX.toFixed(1)}, ${mY.toFixed(1)})`);
  console.log(`✅  button ${i+1}: (${X[i]}, ${Y[i]})`);

      const freq = 200 + i * 5;
      const harm = (i % 5) + 4;
      const btn  = i + 1;

      csound.evalCode(`i1 0 1 ${freq} ${harm}`);
      console.log(`🔔 Button ${btn} hit: freq ${freq}, harm ${harm}`);

      hit = true;
      break;
    }
  }

  if (!hit) {
    console.log("🛑 No button hit");
  }
});
}


/*53 preview states*/
function runConcert(ctxA){
const totalStates = 31;
const stateDuration = 24;

//preview:1 concert: 1000 
const fullSecond = 1;

let now = performance.now();
let state = 0;
let seconds = 0;

/*rAF loop*/
function draw(timestamp) {
if (state >= totalStates) {/*rerun player configuration*/
	return;
	}
	   
const frame = timestamp - now;

if (frame >= fullSecond) {
	seconds++;
	now = timestamp;
if ((seconds % stateDuration) == 0) {
	state++;
	}
}

const stateStr = `${state + 1}`;
const timeStr = clockify(seconds);
clearCanvas(ctxA);
redrawCanvas(ctxA); 

if (state <totalStates) {
    drawTopText(stateStr);
    drawMidText(timeStr);
} else {
	drawTopText('Phonehenge');
    drawMidText('duration ' + timeStr);
	drawLowText('G.Schiemer Ⓒ 2025');
    } 
	drawHenge25(state);
    requestAnimationFrame(draw);
	}
    
	redrawCanvas(ctxA);
	
    /*restart rAF loop*/
    requestAnimationFrame(draw);
}

window.initSG = initSG; // without this there is no GUI
