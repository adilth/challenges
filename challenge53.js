/*Description // 7kyu Beginner Series #3 Sum of Numbers
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// function getSum(a, b) {
//   let max = Math.max(a, b);
//   let min = Math.min(a, b);
//   if (a === b) {
//     return a;
//   } else {
//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//       sum += i;
//     }
//     return sum;
//   }
// }

// good answer
/*The solution just uses the well-known formula for 'sum of an arithmetic sequence'. You can google images of 'formula for sum of an arithmetic sequence' and you will see the formula (sum = (n/2) * (first term + last term)). So no need to figure out the math much apart from a little bit of thinking of how to come up with the n value which is max-min+1 but other than that there's no thinking needed.
formella is sum n/2 * (first  + last)// n is how many sequence git with (max - min + 1) with math an = min + (n - 1)d and d = a2 - a1 here = 1
example sum = n/2 *(5 + 20) we know first and last we need how sequence here will be 20 - 5 + 1 = 16 and 16 * 25 = 400 / 2 == 200
 */
function getSum(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return ((max - min + 1) * (max + min)) / 2;
}
console.log(getSum(1, 2));
console.log(getSum(1, 5));
console.log(getSum(8, 15));
console.log(getSum(5, 20));
console.log(getSum(141, 98));
// output : 3
//15
//92
//200
//5258
