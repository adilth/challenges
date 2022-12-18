/* Description //7kyu //Sort by Last Char

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

*/

// function last(words) {
//   if (words === undefined || words.length < 1) {
//     return words;
//   }
//   return words
//     .split(" ")
//     .sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
// }

function last(words) {
  if (words === undefined || words.length < 1) {
    return words;
  }
  return words
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

console.log(last("haloooo holaa lll"));
console.log(last("lll"));
console.log(last());
