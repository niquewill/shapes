//USE STRICT
'use strict';


//Declare our square
//Capitalize
function Square (side) {
	if (!(this instanceof Square)) {
		return new Square(side);
	}

	this.shapename = "Square";
	this.side = side;
}

// //The prototype info to tie Square to Shape
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

var Square = new Square();

// console.log(Shape);
module.exports = Square;