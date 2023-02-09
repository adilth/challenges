/*Description //

*/

function twoSum(arr) {
  let numSet = new Set();
  for (let nums of arr) {
    const diff = 2020 - nums;
    if (numSet.has(diff)) return nums * diff;
    numSet.add(nums);
  }
}

console.log(twoSum([1721, 979, 366, 299, 675, 1465])); //514579

function threeSum(arr) {
  let numSet = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let num1 = arr[i];
      let num2 = arr[j];
      const sum = num1 + num2;
      numSet[sum] = [num1, num2];
    }
  }
  for (const nums of arr) {
    let diff = 2020 - nums;
    if (diff in numSet) {
      const [num1, num2] = numSet[diff];
      return nums * num1 * num2;
    }
  }
}

console.log(threeSum([1721, 979, 366, 299, 675, 1465])); //241861950
