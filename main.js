var C = document.getElementById('C');
var ctx = C.getContext("2d");
var container = document.getElementById('container');
window.addEventListener('keydown',readKey,false);
window.addEventListener('resize',resizeContainer,false);


var myPOS = new POS(800,100,20,5,-3,1);

function animation() {
  //champion.X -= champion.speed * champion.Xdir;
  //champion.Y -= champion.speed * champion.Ydir;
  myPOS.move();
  eraseCanvas(0.8);
  drawChampion();
  drawPOS(myPOS);
}

setInterval(animation,100);