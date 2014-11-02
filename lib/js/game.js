// PART 2 : Animating the canvas

//=================================================================
// globals

var canvas,
    context;
// Perfomance concernc
var FPS, frames = 0, lastUpdate = 0, acumDelta = 0;

// will save last key pressed
var lastKeyPressed,
    // is game pused?
    isGamePaused = false,
    score = 0;

// constants
var KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    KEY_PAUSE = 13; // key for pause the game ( using enter key )

// main character direction
var direction = 2;

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
    var now, deltaTime;
    requestAnimationFrame( run );

    // perfomance concerns
    now = Date.now();
    deltaTime = ( now - lastUpdate ) / 1000;
    if ( deltaTime > 1 ) deltaTime = 0;
    frames += 1;
    acumDelta += deltaTime;
    if ( acumDelta > 1 ) {
        FPS = frames;
        frames = 0;
        acumDelta = 0;
    }

    act();
    paint( context );

    lastUpdate = now;
}
//=================================================================

//=================================================================
// character and players properties

var x = 480, y = 100;
var player = new Rectangle( x, y ),
    food = new Rectangle( 600, 100 );

//=================================================================

//=================================================================
// paint game world

// function for paint all in the canvas
function paint( context ){
    // draw background
    context.fillStyle = '#f7f7f7';
    context.fillRect( 0, 0, canvas.width, canvas.height );

    // draw main character ( a simple rectangle )
    context.fillStyle = '#c98787';
    player.draw();

    // draw a world object
    context.fillStyle = '#c490e5';
    food.draw();

    // draw game score
    context.font = '20px Open Sans Condensed';
    context.fillStyle = '#c98787';
    context.fillText('Score ' + score, canvas.width - 100, 30);

    // show last key pressed
    context.font = '12px Open Sans Condensed';
    var devMessage = 'Last key press: ' + lastKeyPressed;
        devMessage += ' | FPS: ' + FPS;
        devMessage += ' | frames: ' + frames;
        devMessage += ' | acum delta: ' + acumDelta;
    context.fillText( devMessage, 10, 20 );

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

    if ( player.intersects( food ) ) {
        score += 1;
        food.x = random( canvas.width - 50 );
        food.y = random( canvas.height - 50 );
    }

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
            player.y -= 5;
            break;
        case 1:
            // move right
            player.x += 5;
            break;
        case 2:
            //move down
            player.y += 5;
            break;
        case 3:
            // move left
            player.x -= 5;
            break;
    }

    // main character screen out
    if ( player.x > canvas.width || player.x < 0 )
        player.x = canvas.width / 2;
        
    if ( player.y > canvas.height || player.y < 0 )
        player.y = canvas.height / 2;

}

// detect which key was pressed
window.addEventListener('keydown', function( event ){
    lastKeyPressed = event.keyCode;
    console.log(lastKeyPressed);
}, false);

//=================================================================

//=================================================================
// Game world objects

function Rectangle( x, y, width, height ){
    this.x = x ? x : canvas.width / 2;
    this.y = y ? y : canvas.height / 2;
    this.width = width ? width : 50;
    this.height = height ? height : 50;
}
Rectangle.prototype.draw = function(){
    context.fillRect( this.x, this.y, this.width, this.height );
}
Rectangle.prototype.intersects = function( world_object ){
    if ( typeof world_object != 'object' || !world_object || !(world_object instanceof Object)  )
        return;
                        
    var isIntersected = this.x < world_object.x + world_object.width && // check collitions in left side
                        this.x + this.width > world_object.x && // check collitions in right side
                        this.y < world_object.y + world_object.height && // check collitions in top side
                        this.y + this.height > world_object.y; // check collitions in botton side
    return isIntersected;
}
//=================================================================

//=================================================================
// math funcs

function random( max ){
    return Math.floor( Math.random() * max );
}
//=================================================================