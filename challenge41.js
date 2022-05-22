/*Description 6kyu  // Create Phone Number
Description
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

function solution(arr) {
  let first = arr.slice(0, 3).join("");
  let second = arr.slice(3, 6).join("");
  let third = arr.slice(6, arr.length).join("");

  return `(${first}) ${second}-${third}`;
}

//good solution
function solution(num) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < num.length; i++) {
    format = format.replace("x", num[i]);
  }

  return format;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(solution([0, 7, 3, 8, 7, 6, 2, 8, 1, 0]));

//output : "(123) 456-7890"
//(073) 876-2810
