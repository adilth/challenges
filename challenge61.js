/*Description // 7kyu Maximum Triplet Sum (Array Series #7)
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Notes :
Array/list size is at least 3 .
Array/list numbers could be a mixture of positives , negatives and zeros .
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)
Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .
*/

// function getMaxTriblesSum(nums) {
//   let withOutDup = new Set(nums);
//   return Array.from(withOutDup)
//     .sort((a, b) => b - a)
//     .slice(0, 3)
//     .reduce((ac, cu) => ac + cu, 0);
// }

//other salotion

const getMaxTriblesSum = (nums) => {
  const [a, b, c] = [...new Set(nums.sort((a, b) => b - a))];
  return a + b + c;
};

console.log(getMaxTriblesSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));
console.log(getMaxTriblesSum([3, 2, 6, 8, 2, 3]));
console.log(getMaxTriblesSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));

//output : 18;
//17;
//41;
