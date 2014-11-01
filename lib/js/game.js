// PART 2 : Animating the canvas

//=================================================================
// globals

var canvas,
    context;

// will save last key pressed
var lastKeyPressed,
    // is game pused?
    isGamePaused = false;

// position properties
var x = 50, y = 50;

// constants
var KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    KEY_PAUSE = 13; // key for pause the game ( using enter key )

// main character direction
var direction = 1;

//=================================================================

//=================================================================
// make the game run

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
//=================================================================

//=================================================================
// game world

// function for paint all in the canvas
function paint( context ){
    // draw background
    context.fillStyle = '#f7f7f7';
    context.fillRect( 0, 0, canvas.width, canvas.height );

    // draw main character ( a simple rectangle )
    context.fillStyle = '#c98787';
    context.fillRect( x, y, 30, 30 );

    // show last key pressed
    var message = 'Last key press: ' + lastKeyPressed;
    context.font = '12px Open Sans Condensed';
    context.fillText( message, 10, 20 );

    if ( isGamePaused ) {
        context.textAlign = 'center';
        context.font = '40px Open Sans Condensed'
        context.fillText( 'Game Paused', canvas.width / 2, canvas.height / 2 );
        context.textAlign = 'left';
    }
}
//=================================================================

//=================================================================
// game actions an behaviors

// function for call all actions in our world, like move objects...
function act(){
    // check if game is paused
    if ( lastKeyPressed == KEY_PAUSE ) {
        isGamePaused = !isGamePaused;
        lastKeyPressed = null;
    }
    if ( isGamePaused )
        return;


    // main character screen out
    if ( x > canvas.width || x < 0 )
        x = canvas.width / 2;
    if ( y > canvas.height || y < 0 )
        y = canvas.height / 2;

    // set direction to direction variable
    switch( lastKeyPressed ){
        case KEY_UP:
            direction = 0;
            break;
        case KEY_RIGHT:
            direction = 1;
            break;
        case KEY_DOWN:
            direction = 2;
            break;
        case KEY_LEFT:
            direction = 3;
            break;
    }

    // move our character depending of the direction variable
    switch( direction ){
        case 0:
            // move up
            y -= 5;
            break;
        case 1:
            // move right
            x += 5;
            break;
        case 2:
            //move down
            y += 5;
            break;
        case 3:
            // move left
            x -= 5;
            break;
    }

}

// detect which key was pressed
window.addEventListener('keydown', function( event ){
    lastKeyPressed = event.keyCode;
    console.log(lastKeyPressed);
}, false);
//=================================================================
