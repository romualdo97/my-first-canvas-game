// PART 2 : Animating the canvas

// globals
var canvas,
    context;

var x = 0, y = 0;

// initializate game when DOM content is loaded
window.addEventListener('load', init, false);

// function for start the game
function init(){
    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');
    run();
}

// function for animate the world
function run(){
    requestAnimationFrame( run );
    act();
    paint( context );
}

// function for paint all in the canvas
function paint( context ){
    // draw background
    context.fillStyle = '#f7f7f7';
    context.fillRect( 0, 0, canvas.width, canvas.height );

    // draw main character ( a simple rectangle )
    context.fillStyle = '#c98787';
    context.fillRect( x, y, 30, 30 );
}

// function for call all actions in our world, like move objects...
function act(){
    // we will move our main character 'the rectangle' adding to pixels in each frame
    x += 2;
    y += 2;
    if ( x > canvas.width )
        x = 0;
    if ( y > canvas.height )
        y = 0;
}


