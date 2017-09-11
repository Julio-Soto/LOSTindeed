var C = document.getElementById('C');
var ctx = C.getContext("2d");
var container = document.getElementById('container');
window.addEventListener('keydown',readKey,false);
window.addEventListener('resize',resizeContainer,false);
var POSarray = [];
var interval;

setLevel01();

function deathAnimation(){
    eraseCanvas(0.6);
    for(i = 0; i < POSarray.length; ++i)
        drawPOS(POSarray[i]);  
    drawExplotion(explotion.X,explotion.Y,explotion.r,explotion.r2);
    explotion.r += 5;
    if(explotion.r > 40) explotion.r = 0;
    explotion.r2 += 5;
    if(explotion.r2 > 40) explotion.r2 = 0 ;
}
function animation() {
 eraseCanvas(1.0);
  drawChampion();
  for(i = 0; i < POSarray.length; ++i)
    drawPOS(POSarray[i]);
  champion.move();
  for(i = 0; i < POSarray.length; ++i)
    POSarray[i].move();
    if(collisionChampPOS()) pauseGame();
}

window.onload = function() {
    interval = setInterval(animation,100);
}