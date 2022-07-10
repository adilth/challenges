/* summ all numbers till the given one */
//using for loop
// function sumTo(num) {
//   let sum = 0;

//   for (let i = 0; i < num.length; i++) {
//     sum += i;
//   }
//   return sum;
// }

//using reduce
function sumTo(num) {
  return [...Array(num).keys()].reduce((acc, val) => acc + val, 0);
}

//using recursive function
// function sumTo(num) {
//   let n = 0;
//   if (num == 1) {
//     return num;
//   }
//   return num + sumTo(num - 1);
// }

console.log(sumTo(55)); //1540
console.log(sumTo(78)); //3081
console.log(sumTo(385)); //74305
