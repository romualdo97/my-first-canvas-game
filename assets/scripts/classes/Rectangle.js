// rectangle

function Rectangle( x, y, width, height ){
    this.x = typeof x === 'number' ? x : 50;
    this.y = typeof x === 'number' ? y : 50;
    this.width = width ? width : 20;
    this.height = height ? height : 20;
}

Rectangle.prototype.draw = function( stroke ){
  
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

Rectangle.prototype.isCollidedByBottonSideBy = function( world_object ){
    
    if ( typeof world_object != 'object' || !world_object || !(world_object instanceof Object)  )
        return;
    
    var isIntersected = this.y + this.height > world_object.y &&
                        this.x < world_object.x + world_object.width &&
                        this.x + this.width > world_object.x;
    return isIntersected;
    
}
Rectangle.prototype.isCollidedByTopSideBy = function ( world_object ){
    
    if ( typeof world_object != 'object' || !world_object || !(world_object instanceof Object)  )
        return;
    
    var isIntersected = this.y <  world_object.y + world_object.height &&
                        this.x < world_object.x + world_object.width &&
                        this.x + this.width > world_object.x;
    return isIntersected;
}

Rectangle.prototype.isCollidedByLeftSideBy = function ( world_object ){
    
    if ( typeof world_object != 'object' || !world_object || !(world_object instanceof Object)  )
        return;
    
    var isIntersected = this.x < world_object.x + world_object.width &&
                        this.y < world_object.y + world_object.height &&
                        this.y + this.height > world_object.y;
    return isIntersected;
}
Rectangle.prototype.isCollidedByRightSideBy = function ( world_object ){
    
    if ( typeof world_object != 'object' || !world_object || !(world_object instanceof Object)  )
        return;
    
    var isIntersected = this.x + this.width > world_object.x &&
                        this.y < world_object.y + world_object.height &&
                        this.y + this.height > world_object.y;
    return isIntersected;
}

Rectangle.prototype.checkCollitionSide = function ( world_object ){
    var isCollidedByTopSide = world_object.isCollidedByTopSideBy( this ) &&
                              this.isCollidedByBottonSideBy( world_object );
    
    var isCollidedByLeftSide = world_object.isCollidedByRightSideBy( this );
    
    if ( isCollidedByTopSide ){
        console.log('top');
        return 'top';
    }
    
}

console.log('from Rectangle.js');