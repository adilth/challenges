/* Description 7kyu //Find the divisors!

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

*/

function divisors(int) {
  let div = [];
  for (let i = int - 1; i > 1; i--) {
    if (Number.isInteger(int / i)) {
      div.push(int / i);
    }
  }
  return div.length < 1 ? `${int} is prime` : div;
}

console.log(divisors(12)); //[2,3,4,6]
console.log(divisors(13)); //13 is prime
console.log(divisors(24)); //[ 2, 3, 4, 6, 8, 12 ]
console.log(divisors(37)); //37 is prime
