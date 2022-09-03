/* Description 8kyu //Calculate factorial

The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

We can write a definition of factorial like this:

n! = n * (n - 1) * (n - 2) * ...*1
Values of factorials for different n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
The task is to write a function factorial(n) that calculates n! using recursive calls.
*/

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

//using for loop
// function factorial(n) {
//   let sum = 1;
//   for (let i = n; i >= 1; i--) {
//     sum *= i;
//   }
//   return sum;
// }
console.log(factorial(1)); //1
console.log(factorial(5)); //120
console.log(factorial(7)); //5040
