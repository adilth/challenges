/*Description //factorial number

find a factorial
*/

function factorial(num) {
  if (num < 0) return;
  if (num < 2) return 1;

  let count = num * factorial(num - 1);
  return count;
}

console.log(factorial(5)); //120
console.log(factorial(8)); //40320
console.log(factorial(11)); //39916800
