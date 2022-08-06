/* Description 5kyu //Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

//move first letter to end and add ay to end of word
function changeTheStr(str) {
  let markes = [",", ".", "!", "?"];
  let newStr = str.split(" ");
  //   for (let i = 0; i < newStr.length; i++) {

  return newStr
    .map(
      (word) => word.slice(1) + word[0] + (markes.includes(word) ? "" : "ay")
    )
    .join(" ");
  //   }
  //   return newStr.join(" ");
}

console.log(changeTheStr("Hello world !"));
