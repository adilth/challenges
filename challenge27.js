/* Description 6kyu makeCamelCase
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  // let strSp = str.replace(/,\s+/, ",").split("-");
  let strSp = str.split(/[.\-_]/);
  return strSp
    .map((el, idx) =>
      idx !== 0 ? el.charAt(0).toUpperCase() + el.slice(1) : el
    )
    .join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_stealth_warrior"));
