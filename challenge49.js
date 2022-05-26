/* Description // 7kyu Find the next perfect square!
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(n) {
  if (Math.sqrt(n) % 1 === 0) {
    return Math.pow(Math.sqrt(n) + 1, 2);
  } else {
    return -1;
  }
}

console.log(findNextSquare(121));
console.log(findNextSquare(64));
console.log(findNextSquare(114));

//output : 144
//81
//-1
