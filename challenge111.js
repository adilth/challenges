/* Description // 8ku //Is the string uppercase?

Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};

let str1 = "hello I AM DONALD".isUpperCase();
let str2 = "hi friend".isUpperCase();
let str3 = "ACSDFGTYU".isUpperCase();

console.log(str1);
console.log(str2);
console.log(str3);
