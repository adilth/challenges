/* Description 7kyu // Greatest common divisor
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/
// this answer is bad the speed is tow low
function mygcd(x, y) {
  let arr;
  for (let i = 0; i < x; i++) {
    if (x % i == 0 && y % i == 0) {
      arr = Math.max(1, i);
    }
  }
  return arr;
}

// good answer recursion
// function mygcd(x, y) {
//   return !y ? x : mygcd(y, x % y);
// }

console.log(mygcd(30, 12));
console.log(mygcd(30000, 120000000));

//output : 6
// 15000
