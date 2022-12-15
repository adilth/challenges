/* Description /6kyu //Array combinations

In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!

If you like this Kata, please try:
*/

function solve(arr) {
  return arr.reduce((acc, cur) => acc * new Set(cur).size, 1);
}

const f = console.log.bind(console);

f(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ])
); // => 4

f(
  solve([
    [1, 4, 5],
    [1, 4, 6],
    [2, 4, 5],
    [2, 4, 6],
  ])
); // => 81

f(
  solve([
    [1, 2, 5, 7, 1],
    [4, 4, 1, 1],
    [5, 6, 6, 1],
    [4, 7, 1, 0, 1],
  ])
); // => 96
