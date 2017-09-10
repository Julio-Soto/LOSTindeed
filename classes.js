// classes ans objects

var champion = {
  X : 150,
  Y : 250,
  speed : 5,
  Xdir : -1,
  Ydir : 0
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

