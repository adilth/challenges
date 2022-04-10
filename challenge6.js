const values = [3, 11, 7, 2, 9, 10];

let res = values.map((el) => {
  return Math.pow(el, 2);
});

console.log(res);

function sum(num) {
  return num.map((val) => {
    return Math.pow(val, 2);
  });
}
console.log(sum([10, 2, 5]));
function sume(num) {
  return Number(
    ("" + num)
      .split("")
      .map((val) => {
        return val * val;
      })
      .join("")
  );
}
console.log(sume(3133));
function tableFor(event, journal) {
  let table = [1, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", 71, 5));

function revers(word) {
  let rev = word.split("").reverse();
  return rev.join("");
}
console.log(revers("nanort"));

let day = "monday";

day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);
console.log(day);

switch (day) {
  case "friday":
  case "saturday":
  case "sanday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "turday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "wednesday":
    console.log("From 10:00 AM To 7:00 PM");
  default:
    console.log("Its Not A Valid Day");
}
function findNeedle(arr) {
  const modifiedWords = arr.filter((val, idx, arr) => {
    return val === "needle" && idx === arr.indexOf(val);
  });
  return console.log(modifiedWords);
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

// taken from a well-known javascript library
let i = 0;
i ? (i < 0 ? Math.max(0, len + i) : i) : 0;
console.log(i);

let arr = [4, 6, 2, 1, 9, 63, -134, 566];

let max = function () {
  return Math.max(...arr);
};
let min = function () {
  return Math.min(...arr);
};
console.log(max(), min());

let zero = 0;

let counter = 3;

let my = ["ahmed", "mezzo", "ekham", "ousama", "gamal", "ameer"];

my.splice(4, 2);
my.reverse();
console.log(my); //[osama, elham, mezzo ahmed],
zero++;
console.log(my.slice(zero++, counter--));

console.log();

// let isEmpty = schedule.find((element) => {
//   return true;
// });

// function isEmpty(obj) {
//   const arr = obj.find((el) => {
//     return el ? false : false;
//   });
//   return arr;
// }
// let ar = [];
// let schedule = {};
// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let summ = 0;
// for (let i = 0; i < salaries.length; i++) {
//   sum += salaries[key];
//}

//console.log(summ);

function camelize(word) {
  return word
    .split("-")
    .map((el, idx) => {
      return idx == 0 ? el : el[0].toUpperCase() + el.slice(1);
    })
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
