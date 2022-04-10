let a = 1_00;
let b = 2_00.5;
let c = 2e2;
let d = 2.4;

console.log(Math.min(a, b, c, d));

console.log(Math.pow(a, Math.floor(d)));

console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(d.toFixed());
console.log(intger(d));
console.log(~~d);
console.log(Math.ceil(Math.floor(d)));

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
console.log(Math.ceil(Math.floor(b) / Math.ceil(d)));

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.shift();
arr1.shift();
arr2.shift();
arr2.shift();
allArrs.concat(arr1, arr2).sort();
allArrs.join("").toLowerCase();
console.log(allArrs); // fxy
