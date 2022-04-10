let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo);
finalArr = finalArr.sort();
finalArr = finalArr.reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let arr = [5, 3, 8, 1];
// function filterRange(arr, a, b) {
//   return arr.filter((el) => el >= a && el < b);
// }
// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

function filterRangeInPlace(arr, a, b) {
  for (let i in arr) {
    let item = arr[i];
    if (item < a || item > b) {
      arr.splice(i, 1);
      // i--;
    }
  }
}

filterRangeInPlace(arr, 1, 4);

console.log(arr);

let arrr = [1, -4, 7, 12];
function positiveSum(arrr) {
  let res = arrr.filter((el) => el > 0);
  let sum = res.reduce((ac, el) => ac + el, 0);
  return sum;
}

console.log(positiveSum(arrr));

function sorttd(arr) {
  return arr.sort().reverse();
  //or use arr.sort((a,b) => b - a) //best
}
console.log(sorttd(arrr));

function reExt(s) {
  let rem = s.split("!");
  return rem.join("");
}

console.log(reExt("heloo mork!"));

function calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "**": (a, b) => Math.pow(a, b),
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
let calc = new calculator();
console.log(calc.calculate("3 ** 3"));

const users = [
  { firstName: "adil", lastName: "tahiri", age: 26 },
  { firstName: "faissal", lastName: "tahiri", age: 32 },
  { firstName: "kamal", lastName: "tahiri", age: 34 },
  { firstName: "bahija", lastName: "abin", age: 56 },
  { firstName: "abdaziz", lastName: "tahiri", age: 59 },
];
const output = users.reduce((ac, cur) => {
  if (cur.age < 33) {
    ac = [...ac, cur.firstName];
  }
  return ac;
}, []);
console.log(output);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let user = [john, pete, mary];

// let names = user.map((el) => el.name);

// console.log(names); // John, Pete, Mary

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let userss = [john, pete, mary];

// let usersMapped = userss.map((item) => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id,
// }));

let usersMapped = userss.map((item) => {
  return {
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
  };
});

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
// console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
