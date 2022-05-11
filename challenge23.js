/*Description sortStrEverychrcapitalize
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/

function findChildren(str) {
  return [...str]
    .sort((a, b) => {
      //if exactly same strings, return 0
      // if (a === b) return 0;
      //if first case of a and b are unequal return based on case
      if (
        a.toLocaleLowerCase()[0] === b.toLocaleLowerCase()[0] &&
        a[0] !== b[0]
      )
        return a[0] > b[0] ? 1 : -1;
      //Now return 0 if both are equal in lower case else return 1 or -1 depending on comparison below
      // if (a.toLocaleLowerCase() === b.toLocaleLowerCase()) return 0;
      return a.toLocaleLowerCase() > b.toLocaleLowerCase() ? 1 : -1;
    })
    .join("");
}
console.log(findChildren("beeeEBb"));
console.log(findChildren("ggggTGkkK"));

//output BbbEeee
//output GggggKkkT

/*----------------------------------------------------------------*/
/*Description 7kyu //String ends with?
DescriptionComplete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function lastChar(str, ending) {
  return str.endsWith(ending);
}

console.log(lastChar("testing", "g"));

//output : True

/*Description ///Disemvowel Trolls\\\
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let arr = [];
  let vowels = ["a", "e", "i", "o", "A", "I", "E", "O"];
  let spStr = str.split("");
  for (let char of spStr) {
    // remove all vowels from the string we get index of vowels like 1 2 3 then it is not push the vowels
    if (vowels.indexOf(char) < 0) {
      arr.push(char);
    }
  }

  return arr.join("");
}

console.log(disemvowel("This website is for losers LOL!"));

//output : Ths wbst s fr lsrs LL!
