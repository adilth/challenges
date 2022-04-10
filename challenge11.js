"use strict";

function Iter(from, to) {
  this.from = from;
  this.to = to;
  this[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  };
}

let arrLike = {
  0: "Zero",
  plus: "Plus",
  1: "One",
  2: "Two",
  anything: "Anything",
  length: 3,
};

let it = new Iter(3, 7);

let arr1 = Array.from(it);
let arr2 = Array.from(arrLike);

console.log(arr1); // [3, 4, 5, 6, 7]
console.log(arr2); // ["Zero", "One", "Two"]

function findCapitalLetter(word) {
  const capital = word.split("").reduce((ac, cur, idx) => {
    if (cur == cur.toUpperCase()) ac.push(idx);
    return ac;
  }, []);
  // const capital = word.split("").filter((a, idx, arr) => a.match(/[A-Z]/));
  //  const capital = word.match(/[A-Z]/g).map((x) => {
  //      return word.indexOf(x);
  //    });
  return capital;
}

console.log(findCapitalLetter("CapTile"));

const stu = [];
const femaleStudents = [];
function Students(name, sex, grades) {
  this.name = name;
  this.sex = sex;
  this.grades = grades;
  this.fmale = function () {
    if (this.sex === "f") {
      const gradesSum = (arr) => {
        return arr.reduce((ac, cu) => ac + cu, 0) / arr.length;
      };
      console.log(gradesSum(this.grades));
      const averageGrade = gradesSum(this.grades);
      femaleStudents.push({
        name: this.name,
        avgGrade: averageGrade,
      });
      return femaleStudents;
    }
  };
}
const ana = new Students("anna", "f", [4, 3.5, 4.5]);
const martha = new Students("Martha", "f", [5, 4, 2.5, 3]);
const denns = new Students("Dennis", "m", [4, 3.5, 4.5]);

// console.log(martha.fmale());
stu[stu.length] = ana;
stu.push(martha);
stu.push(denns);

// stu.push();
console.log(martha.fmale());
// // console.log(femaleStudents.fmale());
// // console.log(martha.fmale());
// // console.log(anna);
console.log(stu);
console.log(stu[1].fmale());

function speedControl(x, s) {
  if (x.length <= 1) {
    return 0;
  }
  let sum = Math.max(
    ...x.slice(1).map((cur, idx) => {
      return (3600 * (cur - x[idx])) / s;
    })
  );
  return sum;
}

let s = 15;
let x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];

console.log(speedControl(x, s));

function removeSecond(arr) {
  return arr.filter((el, idx) => {
    if (idx % 2 == 0) {
      return el;
    }
  });
}

console.log(
  removeSecond(["Keep", "Remove", "Keep", "Remove", "Keep", "remove"])
);
/*
Description:
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
*/

const multip = (a, l) => {
  let list = [];
  for (let i = 1; i < l; i++) {
    let sum = a * i;
    if (sum <= l) {
      list.push(sum);
      console.log(i);
    }
  }
  return list;
};

//array.from to make array from divide of  l/ a
// length to make empty array with number of diffrent
//~~ to give you floor of the divider number
//idx + 1 to not give you 0
const multi = (a, l) =>
  Array.from({ length: ~~(l / a) }).map((x, idx) => a * (idx + 1));
console.log(multi(2, 6));
console.log(multip(1, 6));
