/*Description 7kyu //Product Array (Array Series #5)
Explanation:
The first element in prod [] array 12 is the product of all array's elements except the first element

The second element 20 is the product of all array's elements except the second element .

productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.

productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10

The second element 600 is the product of all array's elements except the second element 3

The Third element 360 is the product of all array's elements except the third element 5

The Fourth element 300 is the product of all array's elements except the fourth element 6

Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

// function mutiNumsExceptNum(arr) {
//   return arr.map((_, idx, a) =>
//     [...a.slice(0, idx), ...a.slice(idx + 1)].reduce((sum, num) => sum * num, 1)
//   );
// }

// other solution
function mutiNumsExceptNum(arr) {
  return arr.map((x) => arr.reduce((a, b) => a * b) / x);
}
console.log(mutiNumsExceptNum([10, 3, 5, 6, 2]));
console.log(mutiNumsExceptNum([1, 5, 2]));
console.log(mutiNumsExceptNum([2, 4, 7, 9, 2]));

// output
//[180, 600, 360, 300, 900]
//[(10, 2, 5)]
//[(504, 252, 144, 112, 504)];
