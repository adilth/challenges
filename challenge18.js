/*
Description 6kyu
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function like(arr) {
  if (arr.length == 0) {
    return "no one likes this";
  } else if (arr.length == 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length == 2) {
    return `${arr[0]} and ${arr[1]} likes this`;
  } else if (arr.length == 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[1]} likes this`;
  } else {
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} likes this`;
  }
}

console.log(like(["adil", "mona", "fona", "lola", "kuku"]));
/*
Kata Description
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/
var isSquare = function (n) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(9));

function squareOrSquareRoot(array, logk) {
  return array.map((el) => (logk(el) ? Math.sqrt(el) : el * el));
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1], isSquare));

/*
Description
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
  let arr = classPoints.concat(yourPoints);
  arr = arr.reduce((ac, cu) => ac + cu) / arr.length;
  console.log(arr);
  return arr < yourPoints ? true : false;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
