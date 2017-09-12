var C = document.getElementById('C');
var ctx = C.getContext("2d");
var container = document.getElementById('container');
window.addEventListener('keydown',readKey,false);
window.addEventListener('resize',resizeContainer,false);
var POSarray = [];
var interval;
var corn;
var messages = ['DNA is Overated',
                'Will you Accept your Fate?',
                'Saying Oh Shiet! might help.',
                'how long will it be for you?',
                'Will you Find the Way?',
                'Did You Make a Wrong Turn?'];
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
  drawCorn();
  champion.move();
  for(i = 0; i < POSarray.length; ++i)
    POSarray[i].move();
    if(collisionChampPOS()) pauseGame();
}

window.onload = function() {
    interval = setInterval(animation,100);
}