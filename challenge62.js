/*Description 7kyu //

*/

function sumSmallesrNumberUltilN(nums, n) {
  let count = 0;
  let sum = 0;
  let sorted = nums.sort((a, b) => a - b);
  for (let num of sorted) {
    sum += num;
    if (sum < n) {
      count++;
    }
  }
  return count;
}
// function sumSmallesrNumberUltilN(nums, n) {
//   let count = 0;
//   return nums
//     .sort((a, b) => a - b)
//     .filter(num => (n -= num) > 0).length;
// }

//

// const sumSmallesrNumberUltilN = (nums, n) => {
//   let sum = 0;
//   return nums
//     .sort((a, b) => a - b)
//     .findIndex((num) => (sum += num) >= n);
// };

console.log(sumSmallesrNumberUltilN([1, 10, 12, 9, 2, 3], 6));
console.log(sumSmallesrNumberUltilN([8, 9, 4, 2], 23));
console.log(sumSmallesrNumberUltilN([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));

// output : 2;
//3;
//8;
