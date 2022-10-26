/* Description 6kyu //Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function countDuplicateString(str) {
  if (typeof str !== "string") {
    return `not a string`;
  }
  let obj = {};
  let sp = str.split("");
  sp.forEach((s) => (obj[s] ? obj[s]++ : (obj[s] = 1)));
  return obj;
}

console.log(countDuplicateString("sreyr")); //{ s: 1, r: 2, e: 1, y: 1 }
console.log(countDuplicateString("abadrabdra")); //{ a: 4, b: 2, d: 2, r: 2 }
console.log(countDuplicateString(1111)); //not a string
console.log(countDuplicateString(["ggg"])); //not a string
