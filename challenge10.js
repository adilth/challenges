"use strict";
function sortNum(num) {
  return Number(num.toString().split("").sort().reverse().join(""));
}
console.log(sortNum(205));
const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4],
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4],
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3],
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2],
  },
];
const femaleStudentsResults = [];

for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;

    for (const grade of student.grades) {
      gradesSum += grade;
    }

    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade,
    });
  }
}
console.log(femaleStudentsResults);

function predictAge(n1, n2, n3, n4, n5, n6, n7, n8) {
  let multi =
    n1 * n1 +
    n2 * n2 +
    n3 * n3 +
    n4 * n4 +
    n5 * n5 +
    n6 * n6 +
    n7 * n7 +
    n8 * n8;
  let sqr = Math.sqrt(multi) / 2;
  return Math.trunc(sqr);
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); // === 86

function predictAge2(...n) {
  // let sum = [...n]
  return (Math.hypot(...n) / 2) | 0;
  //   return Math.trunc(sqr);
}
console.log(predictAge2(65, 60, 75, 55, 60, 63, 64, 45)); // === 86

function minMax(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return [min, max];
}
console.log(minMax([1, 2, 3, 4, 5])); //== [1, 5];
console.log(minMax([2334454, 5])); // == [5, 2334454];
console.log(minMax([1])); //== [1, 1];

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}
//if sum catch a negative number it will remove the previous number stert from 0 and continue
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11, 1])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
console.log(getMaxSubSum([1, 1, 4, 3])); // 0
