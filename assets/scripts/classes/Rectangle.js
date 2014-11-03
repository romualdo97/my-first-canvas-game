// rectangle

function Rectangle( x, y, width, height ){
    this.x = typeof x === 'number' ? x : 50;
    this.y = typeof x === 'number' ? y : 50;
    this.width = width ? width : 50;
    this.height = height ? height : 50;
}
Rectangle.prototype.draw = function(){
    context.fillRect( this.x, this.y, this.width, this.height );
}
Rectangle.prototype.isCollidedBy = function( world_object ){
    
    if ( typeof world_object != 'object' || !world_object || !(world_object instanceof Object)  )
        return;

    var isIntersected = this.x < world_object.x + world_object.width && // check collitions in left side
                        this.x + this.width > world_object.x && // check collitions in right side
                        this.y < world_object.y + world_object.height && // check collitions in top side
                        this.y + this.height > world_object.y; // check collitions in botton side
    
    return isIntersected;
}
console.log('from Rectangle.js');