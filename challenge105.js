/* Description 6kyu //Replace With Alphabet Position

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// function changeLetterToAlphapetPos(text) {
//   let letter = text.toLowerCase().match(/[a-zA-Z]/g);

//   return letter
//     .map((el) => el.charCodeAt() - 96 )
//     .join(" ");
// }

//other solution

function changeLetterToAlphapetPos(text) {
  return text
    .toLowerCase()
    .split("")
    .map((a) => a.charCodeAt(0) - 96)
    .filter((a) => a >= 0)
    .join(" ");
}
console.log(changeLetterToAlphapetPos("The sunset sets at twelve o' clock."));
//20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
