//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?${}";

// document.querySelector("button").addEventListener("click", getDrink);

// function getDrink() {
//   document.querySelector("input").value;
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.drinks);
//       document.querySelector("h2").innerHTML = data.drinks[0];
//       document.querySelector("img").scr = data;
//       document.querySelector("h3").innerHTML = data;
//     });
// }

/*

Description:
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

Task
Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

Example
Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8
*/
function arrFix(num) {
  let fix = [];
  for (let i = num[0]; i <= num[num.length - 1]; i++) {
    fix.push(i);
  }
  return fix;
}

console.log(arrFix([4, 5, 7, 8]));

/*
Description:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
function countsheep(num) {
  //my solution remember fill here just make emty array
  // return Array(num)
  //   .fill()
  //   .map((_, idx) => `${idx} sheep`)
  //   .join("");

  // return [...Array(num)].map((x) => `${x + 1} sheep...`).join``;
  let n = num;

  for (let i = 1; i <= n; i++) {
    num += `${i} sheeep`;
  }
  return num;
}

console.log(countsheep(5));

/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
*/
function nonCons(arr) {
  let number = arr.find((num, idx) => num !== idx + arr[0]);
  return Number.isInteger(number) ? number : null;
}

console.log(nonCons([1, 2, 3, 4, 6, 7, 8]));

/*Write a function that will check if two given characters are the same case.

If any of characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters and not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/
function check(a, b) {
  if (
    a.toLowerCase() == b.toUpperCase() ||
    a.toUpperCase() == b.toLowerCase()
  ) {
    return -1;
  } else {
    let lowera = a == a.toLowerCase();
    let lowerb = b == b.toLowerCase();
    if ((a == a.toLowerCase()) == (b == b.toLowerCase())) {
      return 1;
    } else {
      return 0;
    }
  }
}

console.log(check("g", "a"));
