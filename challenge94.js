/* Description 7kyu //Odd or Even?

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

function sumAndcheckIfEvenOrOdd(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? "even" : "odd";
}

console.log(sumAndcheckIfEvenOrOdd([0, 1, 2])); //odd
console.log(sumAndcheckIfEvenOrOdd([5, 7, 6, 2])); //even
console.log(sumAndcheckIfEvenOrOdd([4, 0, 1, 7, 4, 7])); //odd
