/* Description 6kyu //Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

function getUniqueInOrder(it) {
  let check = Array.isArray(it) ? it : it.split("");
  return check.filter((c, i) => c !== check[i + 1]);
}

//other Solution

// function getUniqueInOrder(it) {
//   return [...it].filter((a, i) => a !== it[i - 1]);
// }

console.log(getUniqueInOrder("AAAABBBCCDAABBB")); //[ 'A', 'B', 'C', 'D', 'A', 'B' ]
console.log(getUniqueInOrder("ABBCcAD")); //[ 'A', 'B', 'C', 'c', 'A', 'D' ]
console.log(
  getUniqueInOrder([1, 1, 2, 5, 5, 7, 7, 5, 6, 6, 6, 1, 6, 4, 4, 5, 8, 1])
); //[1, 2, 5, 7, 5, 6, 1, 6, 4, 5, 8, 1];
