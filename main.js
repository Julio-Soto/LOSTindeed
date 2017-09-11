var C = document.getElementById('C');
var ctx = C.getContext("2d");
var container = document.getElementById('container');
window.addEventListener('keydown',readKey,false);
window.addEventListener('resize',resizeContainer,false);
var POSarray = [];
var interval;

setLevel01();

function animation() {
  champion.move();
  for(i = 0; i < POSarray.length; ++i)
    POSarray[i].move();
    if(collisionChampPOS()) pauseGame();
  eraseCanvas(1.0);
  drawChampion();
  for(i = 0; i < POSarray.length; ++i)
    drawPOS(POSarray[i]);
}

window.onload = function() {
    interval = setInterval(animation,100);
}