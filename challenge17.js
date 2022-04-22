function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
/*
//description
tconcat  to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
and remobe duplicate number from it

*/
let arrays = [
  [1, 2, 3, 4],
  [4, 5],
  [6, 5, 7, 1],
  [8, 5, 9],
];

function concatAndRemove(arr) {
  return arr
    .reduce((ac, cu) => ac.concat(cu), [])
    .filter((el, i, arr) => {
      return arr.indexOf(el) == i;
      // it remove equal number fron array
      // if (arr.indexOf(el) == arr.lastIndexOf(el)) return el;
    });
}
/*
Description
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/
let data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
console.log(concatAndRemove(arrays));

function openOrSenior(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 55 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("open");
    }
  }
  return result;
}

console.log(openOrSenior(data));

function addCommaAndUnderscore(num) {
  //convert toString eith comma and split to array
  let str = num.toLocaleString().split("");
  // let underScoder = str.slice(length - 4, length - 1);
  // take last comma and put underscore
  str.splice(length - 4, 1, "_");
  // let wout = str.slice(0, length - 3);
  // Number(wout.join(""));
  return str.join("");
}

console.log(addCommaAndUnderscore(12054786502));

/*
Description
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
function getGrade(s1, s2, s3) {
  let sum = (s1 + s2 + s3) / 3;
  if (sum >= 90) {
    return "A";
  } else if (sum < 90 && 80 < sum) {
    return "B";
  } else if (70 < sum && sum < 80) {
    return "C";
  } else if (60 < sum && sum < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(55, 55, 88));
/*
Description
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/
function countHow(str) {
  let countU = 0;
  let countL = 0;
  let countN = 0;
  let countSy = 0;
  let count = [];
  let arr = str.split("");
  arr.forEach((el) => {
    if (el == el.match(/^[A-Z]+$/)) {
      countU++;
    } else if (el == el.match(/^[a-z]+$/)) {
      countL++;
    } else if (el == Number(el)) {
      countN++;
    } else {
      countSy++;
    }
  });
  count.push(countU);
  count.push(countL);
  count.push(countN);
  count.push(countSy);
  return count;
}

console.log(countHow("*'&ABCDabcde12345"));
