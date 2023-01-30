/*Description //
 */

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
};

let word1 = "hello world".toAlternatingCase();
console.log(word1); //HELLO WORLD

let word2 = "HeLLo WoRLD".toAlternatingCase();
console.log(word2); //hEllO wOrld

let word3 = "hello WORLD".toAlternatingCase();
console.log(word3); //HELLO world
