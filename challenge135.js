/*Description //Give me a Diamond

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:
 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:
  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(num) {
  if (num < 0 || num % 2 === 0) return null;
  //   let st = Array.from({ length: num }).fill("*");
  let result = "*".repeat(num) + "\n"; // middle row
  let dai = 0;
  for (let i = num - 2; i >= 0; i -= 2) {
    const rows = " ".repeat(++dai) + "*".repeat(i) + `\n`;
    result = rows + result + rows;
  }

  return result;
}

console.log(diamond(1));
console.log(diamond(5));
