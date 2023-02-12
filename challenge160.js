/* Description //Decode String 
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4]
Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
*/

// function decoded(str) {
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "]") {
//       let pattern = "";
//       let c = stack.pop();
//       while (c !== "[") {
//         pattern += c  ;
//         c = stack.pop();
//       }
//       let numStr = "";
//       let num = stack.pop();
//       while (/[0-9]/.test(num)) {
//         numStr += num
//         num = stack.pop();
//       }
//       stack.push(num);
//       let str = "";
//       for (let j = 0; j < parseInt(numStr, 10); j++) {
//         str += pattern;
//       }
//       stack.push(str);
//     } else {
//       stack.push(str[i]);
//     }
//   }
//   return stack.join("");
// }

//other solution

function decoded(str) {
  let res = [];
  let repeat = [];
  let times = "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!isNaN(char)) {
      times += char;
    } else if (char === "[") {
      res.push(times);
      times = "";
      repeat.push(result);
      result = "";
    } else if (char === "]") {
      const time = repeat.pop();
      const substr = res.pop();
      result = time + result.repeat(substr);
    } else {
      result += char;
    }
  }
  return result;
}

console.log(decoded("3[a]2[bc]")); //aaabcbc
console.log(decoded("4[ab]2[f3[vb]a]")); //ababababfvbvbvbafvbvbvba
console.log(decoded("2[abc]3[cd]ef")); //abcabccdcdcdef
