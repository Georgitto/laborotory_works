// Singletone

let Counter =  (function() {
  let instance, counter = 0;
  
  let get = function() {
    return counter;
  }
  
  let increase = function() {
    return ++counter;
  }
  
  let createInstance = function() {
    return {
      getCounter: get,
      increaseCounter: increase,
    }
  }
  
  return {
    getInstance: function() {
      return instance || (instance = createInstance());
    }
  }
})()

console.log(Counter.getInstance().getCounter())
console.log(Counter.getInstance().increaseCounter())
console.log(Counter.getInstance().increaseCounter())
console.log(Counter.getInstance().getCounter())

// Fabric Method

class Rabbit {
  constructor() {
    this.type = 'Rabbit';
    this.legCounter = 2;
    this.size = 'Small';
    
    console.log([this.type, 'was created!'].join(' '))
  }
}

class Elephant {
  constructor() {
    this.type = 'Elephant';
    this.legCounter = 4;
    this.size = 'Huge';
    
    console.log([this.type, 'was created!'].join(' '))
  }
}

const types = {
  Rabbit,
  Elephant
}

class Nature {
  static createCreature(type) {
    return new types[type]
  }
}

let Josh = Nature.createCreature('Rabbit');
let Antony = Nature.createCreature('Elephant');
