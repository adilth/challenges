/* Description 7kyu //Printer Errors

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

// function printerError(s) {
//   let count = 0;
//   let error = ["n", "o", "q", "p", "r", "t", "s", "u", "y", "v", "w", "x", "z"];
//   for (let letter of s) {
//     if (error.includes(letter)) {
//       count++;
//     }
//   }
//   return `${count}/${s.length}`;
// }

function printerError(s) {
  var count = 0;
  for (let letter of s) {
    if (letter > "m") {
      count++;
    }
  }
  return `${count}/${s.length}`;
}

console.log(printerError("jjhgyyydfsedksixbfjfjjj")); //6/23
console.log(printerError("aaaaeeertttaasfdjjykjghuuuzzxxnfazzzzzzzzzzzz")); //26 / 45;
console.log(printerError("aaaaddcffgghhjjkkmmmmiiilllmccaaaadfgeeeammlaa")); //0 / 46;
