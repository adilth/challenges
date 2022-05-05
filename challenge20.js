function multipleLetterCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in obj)) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
}
multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
console.log(multipleLetterCount("persono")); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
/*
Description
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
. x = each row length of array a1, y = each row length of array a2. We need to calculate Math.abc() for each x with each y, and then take the maximum number from all the results. 
Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
*/
function absOf(a1, a2) {
  let arr = [];
  if (a1.length && a2.length) {
    a1.forEach((str1) =>
      a2.forEach((str2) => arr.push(Math.abs(str1.length - str2.length)))
    );
    return Math.max.apply(null, arr);
  }
  return -1;
}
let a1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(absOf(a1, a2));
/*
Description
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/
function isAlt(word) {
  let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 1; i < word.length; i++) {
    if (word[i] in vowels === word[i - 1] in vowels) return false;
    // you can use this
    //     if ("aeiou".includes(word[x]) === "aeiou".includes(word[x - 1])) {
    //       return false;
    //     }
  }
  return true;
}

console.log(isAlt("amazon")); // true
console.log(isAlt("apple")); // false
console.log(isAlt("banana")); // true

function alpha(arr) {
  let array = [];
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  for (let str of arr) {
    let val = str.toLowerCase().split("");
    // for (let i = 0; i < val.length; i++) {
    //   if (val.indexOf(val[i]) === alphabeth.indexOf(val[i])) {
    //     count++;
    //   }
    //     array.push(count);
    let value = val.filter((el, id) => {
      if (id === alphabeth.indexOf(el)) {
        return el;
      }
    }).length;
    array.push(value);
  }
  return array;
}

console.log(alpha(["abode", "ABc", "xyzD"])); //
