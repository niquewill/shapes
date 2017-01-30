var Shapes = require ("./shape");
var Square = require ("./Square");
var Triangle = require ("./Triangle");
var Pentagon = require ("./Pentagon");

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;
//want to export the object we create so it may be read by other files and shapes.


console.log(tria instanceof Triangle);
console.log(tria instanceof Shapes);
console.log(cube instanceof Square);
console.log(cube instanceof Shapes);
console.log(penta instanceof Pentagon);
console.log(penta instanceof Shapes);