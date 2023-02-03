/* Description //Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function findCamelCase(str) {
  if (str === "") return "empty";
  let sp = str.split(/(?=[A-Z])/).join(" ");
  return sp;
}

console.log(findCamelCase("camelCasing")); //camel Casing
console.log(findCamelCase("")); //empty
console.log(findCamelCase("not")); //not
console.log(findCamelCase("FindCamelCase")); //Find Camel Case
console.log(findCamelCase("IAmGoodPorson")); //I Am Good Porson
