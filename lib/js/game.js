var canvas,
    context;

window.addEventListener('load', init, false);

function init(){
    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');
    paint( context );
}

function paint( context ){
    context.fillStyle = '#c98787';
    context.fillRect( 50, 50, 60, 100 );
}
