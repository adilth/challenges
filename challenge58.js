/*Description 7kyu //Maximum Gap (Array Series #4)
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
1-Array/list size is at least 3 .
2-Array/list's numbers Will be mixture of positives and negatives also zeros_
3-Repetition of numbers in the array/list could occur.
4-The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between | 64 - 640 | = 576 .
Note : Regardless the sign of negativity .
*/

function getMaxDifference(nums) {
  let diff = nums
    .sort((a, b) => a - b)
    .map((n, i) => (i > 0 ? Math.abs(n - nums[i - 1]) : 0));
  return Math.max(...diff);
}

//other solution
// function getMaxDifference(nums) {
//   var max = -1;
//   var temp;
//   let sort = nums.sort((a, b) => a - b);
//   for (var i = 0; i < nums.length - 1; i++) {
//     temp = Math.abs(sort[i] - sort[i + 1]);
//     max = Math.max(max, temp);
//   }
//   return max;
// }

console.log(getMaxDifference([1, 5, 7, 22, 7]));
console.log(getMaxDifference([-3, -27, -4, -2]));
console.log(getMaxDifference([-7, -42, -809, -14, -12]));

//output 15
//23
//767
