// PART 4 : Creating the snake game

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
    isGameOver = false,
    score = 0;

// constants
var KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    KEY_PAUSE = 13; // key for pause the game ( using enter key )

// main character direction
var direction = 2;

var player, food, background, wall = [], body = [];

//=================================================================

//=================================================================
// make the game run

// initializate game when DOM content is loaded
window.addEventListener('DOMContentLoaded', init, false);

// function for start the game
function init(){
    console.log('from game.js:init()');
    
    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');
    
    startWorldObjects();
    
    run();
}

// function for animate the world
function run(){
    // console.log('from game.js:run()');
    
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
// character, players amd objects instances

function startWorldObjects (){
    console.log('from game.js:startWorldObjects()');
    
    var x = 480, y = 100;
    body.push( new Rectangle( x, y ) );
    body.push( new Rectangle( 0, 0 ) );
    body.push( new Rectangle( 50, 0 ) );
    
    food = new Rectangle( 600, 100 );
    
    background = new Rectangle( 0, 0, canvas.width, canvas.height );
    
    wall.push( new Rectangle( random( 960 - 50 ), random( 360 - 50 ) ) );
    wall.push( new Rectangle( random( 960 - 50 ), random( 360 - 50 ) ) );
}


//=================================================================

console.log('from game.js');