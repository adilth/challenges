/*description //leetCode

Given an integer array nums return the length of the longest strictly increasing subsequence 
A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining element .For example [0,6,3,1,6,2,2,7] is a subsequence of the array [0,3,1,6,2,2,7]
*/

function lengthOfLIS(nums) {
  if (nums.length == 0) return 0;
  let result = 1;
  const arrEndAt = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    arrEndAt[i] = Math.max(
      1,
      ...arrEndAt
        .slice(0, i)
        .map((item, indx) => (nums[i] > nums[indx] ? item + 1 : 0))
    );
    result = Math.max(arrEndAt[i], result);
  }
  return result;
}

console.log(lengthOfLIS([0, 6, 3, 1, 6, 2, 2, 7])); //4
