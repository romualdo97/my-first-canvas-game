// game actions an behaviors

// function for call all actions in our world, like move objects, pause game...
function act(){
    // check if game is paused
    if ( lastKeyPressed == KEY_PAUSE ) {
        if ( isGameOver ) {
            respawn();
            isGameOver = false;
        }
        isGamePaused = !isGamePaused;
        lastKeyPressed = null;
    }
    if ( isGamePaused || isGameOver )
        return;
    
    // check if snakes get food
    if ( body[0].isCollidedBy( food ) ) {
        score += 1;
        body.push( new Rectangle() );
        food.x = random( canvas.width - 100 );
        food.y = random( canvas.height - 100 );
    }
    
    // move snake body    
    for ( var j = body.length - 1; j > 0; j-- ) {
        if ( direction === 3 ) {
            body[ j ].x = (body[ j - 1 ].x - speed) + body[ j - 1 ].width;
            body[ j ].y = body[ j - 1 ].y
        }
        if ( direction === 1 ) {
            body[ j ].x = (body[ j - 1 ].x - body[ j - 1 ].width) + speed;
            body[ j ].y = body[ j - 1 ].y
        }
        if ( direction === 0 ) {
            body[ j ].y = (body[ j - 1 ].y + body[ j - 1 ].height ) - speed;
            body[ j ].x = body[ j - 1 ].x;
        }
        if ( direction === 2 ) {
            body[ j ].y = (body[ j - 1 ].y - body[j - 1].width) + speed;
            body[ j ].x = body[ j - 1 ].x;
        }
    }
    
    // check if body collide by botton side the brick
    
    switch( body[0].checkCollitionSide( brick ) ){
        case 'top':
            brick.y += 10;
            break;
    }
    /*
    if ( body[0].isCollidedByTopSideBy( brick ) ){
        brick.y -= 5;
    }*/
    
    
    
    // check if snakes crashes with wall
    
    for ( var i = 0; i < wall.length; i++ ){
        if ( wall[ i ].isCollidedBy( body[0] ) ){
            isGamePaused = true;
            isGameOver = true;
        }
        if ( wall[ i ].isCollidedBy( food ) ){
            food.x = random( canvas.width );
            food.y = random( canvas.height );
        }
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
            body[0].y -= speed;
            break;
        case 1:
            // move right
            body[0].x += speed;
            break;
        case 2:
            //move down
            body[0].y += speed;
            break;
        case 3:
            // move left
            body[0].x -= speed;
            break;
    }

    // main character screen out
    if ( body[0].x > canvas.width )
        body[0].x = 0;
    if ( body[0].x < 0 )
        body[0].x = canvas.width;

    if ( body[0].y > canvas.height )
        body[0].y = 0;
    if ( body[0].y < 0 )
        body[0].y = canvas.height;
    
    // if brick is out screen
    if ( brick.x > canvas.width || brick.x < 0 )
        brick.x = canvas.width / 2;
    if ( brick.y > canvas.height || brick.y < 0 )
        brick.y = canvas.height / 2;

}


console.log('from act.js');