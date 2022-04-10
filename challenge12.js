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

function biniry(str) {
  let string = ``;
  for (let i = 0; i < +str; i++) {
    if (i % 2 == 0) string += "0";
    else string += "1";
  }
  return string;
}

console.log(biniry("12"));
