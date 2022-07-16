/*Description 6kyu // Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standin

*/

function isItOnTime(d) {
  let ns = 0;
  let ew = 0;
  if (d.length == 10) {
    for (let i = 0; i < d.length; i++) {
      switch (d[i]) {
        case "n":
          ns--;
          break;
        case "s":
          ns++;
          break;
        case "e":
          ew--;
          break;
        case "w":
          ew++;
          break;
      }
    }
    return ns == 0 && ew == 0;
  } else {
    return false;
  }
}

//other solution
// function isItOnTime(d) {
//   function count(val) {
//     return d.filter( (a) => a == val).length;
//   }
//   return d.length == 10 && count("n") == count("s") && count("w") == count("e");
// }

console.log(isItOnTime(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); //true
console.log(isItOnTime(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); //false
console.log(isItOnTime(["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"])); //false
