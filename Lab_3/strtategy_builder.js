class BlockBuilder {
	constructor() {
		this.height = '0px';
		this.width = '0px';
	}

	setHeight(height) {
		this.height = height;
		return this;
	}

	setWidth(width) {
		this.width = width;
		return this;
	}

	setBorder(style) {
		this.border = style;
		return this;
	}

	setDisplayMode(mode) {
		this.display = mode;
		return this;
	}

	setBackgroundColor(color) {
		this['background-color'] = color;
		return this;
	}

	build() {
		return new Block(this);
	}
}

class Block {
	constructor(props) {
		if (!(props instanceof BlockBuilder)) {
	    	return new Error('Provided argument is not instance of BlockBuilder!');
	   	}
	   	this.extendProperties(props);
	}

	extendProperties(props) {
	   	for (let prop in props) {
	    	this[prop] = props[prop];
	   	}
 	}
}

let redSmallSquare = new BlockBuilder()
.setWidth('40px')
.setHeight('40px')
.setBackgroundColor('red')
.build();

console.log(redSmallSquare);

let Squares = function(strategy) {
	this.strategy = strategy;
}

Squares.prototype.getSquare = function() {
	return this.strategy;
}

let blueSmallBlockSquare = function() {
	return new BlockBuilder()
		.setWidth('40px')
		.setHeight('40px')
		.setBackgroundColor('blue')
		.setDisplayMode('block')
		.build();
}

let redBigInlineSquare = function() {
	return new BlockBuilder()
		.setWidth('160px')
		.setHeight('160px')
		.setBackgroundColor('red')
		.setDisplayMode('inline')
		.build();
}

let alertTitle = new Squares(redBigInlineSquare).getSquare()();
console.log(alertTitle)
