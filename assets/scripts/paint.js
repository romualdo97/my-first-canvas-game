// paint game world

// function for paint all in the canvas
function paint(){
    console.log(4);
    // console.log('from paint.js:paint()');
    
    // draw background
    // context.fillStyle = '#f87777';
    // background.draw();
    context.drawImage( iBackground, 0, 0, canvas.width, canvas.height );


    // draw the brick
    // context.fillStyle = '#ff7bdb';
    // brick.draw();
    
    // draw the food
    // context.fillStyle = '#f7e68b';
    // food.draw();
    context.drawImage( iFood, food.x, food.y );
    
    // draw the body
    // draw main character ( a simple rectangle )
    // context.fillStyle = '#7bb3ff';
    // body[0].draw( true );
    for ( var j = 0; j < body.length; j++ ){
        // body[j].draw();        
        context.drawImage( iBody , body[ j ].x, body[ j ].y );
    }        
    
    // draw the walls
    //context.fillStyle = '#b26af0';
    for ( var i = 0; i < wall.length; i++ ){
        // wall[i].draw();
        context.drawImage( iBrick, wall[i].x, wall[i].y );
    }
    
    // draw game score
    context.font = '20px Open Sans Condensed';
    context.fillStyle = '#fff';
    context.fillText('Score ' + score, canvas.width - 100, 30);    

    context.textAlign = 'center';
    context.font = '40px Open Sans Condensed'
    if ( isGameOver ) {
        context.fillText( 'Game Over', canvas.width / 2, canvas.height / 2 );
    }
    if ( isGamePaused && !isGameOver ) {
        console.log(isGameOver);
        context.fillText( 'Game Paused', canvas.width / 2, canvas.height / 2 );
    }
    context.textAlign = 'left';
    
    context.font = '12px Open Sans Condensed';
    showDevMessages();
    
    
}

function showDevMessages(){
    // show last key pressed
    var devMessage = 'Last key press: ' + lastKeyPressed;
        devMessage += ' | FPS: ' + FPS;
        devMessage += ' | frames: ' + frames;
        //devMessage += ' | acum delta: ' + acumDelta;
        devMessage += ' | ' + body[ 1 ].x  + ' ' + body[ 0 ].x
    context.fillText( devMessage, 10, 20 );
}

console.log('from paint.js');