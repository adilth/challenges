/*Description 7kyu ///Mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let arr = s.toLowerCase().split("");
  return arr
    .map((el, idx) => el.charAt(0).toUpperCase() + el.repeat(idx))
    .join("-");
  // .map((el, idx) => el.charAt(0).toUpperCase() + el.slice(1));
}

console.log(accum("ZpglnRxqenU"));

//output : Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
