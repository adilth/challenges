"use strict";
function limitValue(arr, limit) {
  return arr.every((el) => {
    if (el <= limit) {
      return true;
    } else {
      return false;
    }
  });
}

let arr = [5, 6, 8, 26, 5, 6];

console.log(limitValue(arr, 45));

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let array = [pete, john, mary];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
sortByAge(array);

// now: [john, mary, pete]
console.log(array[0].name); // John
console.log(array[1].name); // Mary
console.log(array[2].name); // Pete

function gittotal(arr, len) {
  return arr.reduce((ac, cur, idx, arr) => {
    let cy = ac + cur.age / arr.length;
    return Math.round(cy);
  }, 0);
}

console.log(gittotal(array));
/*
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};
for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}*/

// show just push unique word to reduce array
function unique(arr) {
  return arr.reduce((res, str) => {
    if (!res.includes(str)) {
      res.push(str);
    }
    return res;
  }, []);
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
function groupById(arr) {
  return arr.reduce((ac, cur) => {
    ac[cur.id] = cur;
    return cur;
  }, {});
}
// let usersById = groupById(users);
// function odd(arr) {
//   return arr.filter((res) => arr.indexOf(res) == arr.indexOf(res));
// }
function odd(arr) {
  for (var i in arr) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}
// find the unique number
const stray = (num) => {
  return num.find((s) => {
    return num.indexOf(s) === num.lastIndexOf(s);
  });
};
let num = [17, 7, 5, 17, 3, 17, 17, 17, 17, 5, 7];

console.log(odd(num));
console.log(stray(num));
// function result(arr) {
//   return arr.reduce((x, y, idx) => {
//     return x.includes(y) === idx;
//   }, []);
// }

// console.log(result(num));

const uniqueCount = [
  "a",
  "b",
  "c",
  "d",
  "d",
  "e",
  "a",
  "b",
  "c",
  "f",
  "g",
  "h",
  "h",
  "h",
  "e",
  "a",
];
var count = {};
uniqueCount.forEach(function (i) {
  count[i] = (count[i] || 0) + 1;
});
console.log(count);

/*let calculator = {
  read() {
    this.num1 = +prompt("num1", 0);
    this.num2 = +prompt("num2", 0);
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
}*/
//calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
function Calculator() {
  this.read = function () {
    this.num1 = +prompt("number 1", 0);
    this.num2 = +prompt("number 2", 0);
  };
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.mul = function () {
    return this.num1 * this.num2;
  };
  this.subs = function () {
    return this.num1 - this.num2;
  };
}
let calculator = new Calculator();
calculator.read();

console.log("Sum= " + calculator.sum());
console.log("Mul= " + calculator.mul());
console.log("Mul= " + calculator.subs());
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     console.log(this.step);
//     return this;
//   },
// };
// stips with constructor look like
function Ladder(num) {
  this.step = num;
  this.up = function () {
    this.step++;
    return this;
  };
  this.down = function () {
    this.step--;
    return this;
  };
  this.showStep = function () {
    // shows the current step
    console.log(this.step);
    return this;
  };
}
let nums = new Ladder(0);
// nums.up().up().down().showStep().down().showStep(); // shows 1 then 0

function Accumulator(num) {
  this.num = num;
  this.read = function () {
    this.num += +prompt("num1", 0);
  };
}
let accumulator = new Accumulator(2); // initial value 1

accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

console.log(accumulator.num); // shows the sum of these values
