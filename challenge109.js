/* Description 6kyu //Tribonacci Sequence

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]
*/

//input there two parameters the array of three values and stop point
//output : array of number in Tribonacci sequence with end point
//example : [1,1,1] => [1, 1 ,1, 3, 5, 9, 17, 31, ...]
//we need to use tribonacci sequence using three numbers to sum together to get new number and add it to the array and //take last three numbers including the new number and get new number and so on untill the end point

function tribonacci(array, n) {
  let arr = [];
  for (let i = 0; i < n - 3; i++) {
    array.push(array.slice(i).reduce((a, b) => a + b));
  }
  return array.slice(0, n);
}

//other solution
// function tribonacci(array, n) {
//   const result = array.slice(0, n);
//   while (result.length < n) {
//     result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
//   }
//   return result;
// }

console.log(tribonacci([1, 1, 1], 10)); //[1,  1,  1,  3,   5, 9, 17, 31, 57, 105]
console.log(tribonacci([0, 0, 1], 10)); //[0,0,  1,  1,   2,  4, 7, 13, 24, 44]
console.log(tribonacci([2, 3, 5], 10)); //[  2,  3,   5,  10,  18,  33, 61, 112, 206, 379]
