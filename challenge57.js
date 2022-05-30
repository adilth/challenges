/*Description // 7kyu Array Leaders (Array Series #3)
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/

function leaderNum(nums) {
  return nums.filter((val, idx) => {
    return val > nums.slice(idx + 1).reduce((acc, val) => acc + val, 0);
  });
}

// other answer
// var leaderNum = (numbers) => {
//   let sum = 0,
//     res = [];
//   for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] > sum) res.unshift(numbers[i]);
//     sum += numbers[i];
//   }

//   return res;
// };
console.log(leaderNum([0, -1, -29, 3, 2]));
console.log(leaderNum([0, -1, 4, 3, 2, 5, 7]));
