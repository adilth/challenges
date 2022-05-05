/*Description
Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.
*/

function longest(words) {
  //   return words.reduce((ac, cur) =>
  //     ac.length > cur.length ? words.indexOf(cur) : words.indexOf(ac));
  //   return Math.max(...words.map((word) => word.length));
  let len = words.map((word) => word.length);
  return Math.max.apply(null, len);
}
console.log(longest(["simple", "is", "better", "than", "complex"]));

/*
Description
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPosSumNeg(input) {
  let po = 0;
  let ne = 0;
  if (input == null || input.length === 0) {
    return [];
  } else {
    input.map((num) => (num > 0 ? po++ : (ne += num)));
  }

  return [po, ne];
}
console.log(
  countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
);
console.log(countPosSumNeg(null));
/*
Filter anagrams
Anagrams are words that have the same number of same letters, but in different order.

For instance:
nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one.

Open a sandbox with tests.
*/
function aclean(arr) {
  let map = new Map();
  for (const word of arr) {
    let split = word.toLowerCase().split("").sort().join("");
    map.set(split, word);
  }
  return [...map.values()];
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

//this with object iterate
function aclean2(arr) {
  let obj = {};

  for (const word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    obj[sorted] = word;
  }

  return Object.values(obj);
}

console.log(aclean2(arr));

/*
Description
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
function arrayDiff(a, b) {
  let arr = [];
  // return [
  //   ...a.filter((x) => !b.includes(x)),
  //   ...b.filter((x) => !a.includes(x)),
  // ];

  for (const num of a) {
    if (b.indexOf(num) === -1) {
      arr.push(num);
    }
  }
  return arr;
}

console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([1, 2, 2], []));
console.log(arrayDiff([], [1, 2, 2]));
