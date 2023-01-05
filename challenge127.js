/*leetcode //contains-duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function checkValueAppearTwice(arr) {
  let obj = {};
  for (let num of arr) {
    if (obj[num]) {
      return true;
    } else {
      obj[num] = 1;
    }
  }
  return false;
}
// function checkValueAppearTwice(arr) {
//   let size = new Set(arr);
//   return size.size !== arr.length;
// }

console.log(checkValueAppearTwice([1, 2, 4, 5, 2, 3])); //true
console.log(checkValueAppearTwice([1, 5, 4, 2, 0])); //false
