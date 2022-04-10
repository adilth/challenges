function solution(arr) {
  if (arr === null) {
    return [];
  }
  return arr.sort();
}

console.log(solution([1, 2, 10, 50, 5])); // should return [1,2,5,10,50]
console.log(solution(null));

function isDividid(num, a, b) {
  return num % a === 0 && num % b === 0;
}
console.log(isDividid(5, 10, 15));

//get the str and just reverse the word nit all string
function reverse(str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}
console.log(reverse("This is an example!")); // ==> "sihT si na !elpmaxe"
console.log(reverse("double  spaces")); //==> "elbuod  secaps"

function dibider(n) {
  let out = 0;
  num = n;
  // for (let i = n; i > 0; i--) {
  //   if (n % i === 0) {
  //     out++;
  //   }
  // }
  while (num > 0) {
    if (n % num === 0) {
      out++;
    }
    num--;
  }
  return out;
}
console.log(dibider(30));

function Dog(name, species, size) {
  this.name = name;
  this.species = species;
  this.size = size;

  this.bark = function () {
    return "Grrr! GRRR";
  };
}
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog.measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//make even and odd number of letter to uppercase and return it in array
function capitalize(str) {
  let even = str
    .split("")
    .map((el, idx) => (idx % 2 == 0 ? el.toUpperCase() : el))
    .join("");
  let odd = str
    .split("")
    .map((el, idx) => (idx % 2 == 1 ? el.toUpperCase() : el))
    .join("");

  return [even, odd];
}
console.log(capitalize("abcdef")); //=>['AbCdEf', aBcDfE]

const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable

let sum = arrays
  .map((el) => el.reduce((cur, cu) => cur + cu, 0))
  .reduce((ac, cu) => ac + cu, 0);

console.log(sum); // Should show 31

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

// Compute female student results
// const femaleStudentsResults = [];
// for (const student of students) {
//   if (student.sex === "f") {
//     let gradesSum = 0;
//     for (const grade of student.grades) {
//       gradesSum += grade;
//     }
//     const averageGrade = gradesSum / student.grades.length;
//     femaleStudentsResults.push({
//       name: student.name,
//       avgGrade: averageGrade
//     });
//   }
// }
function femaleStudentsResults(arr) {
  return arr.map((el) => {
    if (el.sex === "f") {
      let sum = 0;
      for (const gande of el.grades) {
        return (sum += gande);
      }
      let avrg = sum / el.grades.length;
      return {
        name: students.name,
        agrgr: avrg,
      };
    }
  });
}
console.log(femaleStudentsResults(students));

function gimme(arr) {
  return arr.indexOf(arr.slice().sort((el, ind) => el - ind)[1]);
}
console.log(gimme([2, 3, 1])); //=> 0
console.log(gimme([5.9, 10.4, 14.2])); //=> 0
console.log(gimme([5.1, 10, 4, 14.2])); //=> 0
