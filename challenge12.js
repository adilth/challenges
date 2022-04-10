function Calculator() {
  this.read = function () {
    // this.num1 = +prompt("number 1", 0);
    //this.num2 = +prompt("number 2", 0);
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
  this.subs = function () {
    return this.num1 / this.num2;
  };
}
let calculator = new Calculator();
calculator.read();

console.log("Sum= " + calculator.sum());
console.log("Mul= " + calculator.mul());
console.log("Mul= " + calculator.subs());

/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output
*/

function shortLong(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}

// or const shortLongShort = (a,b)=> a.length < b.length ? a + b + a : b + a + b
console.log(shortLong("1", "22")); // --> "1221"
console.log(shortLong("22", "1")); // --> "1221

/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function biniry(str) {
  let string = ``;
  for (let i = 0; i < +str; i++) {
    if (i % 2 == 0) string += "0";
    else string += "1";
  }
  return string;
}

console.log(biniry("12"));
