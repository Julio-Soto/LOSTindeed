var C = document.getElementById('C');
var ctx = C.getContext("2d");
var container = document.getElementById('container');
window.addEventListener('keydown',readKey,false);
window.addEventListener('resize',resizeContainer,false);
var POSarray = [];

POSarray.push(new POS(800,100,20,10,-3,1));
POSarray.push(new POS(200,300,15,10,3,-2));

function animation() {
  champion.move();
  for(i = 0; i < POSarray.length; ++i)
    POSarray[i].move();
    collisionChampPOS();
  eraseCanvas(1.0);
  drawChampion();
  for(i = 0; i < POSarray.length; ++i)
    drawPOS(POSarray[i]);
}

window.onload = function() {
    setInterval(animation,100);
}