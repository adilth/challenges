// console.log(4 + 5);
// console.log("4 + 5");
// console.log("4" + "5");
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = (a * b) / a;
const g = (b / a) * a;
// console.log(a, b, c, d, e, f, g);
let st = "Elzero Web School";
let stLower = st.toLowerCase();
console.log(stLower.indexOf("w"));

if (stLower.charAt(stLower.indexOf("w")) === "w") {
  console.log("hood");
} else {
  console.log("no");
}

if (typeof Number(st) !== "string") {
  console.log("good");
}
if (typeof Number(st) === "number") {
  console.log("good");
}
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("good");
} else {
  console.log("no");
}

let ab = 10;

ab < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");
console.log(st.repeat(2).length);
let str = st.repeat(2).length;
console.log(str);
st.repeat(2).length == "34" ? console.log("good") : console.log("no");
function duplicateEncode(word) {
  word.split("").map((x, idx) => {
    for (let i = 0; i < x.length - 1; i++) {
      if (x.indexOf(x[i]) === x.lastIndexOf(x[i])) {
        x.replace(i, ")");
      } else {
        console.log("here");
      }
    }
    console.log(word);
  });
}
duplicateEncode("reede");

// let araa = [1, 5, -6, 51];

// function sums() {
//   araa.forEach((n) => {
//     let sum = 0;

//     if (araa == undefined) {
//       return 0;
//     } else {
//       sum += n;
//       return sum;
//     }
//   });
// }

// console.log(sums());
function isIsogram(str) {
  let tolow = str.toLowerCase();
  return (
    tolow.split("").filter((item, pos, arr) => arr.indexOf(item) == pos)
      .length == str.length
  );
}
console.log(isIsogram("thoomas"));
console.log(isIsogram("moses"));
console.log(isIsogram("mosesO"));
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
console.log(isIsogram("re"));
function isIsogram(str) {
  return !str || str.length === new Set(str.toLowerCase()).size;
}
