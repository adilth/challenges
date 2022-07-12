/* Description 6kyu //Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

function countBits(num) {
  let count = 0;
  let bits = num.toString(2).split("");
  bits.forEach((bit) => {
    if (+bit === 1) {
      return count++;
    }
  });
  return count;
}

//other solution
//countBits = (n) => n.toString(2).split("0").join("").length;

console.log(countBits(1234)); //5
console.log(countBits(74)); //3
console.log(countBits(25694)); //8
