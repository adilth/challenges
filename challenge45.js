/*Description 6kyu // Stop gninnipS My sdroW!
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function reverseWordInstring(str) {
  let split = str.split(" ");
  //   return split.filter((s) => s.length > 5).reverse();
  return split
    .map((el) => (el.length >= 5 ? el.split("").reverse().join("") : el))
    .join(" ");
}

console.log(reverseWordInstring("Hey fellow warriors"));
console.log(reverseWordInstring("This is a test"));
console.log(reverseWordInstring("This is another test"));
console.log(reverseWordInstring("Just kidding there is still one more"));

// output : Hey wollef sroirraw
// This is a test
// This is rehtona test
// Just gniddik ereht is llits one more
