function respawn(){
    score = 0;
    direction = 3;
    body[0].x = canvas.width - 200;
    body[0].y = canvas.height / 2;
}
// math funcs
function random( max ){
    return Math.floor( Math.random() * max );
}
// detect which key was pressed
window.addEventListener('keydown', function( event ){
    lastKeyPressed = event.keyCode;
    // console.log(lastKeyPressed);
}, false);

console.log('from misc.js');