/*Description //Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// function isPangram(word) {
//   let sp = word.toLowerCase().split(" ");
//   return (
//     sp.map((el) => [...new Set(el)].join("")).join(" ") == word.toLowerCase()
//   );
// }

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let str = string.toLowerCase();
  return alphabet.every((el) => str.indexOf(el) !== -1);
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
console.log(isPangram("This is not a isPangram.")); //false
console.log(isPangram("hoe is this man ")); //false
console.log(isPangram("abcdefghijklmopqrstuwvxyz")); //false
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")); //true
