/* Description //is prime

Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.

test_00:
isPrime(2); // -> true
test_01:
isPrime(3); // -> true
test_02:
isPrime(4); // -> false
*/
/*
n = input number
Time: O(n)
Space: O(1)
*/
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

/*
n = input number
Time: O(square_root(n))
Space: O(1)
*/
const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }

  return true;
};
console.log(isPrime(3)); //
console.log(isPrime(5)); //
console.log(isPrime(2017)); //;
console.log(isPrime(64)); //
