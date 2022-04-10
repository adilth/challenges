//challenge
let n = 1;
let n2 = 2;

if (n > n2) {
  console.log("n kbar man n2");
} else {
  console.log("no");
}
function smash(words) {
  return words.join(" ");
}

console.log(smash(["we", "are", "good"]));

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

let array = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(array);
