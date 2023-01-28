/* Description //Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
  return array.map((el) => -el);
}

console.log(invert([1, -5, 6, -8, 7, -9, 30])); //[-1, 5, -6, 8, -7, 9, -30];
console.log(invert([-6, -7, -1, -18, 7, -1, -10])); //[  6, 7,  1, 18, -7, 1, 10]
console.log(invert([8, 15, 20, 44, 7, 14, -20, 8, 7, 4])); //[   -8, -15, -20, -44, -7,  -14,  20,  -8,  -7, -4]
