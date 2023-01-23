/* Description //Count by X

Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

console.log(countBy(1, 10)); //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(countBy(4, 12)); //[4,  8, 12, 16, 20,24, 28, 32, 36, 40,44, 48]
console.log(countBy(8, 16)); //[8,  16,  24,  32, 40, 48,56,  64,  72,  80, 88, 96,104, 112, 120, 128]
