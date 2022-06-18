/* Description 6kyu //Sum of Two Integers
Task
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .
Input >> Output Examples
1- Add (5,19) ==> return (24) 

2- Add (-27,18) ==> return (-9)

3- Add (-14,-16) ==> return (-30)

*/

function addWithout(a, b) {
  if (b === 0) return a;
  return addWithout(a ^ b, (a & b) << 1);
}

console.log(addWithout(12, 45)); //57
console.log(addWithout(257, 65)); //322
console.log(addWithout(9, 32)); //41
