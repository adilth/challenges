/*Description 6kyu //Persistent Bugger.

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function getCountOfMultiDigits(n) {
  let sumDigit = n.toString().split("");
  let sum = sumDigit.reduce((acc, val) => acc * +val);

  return sumDigit.length == 1 ? 0 : 1 + getCountOfMultiDigits(sum);
}

// others solutions
// function getCountOfMultiDigits(num) {
//   for (let i = 0; num > 9; i++) {
//     num = num
//       .toString()
//       .split("")
//       .reduce((ac, c) => ac * c);
//   }
//   return i;
// }
console.log(getCountOfMultiDigits(125)); //2
console.log(getCountOfMultiDigits(88888)); //3
console.log(getCountOfMultiDigits(999)); //4
console.log(getCountOfMultiDigits(4)); //0
