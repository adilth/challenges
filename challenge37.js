/* Description //7ku //Two to One
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
  let arr = Array.from([...new Set(s1 + s2)]);
  //   let sp = arr.map((el) => el.split(""));
  return arr.sort().join("");
}

// function longest(s1, s2) {
//   let arr = Array.from(arguments, (el) => el.split("")).reduce(
//     (ac, cu) => ac.concat(cu),
//     []
//   );

//   return [...new Set(arr)].sort().join("");
// }
console.log(longest("abcdefklmopqwxy", "xyaabbbccccdefww"));
console.log(longest("aretheyhere", "yestheyarehere"));

//output : abcdefklmopqwxy
//aehrsty
