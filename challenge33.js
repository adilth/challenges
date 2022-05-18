/* Description 7kyu //removes the firt and last character from a string
Description

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("why there is no character"));
console.log(removeChar("You don't have to worry about me"));

//output : hy there is no characte
//ou don't have to worry about m
