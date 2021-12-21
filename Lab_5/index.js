class EventObserver {
    constructor() {
      this.observers = new Array();
    }

    subscribe(action) {
      this.observers.push(action);
    }

    unsubscribe(action) {
      this.observers.filter(observer => observer !== action);
    }

    broadcast(data) {
      this.observers.forEach(observer => observer(data));
    }
}

class TagBuilder {
	constructor() {
        this.tagName = 'div';
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

	setTag(tagName) {
		this.tagName = tagName;
		return this;
	}

	setDisplayMode(mode) {
		this.display = mode;
		return this;
	}

	setBackgroundColor(color) {
		this.backgroundColor = color;
		return this;
	}

	build() {
		return new Tag(this);
	}
}

class Tag {
    constructor(props) {
        this.node;
		if (!(props instanceof TagBuilder)) {
	    	return new Error('Provided argument is not instance of TagBuilder!');
	   	}
	   	this.extendProperties(props);
        this.addToDom(props);
	}

	extendProperties(props) {
	   	for (let prop in props) {
	    	this[prop] = props[prop];
	   	}
 	}
    
    addToDom(props) {
        this.node = document.createElement(this.tagName);
        Object.entries(props).forEach(arr => {
            if(this.node.style[arr[0]] !== undefined) {
                this.node.style[arr[0]] = arr[1];
            }
        })
        document.body.append(this.node);
    }
}

const textArea = new TagBuilder()
.setTag('textarea')
.setWidth('300px')
.setHeight('80px')
.build();

const wordCount = new TagBuilder()
.setDisplayMode('block')
.setWidth('100%')
.build();

const textAreaObserver = new EventObserver();

const words = (text) => {
    return text !== '' ? text.trim().split(' ').length : 0;
}

textAreaObserver.subscribe((text) => {
    wordCount.node.innerText = 'Word count is: ' + words(text);
})

textArea.node.addEventListener('keyup', () => {
    textAreaObserver.broadcast(textArea.node.value)
})
