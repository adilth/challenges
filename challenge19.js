let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

function obj(word) {
  return programming.languages.push(word);
}
obj("GO");
programming.difficulty = 7;
delete programming.jokes;
programming.isfun = true;
for (const word of programming.languages) {
  console.log(word);
}
for (const key of Object.keys(programming)) {
  console.log(key);
}
for (let key in programming) {
  console.log(key);
}
for (const value of Object.values(programming)) {
  console.log(value);
}
function toObj(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }
}
toObj(programming);
console.log(programming);

function oddCount(n) {
  let oddNum = [];
  Array.from({ length: n }, (el, idx) => {
    if (idx % 2 === 1) {
      oddNum.push(idx);
    }
  });
  return oddNum.length;
}

console.log(oddCount(13));
/*
Write a function which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the
*/

function createObj(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
let adil = createObj("adil", "tahiri");
let kamal = createObj("kamal", "tahir");
let mohammed = createObj("mohammed", "azmy");

let student = [adil, kamal, mohammed];
// function toArray(...name) {
//   // return [...name].map((el) => student.push(el));
//   let arr = [...name];
//   return student.push(arr);
// }
// console.log(toArray(adil, kamal, mohammed));
console.log(student);
/*
Write a function which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization
*/
function ifItThere(name) {
  for (let i = 0; i < student.length; i++) {
    if (name.toLowerCase() == student[i].firstName.toLowerCase()) {
      return true;
    }
    return false;
  }
}

console.log(ifItThere("Adil"));

/*
Write a function which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.
*/
function countEvensAndOdds(arr) {
  let countObj = {
    oddCount: 0,
    evenCount: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countObj.evenCount++;
    } else {
      countObj.oddCount++;
    }
  }
  return countObj;
}

console.log(countEvensAndOdds([1, 2, 3, 4, 5, 6, 7]));

/*
Write a function which accepts a string and returns a new string with only the capital letters passed to the string.
*/
function onlyCapitalLetters(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) < 91 && str[i].charCodeAt(0) > 64) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(onlyCapitalLetters("ddGTkkgDD"));

/*

Write a function called displayFullName, which should accept two parameters, firstName and lastName. The function should be immediately invoked and return the firstName + lastName. You should NOT have to call this function, it should invoke right away.
*/
function createCalculator() {
  return {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    },
  };
}

let calc = createCalculator();
calc.add(20, 20); // 40
calc.subtract(2, 2); // 0
calc.multiply(2, 2); // 4
calc.divide(12, 2); // 6
