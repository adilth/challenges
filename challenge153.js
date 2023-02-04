/* Description //flatter array
Implement a function flatten, that flattens arrays with arbitrary levels of nesting, and recursively concatenates all arrays within it into an array containing only a single level.
*/

// function flatten(array) {
//   // Delete the next line to pass the tests!
//   return array.reduce(
//     (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
//     []
//   );
// }

// function flatten(array) {
//   while (array.some(Array.isArray)) {
//     array = [].concat(...array);
//   }
//   return array;
// }

//with generator to lazy the recursive to not cause a stack overflow if there thousands of levels

function* flatten(array) {
  for (const item of array) {
    if (Array.isArray(item)) {
      yield* flatten(item);
    } else {
      yield item;
    }
  }
}

//with build in function
function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten([1, 2, [5, 8]])); //[ 1, 2, 5, 8 ]
console.log(flatten([8, 0, [3, 7], [2, 9]])); //[ 8, 0, 3, 7, 2, 9 ]
console.log(flatten([3, 8, [5, [5, [9]], 8]])); //[ 3, 8, 5, 5, 9, 8 ]
console.log(flatten([10, 52, [1, [2, 75], 5], 9])); //[10, 52, 1, 2, 75,  5, 9]
