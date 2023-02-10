/* Description //Given an encoded string, return its decoded string.
Given an encoded string, return its decoded string.
*/

function createCompression(str) {
  let comp = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      comp += str[i] + count;
      count = 0;
    }
  }
  return comp;
}
console.log(createCompression("aarrccttyyuudet"));
