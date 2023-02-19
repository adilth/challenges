/*Description // Great Common Divider
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

Test.assertEquals(mygcd(30,12),6)
Test.assertEquals(mygcd(8,9),1)
Test.assertEquals(mygcd(1,1),1)
*/

function greatCommonDivisor(n1, n2) {
  for (let i = Math.min(n1, n2); i > 0; i--) {
    if (n1 % i == 0 && n2 % i === 0) return i;
  }
}
function greatCommonDivisor(n1, n2) {
  if (n2 == 0) return n1;
  return greatCommonDivisor(n2, n1 % n2);
}

console.log(greetCommonDivisor(12, 16)); //4
console.log(greetCommonDivisor(12, 1)); //1
