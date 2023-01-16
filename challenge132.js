/*description  //leetcode

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
//with recursion
*/
console.time("Execution Time");
function FibonacciRec(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
console.timeEnd("Execution Time");
// function FibonacciRec(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return FibonacciRec(n - 2) + FibonacciRec(n - 1);
// }

//with memoize
// console.time("Execution Time");
// function FibonacciRec(n) {
//   let memo = {};
//   if (n <= 1) {
//     return n;
//   } else if (memo[n]) {
//     return memo[n];
//   } else {
//     let result = FibonacciRec(n - 1) + FibonacciRec(n - 2);
//     memo[n] = result;
//     return result;
//   }
// }
// console.timeEnd("Execution Time");
console.log(FibonacciRec(2), 1);
console.log(FibonacciRec(4), 3);
console.log(FibonacciRec(9), 34);
console.log(FibonacciRec(0), 0);
