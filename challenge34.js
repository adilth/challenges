/*Description 7kyu //Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/
//may solution sun in 0.119s

function XO(str) {
  let obj = {};
  let arr = str.toLowerCase().split("");
  for (const el of arr) {
    if (obj[el]) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  }
  return obj.x === obj.o;
}

//this quick run in 0.118s
//other solution thatcool
// function XO(str) {
//   var sum = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() == "x") sum++;
//     if (str[i].toLowerCase() == "o") sum--;
//   }
//   return sum == 0;
// }

// this is slow run in  0.127s
// function XO(str) {
//   return (
//     str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
//   );
// }

//this is quick 0.112s
// const XO = (str) => {
//   str = str.toLowerCase().split("");
//   return (
//     str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
//   );
// };

console.log(XO("xxOo"));
console.log(XO("xxxOo"));
console.log(XO("ooom"));
console.log(XO("ooomxoxxx"));

//output : true
//false
//false
//true
