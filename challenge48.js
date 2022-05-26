/*Description // 6kyu Coprimes up to N
Two integers are coprimes if the their only greatest common divisor is 1.

Task
In this kata you'll be given a number n >= 2 and output a list with all positive integers less than gcd(n, k) == 1, with k being any of the output numbers.

The list cannot include duplicated entries and has to be sorted.

Examples
2 -> [1]
3 -> [1, 2]
6 -> [1, 5]
10 -> [1, 3, 7, 9]
20 -> [1, 3, 7, 9, 11, 13, 17, 19]
25 -> [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24]
30 -> [1, 7, 11, 13, 17, 19, 23, 29]
*/

function coprimes(n) {
  return [...Array(n).keys()].filter((b) =>
    (g = (a) => (b ? g(b, (b = a % b)) : a < 2))(n)
  );
}

// const coprimes = (n) =>
//   Array.from(Array(n), (_, i) => ++i).filter((e) => gcd(n, e) === 1);

// const gcd = (a, b) => (!b ? a : gcd(b, a % b));

console.log(coprimes(30));
console.log(coprimes(25));

//output :[ 1,  7, 11, 13,17, 19, 23, 29]
//[1,  2,  3,  4,  6,  7,  8,9, 11, 12, 13, 14, 16, 17,18, 19, 21, 22, 23, 24]
