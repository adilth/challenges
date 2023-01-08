/*//leetcode //Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 */

function getMaxDuplicateNumber(arr) {
  let obj = {};

  const half = Math.round(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    obj[num] = obj[num] + 1 || 1;

    if (obj[num] === half) {
      return num;
    }
  }
}
function getMaxDuplicateNumber(arr) {
  arr.sort();
  return arr[Math.floor(arr.length / 2)];
}

console.log(getMaxDuplicateNumber([1, 1, 1, 5, 5, 1])); //1
console.log(getMaxDuplicateNumber([3, 2, 3])); //3
