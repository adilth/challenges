/*Description //
 */

// function isAnagram(word, anagram) {
//   console.time();
//   let char = word.toLowerCase().split("").sort().join("");
//   let org = anagram.toLowerCase().split("").sort().join("");
//   console.timeEnd();
//   return char === org;
// }
function isAnagram(word, anagram) {
  let org = hashMap(word);
  let char = hashMap(anagram);

  if (org.size !== char.size) return false;
  let isTrue = Array.from(org.keys()).every(
    (key) => org.get(key) === char.get(key)
  );
  return isTrue;
}
function hashMap(word) {
  let keys = word.toLowerCase().split("");
  return keys.reduce(
    (acc, key) => acc.set(key, (acc.get(key) || 0) + 1),
    new Map()
  );
}
console.log(isAnagram("foefet123", "to123ffee")); //true
console.log(
  isAnagram(
    "0fh&^%$#@!drfhfhqwehf6hfhtyfh9faiytrhr15857123tfhfhuif2hfh741fh5fhfhty4fhfaiythfhf8htyfhfaiytrhr3hfhf15",
    "fhfhuif5hfhf&^%$#@!hfhfhtyfhfa7iytrh1784fhfhdrf4hfhqw9ertf23568hfhfhty5fhfaiytrhhfhfhtyfhfa1iytrh51230"
  )
); //false
