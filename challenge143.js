/*Description // Sum without highest and lowest number

Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

const sumArray = (nums) => {
  return nums && nums.length
    ? nums
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((ac, num) => ac + num, 0)
    : 0;
};

console.log(sumArray([5, 1, 2, -6, 8, 22, 7])); //23
console.log(sumArray([])); //0
console.log(sumArray(null)); //0
console.log(sumArray([4, -11, 6, -5, -8, 7, 12, 10, 3])); //17
console.log(sumArray([1, 2])); //0
console.log(sumArray([7, 9, 2, 0, 9, 2, 11, 44, 22, 36, 1, 14])); //113
