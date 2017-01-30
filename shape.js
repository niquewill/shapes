//PseudoCode
//Contstructor homework
//USE STRICT
'use strict';
//PULL THE DATA
var Square = require("./Square");
var Pentagon = require("./Pentagon");                   
var Triangle = require("./Triangle");                    
//Establish a basic constructor function to apply to other shapes for later
//CAPITALIZE
function Shape (shapename) {
	if (!(this instanceof Shape)) {
		return new Shape(shapename);
	}

	this.shapename = shapename;
}

//In the constructor, must define "type" as well as pass methods "get_shapeName" and "total_length"
Shape.prototype.get_type = function() {
    
    return this.__proto__.constructor;
	console.log("This is a " + this.shapename);
};

// Shape.prototype.get_totalLength = function() {
// 	//Declare empty variable
// 	var length;
// 	//Create conditions for different shapes.
// 	if (this.shapename === "Triangle") {
// 		length = this.side + this.side1 + this.side2;
// 	} else if (this.shapename === "Square") {
// 		length = this.side1 * 4;
// 	} else if (this.shapename === "Pentagon") {
// 		length = this.side + this.side1 + this.side2 + this.side3 + this.side4;
// 	}

// 	return length;
// }

//want to export the object we create so it may be read by other files and shapes.
module.exports = Shape;