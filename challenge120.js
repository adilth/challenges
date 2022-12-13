/*Description 8kyu //Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

function sumMix(x) {
  return x.reduce((ac, cur) => ac + +cur, 0);
}

console.log(sumMix([2, 5, "5", 8, "7", 8])); //35
console.log(sumMix([22, "7", "58", 8, -8, 2, -2])); //87
console.log(sumMix([2, 7, 7, 6, 2, 1, 5, "7"])); //37
