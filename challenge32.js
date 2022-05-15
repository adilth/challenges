/* Description 7kyu // Shortest Word
Description
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
  let arr = s.split(" ");
  let len = arr.map((el) => el.length);
  return Math.min(...len);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//output : 3
