/*Description // 7kyu Minimize Sum Of Array (Array Series #1)
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74
*/

function getMinimum(arr) {
  let sum = 0;
  let smallest = arr.sort((a, b) => a - b).slice(0, arr.length / 2);
  let largest = arr.sort((a, b) => b - a).slice(0, arr.length / 2);
  for (let i = 0; i < largest.length; i++) {
    sum += largest[i] * smallest[i];
  }
  return sum;
}

// here in reduce we just take half of the total not sum of all and arr[arr.length - i - 1] it is start
// function getMinimum(arr) {
//   return arr
//     .sort((a, b) => a - b)
//     .slice(0, arr.length / 2)
//     .reduce(
//       (acc, curr, index) => (acc += curr * arr[arr.length - i - 1]),
//       0
//     );
// }

console.log(getMinimum([12, 6, 10, 26, 3, 24]));
console.log(getMinimum([9, 2, 8, 7, 5, 4, 0, 6]));
console.log(getMinimum([8, 0, 4, 7, 71, 4, 188]));

//output : 342
//74
//316
