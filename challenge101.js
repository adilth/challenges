/*Description 5kyu //Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let count = 0;
  arr.forEach((el) => (el === 0 ? count++ : el));
  let filt = arr.filter((el) => el !== 0);
  for (let i = 0; i < count; i++) {
    filt.push(0);
  }
  return filt;
}

//other solution

// const moveZeros = function (arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// };

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
/*[
  false, 1, 1,
  2,     1, 3,
  'a',   0, 0
]*/
