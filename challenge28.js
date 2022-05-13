/*Description make evert first char capitalize
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
function Str(str) {
  this.str = str;
}
Str.prototype.toJadenCase = function () {
  return this.str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
};
let str = new Str("How can mirrors be real if our eyes aren't real");
let str2 = new Str("capitalized in the same way he originally typed them");

console.log(str.toJadenCase());
console.log(str2.toJadenCase());

//output : How Can Mirrors Be Real If Our Eyes Aren't Real
// Capitalized In The Same Way He Originally Typed Them
