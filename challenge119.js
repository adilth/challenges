//numbers // integer // odd  array no empty
//middle of number // one //
//[2,3,6,9,55,12,8] =>[2,3,6,8,9,12,55]=> 8
//[5,7,22,55,2,99,6,100,5] =>[2,5,5,6,7,22,55,99,100] =>7
//[2,10,5] ] => 5
function middleNumber(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  console.log(Math.floor(sortedArray.length / 2));
  return sortedArray[Math.floor(arr.length / 2)];
}

console.log(middleNumber([2, 8, 6, 9, 55, 12, 8]), "=> 8");
console.log(middleNumber([5, 7, 22, 55, 99, 6, 100, 5]), "=>7");
console.log(middleNumber([2, 10, 5]), "=>2");
