/*
how to merge a arr with inside arrays and flatten them
*/

const merged = (arr) => [].concat.apply([], arr);

console.log(
  merged([
    ["a", "b", "c"],
    ["f", "g", "h"],
  ])
); //[ 'a', 'b', 'c', 'f', 'g', 'h' ]
