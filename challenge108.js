/* Description 7kyu //String Scramble

Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

Ex:

scramble('abcd', [0,3,1,2]) -> 'acdb'

The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.

In other words, put the first character in the string at the index described by the first element of the array

You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).
*/

function changeThePosition(str, arr) {
  let char = [...str];
  for (let i = 0; i < arr.length; i++) {
    char[arr[i]] = str[i];
  }
  return char.join("");
}

//other solution

// function changeThePosition(s, a) {
//   return a.map((_, i) => s[a.indexOf(i)]).join``;
// }

console.log(changeThePosition("asdv", [3, 2, 0, 1])); //dvsa
console.log(changeThePosition("dergty", [4, 2, 5, 3, 0, 1])); //tyegdr
console.log(changeThePosition("lsoslert", [2, 7, 5, 3, 1, 0, 6, 4])); //ellstors