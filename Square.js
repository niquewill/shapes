//USE STRICT
'use strict';


//Declare our square
//Capitalize
function Square (side, side1, side2, side3) {
	if (!(this instanceof Square)) {
		return new Square(side, side1, side2, side3);
	}

// //The prototype info to tie Square to Shape
//Square.prototype = Object.create(Shape.prototype);
//Square.prototype.constructor = Square;

	this.side = side;
	this.side1 = side1;
    this.side2 = side2;
	this.side3 = side3;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

var cube = new Square();
// console.log(Shape);
module.exports = Square;