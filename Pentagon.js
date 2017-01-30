
function Pentagon (side, side1, side2, side3, side4) {
	if (!(this instanceof Pentagon)){
      		return new Pentagon (side, side1, side2, side3, side4);
	}

	this.side = side;
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
}

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;

var penta = new Pentagon();
module.exports = Pentagon;