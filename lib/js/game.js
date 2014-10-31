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
    // could work also writting only requestAnimationFrame( run ); (without spec window object)
    requestAnimationFrame( run );
    act();
    paint( context );
}

// function for draw all in the canvas
function paint( context ){
    /*
    modificaremos nuestra función “paint” para que limpie la pantalla
    antes de volver a dibujar en ella, esto se hace dibujando un rectángulo
    del tamaño completo del lienzo
    */
    context.fillStyle = '#f7f7f7';
    context.fillRect( 0, 0, canvas.width, canvas.height );
    /*
    dibujamos un rectangulo mas pequeño en las cordenadas que indican
    las variables globales x, y
    */
    context.fillStyle = '#c98787';
    context.fillRect( x, y, 60, 100 );
}

// function for call all actions in our world, like move objects...
function act(){
    // moveremos nuestro rectángulo sumándole 2 pixeles por fotograma a nuestra variable "x":
    x += 2;
    y +=1;
}


