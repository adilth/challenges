/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/
function findMissing(...arr) {
  let missing = "";
  //   let toArray = Array.from(arguments);
  let str = arr.toString();
  for (let i = 0; i <= 9; i++) {
    if (!str.includes(i)) {
      missing += i;
    }
  }
  return missing;
}

// console.log(findMissing([12, 34, 56, 78]));
// console.log(findMissing([2015, 8, 26]));
console.log(findMissing(2015, 8, 26));

function getMissingElement() {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var arguArray = arguments;
  var str = "";
  for (var i = 0; i < arguArray.length; i++) {
    var lalla = arguArray[i].toString();
    str += lalla;
  }
  for (var j = 0; j < str.length; j++) {
    for (var k = 0; k < arr.length; k++) {
      if (str.charAt(j) == arr[k].toString()) {
        arr.splice(k, 1);
      }
    }
  }
  return arr.join("");
}

console.log(getMissingElement(2015, 8, 26));

/*
//Description
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function sumNumber(number) {
  var sum = 0;
  for (var i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumNumber(21));
