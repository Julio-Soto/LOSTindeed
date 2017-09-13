// classes ans objects
var game = {
    paused : false,
    cornScore: 0
}
var explotion = {
    X : 0,
    Y : 0,
    r : 0,
    r2 : 30
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
      if(champion.X + champion.speed * champion.Xdir * -1 < 890 && champion.X + champion.speed * champion.Xdir * -1 > 10)
        champion.X -= champion.speed * champion.Xdir;
      //else console.log('door ' + collisionChampDoorX());
      if(champion.Y + champion.speed * champion.Ydir * -1 < 490 && champion.Y + champion.speed * champion.Ydir * -1 > 10)
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
var cornGrain = function(x,y){
    this.active = true;
    this.X =      x;
    this.Y =      y;
}
var doorEntry = function(side,e1,e2){
    this.side = side;
    this.e1 = e1;
    this.e2 = e2;
}
