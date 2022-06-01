/*Description //7kyu Product Of Maximums Of Array (Array Series #2)
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600 .
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is -4 * -1 = 4 .
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
*/

function maxSumNumber(arr, num) {
  let sortWithSlice = arr.sort((a, b) => b - a).slice(0, num);
  return sortWithSlice.reduce((acc, s) => acc * s);
}

console.log(maxSumNumber([2, 5, 6, 5], 3));
console.log(maxSumNumber([10, 8, 3, 2, 1, 4, 10], 5));
console.log(maxSumNumber([10, 3, -1, -27], 3));
console.log(maxSumNumber([7, 12, 1, 45, 0, -2, 45, 4, 7], 7));

// output : 150
//9600
//-30
//4762800
