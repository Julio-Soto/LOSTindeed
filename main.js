var C = document.getElementById('C');
var ctx = C.getContext("2d");
var container = document.getElementById('container');
window.addEventListener('keydown',readKey,false);
window.addEventListener('resize',resizeContainer,false);

resizeContainer();
function resizeContainer() {
  if(window.innerHeight > 600 ){
    var pad =  (window.innerHeight - 600) /2;  
    container.style.padding = "" + pad + "px 0 ";
  }
}
function readKey(e) {
  if(e.key == 'ArrowRight')
    champion.X += champion.speed, champion.Xdir = -1, champion.Ydir = 0;
  if(e.key == 'ArrowLeft')
    champion.X -= champion.speed , champion.Xdir = 1, champion.Ydir = 0;
  if(e.key == 'ArrowUp')
    champion.Y -= champion.speed, champion.Ydir = 1, champion.Xdir = 0;
  if(e.key == 'ArrowDown')
    champion.Y += champion.speed, champion.Ydir = -1, champion.Xdir = 0;
}

var POS = function (x,y,size,speed,xs,ys) {
  this.X = x;
  this.Y = y;
  this.size = size;
  this.speed = speed;
  this.Xs = xs;
  this.Ys = ys;
  this.move = function(){
    this.X += this.Xs * this.speed;
    this.Y += this.Ys * this.speed;
    if(this.X > 850 || this.X < 0)
      this.Xs = this.Xs * -1;
     if(this.Y > 450 || this.Y < 0)
      this.Ys = this.Ys * -1;
  }
}

var myPOS = new POS(800,100,20,5,-1,2);

var champion = {
  X : 150,
  Y : 250,
  speed : 5,
  Xdir : -1,
  Ydir : 0
}

function drawChampion() {
  ctx.strokeStyle="#76daff";
  if(champion.Xdir != 0)
    drawEllipse(champion.X,champion.Y, 25, 10);
   if(champion.Ydir != 0)
    drawEllipse(champion.X,champion.Y, 13, 22);
  
  ctx.beginPath();
  ctx.moveTo(champion.X + 4 * champion.Xdir, champion.Y + 4 * champion.Ydir);
  ctx.lineTo(champion.X + 100 * champion.Xdir, champion.Y + 100 * champion.Ydir);
  ctx.stroke();
}

function drawPOS(pos) {
  drawCircle(pos.X,pos.Y,pos.size,'#220');  
  ctx.beginPath();
  ctx.arc(pos.X,pos.Y - pos.size,pos.size,0,2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(pos.X-10,pos.Y + pos.size,pos.size,0,2*Math.PI);
  ctx.fill();
}

function drawCircle(x,y,r,color) {
  ctx.fillStyle = color;//1a0d00  
  ctx.beginPath();
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.fill();
}

function drawEllipse(centerX, centerY, width, height) {
	
  ctx.beginPath();
  
  ctx.moveTo(centerX, centerY - height/2); // A1
  
  ctx.bezierCurveTo(
    centerX + width/2, centerY - height/2, // C1
    centerX + width/2, centerY + height/2, // C2
    centerX, centerY + height/2); // A2

  ctx.bezierCurveTo(
    centerX - width/2, centerY + height/2, // C3
    centerX - width/2, centerY - height/2, // C4
    centerX, centerY - height/2); // A1
 
  ctx.strokeStyle = "#76daff";
  ctx.stroke();
  ctx.closePath();	
}   

function eraseCanvas(opacity) {
  ctx.beginPath();
  ctx.rect(0, 0, 900, 500);
  ctx.fillStyle = "rgba(26, 0, 0, " + opacity + ")";
  ctx.fill();
  //ctx.stroke();
}
function animation() {
  //champion.X -= champion.speed * champion.Xdir;
  //champion.Y -= champion.speed * champion.Ydir;
  myPOS.move();
  eraseCanvas(0.8);
  drawChampion();
  drawPOS(myPOS);
}

setInterval(animation,100);