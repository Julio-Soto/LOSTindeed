var C = document.getElementById('C');
var ctx = C.getContext("2d");
var container = document.getElementById('container');
window.addEventListener('keydown',readKey,false);
window.addEventListener('resize',resizeContainer,false);



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

var myPOS = new POS(800,100,20,5,-3,1);

var champion = {
  X : 150,
  Y : 250,
  speed : 5,
  Xdir : -1,
  Ydir : 0
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