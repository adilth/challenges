/* 
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vector) {
    // return anonymous object not new Vec()
    //  return {
    //    x: vector.x + this.x,
    //    y: vector.y + this.y,
    //  };
    return new Vec(this.x + vector.x, this.y + vector.y);
  }
  minus(vector) {
    //  return {
    //    x: this.x - vector.x,
    //    y: this.y - vector.y,
    //  };
    return new Vec(this.x - vector.x, this.y - vector.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Your code here.

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

class Group {
  constructor() {
    this.array = [];
  }
  add(value) {
    //use has methods instand of includes don't repeat our self
    if (!this.has(value)) {
      this.array.push(value);
    }
  }
  has(value) {
    return this.array.includes(value);
  }
  delete(value) {
    if (this.has(value)) {
      return this.array.splice(this.array.indexOf(value), 1);
    }
  }
  static from(obj) {
    let newArray = new Group();
    for (const value of obj) {
      newArray.add(value);
    }
    return newArray;
  }
}

class NewGroup extends Group {
  constructor(obj) {
    super(obj);
    this.array = obj.array;
    this.index = 0;
  }
  next() {
    if (this.index >= this.array.length) {
      return { done: true };
    }

    let value = this.array[this.index];
    this.index++;
    return { value, done: false };
  }
}
Group.prototype[Symbol.iterator] = function () {
  return new NewGroup(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// console.log(group);
// group.delete(10);
// console.log(group.has(10));
// // → false

// → a
// → b
// → c
let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
console.log(hasOwnProperty.call(map, "one"));
// → true
