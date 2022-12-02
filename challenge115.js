/* Description 8kyu //Palindrome Strings

Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false
*/

function palindromeStr(str) {
  let rev = str.toString().split("").reverse().join("");
  return rev == str;
}

console.log(palindromeStr("str")); //function
console.log(palindromeStr("12321")); //true
console.log(palindromeStr(12321)); //true
