/*
Description
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/
function findVowels(str) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let strCase = str.toLowerCase().split("");
  let index = [];

  strCase.forEach((char, ind) => {
    if (vowels.includes(char)) {
      index.push(ind + 1);
    }
  });
  return index;
}

console.log(findVowels("AbCfgiujghgjgurinfkfbfoodndhdodjdndnaaaAAoo"));

function findVowels2(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  //   let strCase = str.split("").toLowerCase();
  let index = [];
  [...str.toLowerCase()].forEach((char, ind) => {
    if (vowels.includes(char)) {
      index.push(ind + 1);
    }
  });
  return index;
}
console.log(findVowels2("AbCfgiujghgjgurinfkfbfoodndhdodjdndnaaaAAoo"));

/*
 Description

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/
function nThPower(arr, n) {
  //   return arr[n] ** n || -1;
  return arr.length > n ? Math.pow(arr[n], n) : -1;
}

console.log(nThPower([1, 5, 6, 3], 3));

/*
 Description
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/
function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i < max; i += step) {
    arr.push(i);
  }
  return arr;
}

console.log(generateRange(1, 10, 3));
