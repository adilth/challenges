/* Description //leetcode //count duplications with hash map
 Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

 What if the string is empty? Then the result should be empty object literal, {}.

*/

function countChars(str) {
  let countObj = {};
  for (const c of str) {
    // countObj ? countObj[c]++ : countObj = 1
    if (countObj[c]) {
      countObj[c]++;
    } else {
      countObj[c] = 1;
    }
  }

  return countObj;
}

console.log(countChars("aba")); //{ a: 2, b: 1 }
console.log(countChars("dog")); //{ d: 1, o: 1, g: 1 }
console.log(countChars("abba")); //{ a: 2, b: 2 }
