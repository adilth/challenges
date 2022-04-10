// function isIsogram(arr) {
//   let lowArr = arr.toLowerCase();
//   return (
//     lowArr.split("").filter((val, idx, ar) => ar.indexOf(val) == idx).length ==
//     arr.length
//   );
// }
function isIsogram(str) {
  //   make it loweCase
  let toLow = str.toLowerCase();
  return (
    //     make string like array and filter any letter
    toLow.split("").filter((item, pos, arr) => arr.indexOf(item) == pos)
      .length == str.length
  );
}
// isIsogram("");
console.log(isIsogram("amdre"));

function checknum(num) {
  if (num < 10) {
    console.log(`00${num}`);
  } else if (10 < num > 100) {
    console.log(`0${num}`);
  } else if (num >= 100) {
    console.log(`${num}`);
  } else {
    console.log("nor");
  }
}
checknum(1000);
let num1 = 22;
let num2 = 10;
let num3 = 22;
let num4 = 55;

// Condition 1
function sum() {
  console.log(num4 - (num1 + num3) + num2);
}
sum();
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

// let hours = Number(prompt("Enter hours: "));
// let minuts = Number(prompt("Enter minuts: "));
// let seconds = Number(prompt("Enter seconds: "));
/*
function checknumdate() {
  if (seconds > 59) {
    seconds = 0;
    minuts++;
  } else {
    seconds++;
    if (minuts > 59) {
      minuts = 0;
      seconds = 0;
      hours++;
    } else {
      minuts++;
      if (hours > 23) {
        hours = 0;
        seconds = 0;
        minuts = 0;
      } else {
        hours++;
        //   console.log("there");
      }
    }
  }
  return console.log(`${hours}h ${minuts}m ${seconds}s`);
}
console.log(checknumdate(hours, minuts, seconds));
*/
