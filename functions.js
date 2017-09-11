// primitive functions for game

resizeContainer();
function resizeContainer() {
  if(window.innerHeight > 600 ){
    var pad =  (window.innerHeight - 600) /2;  
    container.style.padding = "" + pad + "px 0 ";
  }
}
// key controls
function readKey(e) {
  if(e.key == 'ArrowRight')
    champion.Xdir = -1, champion.Ydir = 0;
  if(e.key == 'ArrowLeft')
     champion.Xdir = 1, champion.Ydir = 0;
  if(e.key == 'ArrowUp')
     champion.Ydir = 1, champion.Xdir = 0;
  if(e.key == 'ArrowDown')
     champion.Ydir = -1, champion.Xdir = 0;
}

// drawing functions
function drawChampion() {
  drawCircle(champion.X, champion.Y, 5, "#aaf");
  ctx.strokeStyle="#aaf";
  if(champion.Xdir != 0)
    drawEllipse(champion.X - 4 * champion.Xdir,champion.Y, 25, 10),drawTailHor(champion.X, champion.Y, champion.s, champion.tail);
   else
    drawEllipse(champion.X,champion.Y - 4 * champion.Ydir, 13, 22),drawTailVer(champion.X, champion.Y, champion.s, champion.tail);
}
function drawTailHor(x, y, s, t) {
  ctx.strokeStyle = "#aaf";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);  

  ctx.bezierCurveTo(
    x + t * 0.45 * champion.Xdir + 20 * Math.cos(s * (Math.PI / 180)),
    y + -25 * Math.sin(s * (Math.PI / 180)),
    x + t * 0.70 * champion.Xdir + 10 * Math.cos(s * (Math.PI / 180)),
    y + 20 * Math.sin(s * (Math.PI / 180)),
    x + t * 1.0 * champion.Xdir + 10 * Math.cos(s * (Math.PI / 180)),
    y + 1.0 * Math.sin(s * (Math.PI / 180))
  );
  champion.speed +=  10 * Math.cos(s * (Math.PI / 180));
  ctx.stroke();
}
function drawTailVer(x, y, s, t) {
  ctx.strokeStyle = "#aaf";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);//initial point

  ctx.bezierCurveTo(
    x + -25 * Math.sin(s * (Math.PI / 180)),   
    y + t * 0.45 * champion.Ydir + 20 * Math.cos(s * (Math.PI / 180)),
    x + 20 * Math.sin(s * (Math.PI / 180)),
    y + t * 0.70 * champion.Ydir + 10 * Math.cos(s * (Math.PI / 180)),
    x - 1 * Math.sin(s * (Math.PI / 180)),
    y + t * 1.0 * champion.Ydir + 10 * Math.cos(s * (Math.PI / 180))
  );
    champion.speed +=  10 * Math.cos(s * (Math.PI / 180));
  ctx.stroke();
}
function collisionChampPOS(){
    var colided = false;
    var d = 0;
    for(i = 0; i < POSarray.length; ++i){
        d = Math.sqrt( (POSarray[i].X - champion.X) * (POSarray[i].X - champion.X) + (POSarray[i].Y - champion.Y) * (POSarray[i].Y - champion.Y) );
        if(d < POSarray[i].size * 2.0) colided = true;
    }
    if(colided == true)
    console.log(colided);
    return colided;
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
 
  ctx.strokeStyle = "#aaf";
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