// classes ans objects
var game = {
    paused : false,
    cornScore: 0
}
var champion = {
  X : 150,
  Y : 250,
  r : 3,
  s : 0,
  tail : 80,
  speed : 20,
  Xdir : -1,
  Ydir : 0,
  move : function(){
      champion.s += 60;
      if(champion.s == 360) champion.s = 0;
      if(champion.X + champion.speed * champion.Xdir * -1 < 900 && champion.X + champion.speed * champion.Xdir * -1 > 0)
        champion.X -= champion.speed * champion.Xdir;
      if(champion.Y + champion.speed * champion.Ydir * -1 < 500 && champion.Y + champion.speed * champion.Ydir * -1 > 0)
        champion.Y -= champion.speed * champion.Ydir;
  }
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

