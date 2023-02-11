/* Description //Decode String
Given an encoded string, return its decoded string.
*/

function decompress(str) {
  let newStr = "";
  let num = "";
  let sp = str.split("");
  for (let i = 0; i < sp.length; i++) {
    if (isNaN(sp[i] || sp[i] === " ")) {
      newStr += sp[i].repeat(num || 1);
      num = "";
    } else {
      num += sp[i];
    }
  }
  return newStr;
}

console.log(decompress("d2f4arts2g2")); //dffaaaartsgg
console.log(decompress("m1lk7u2ul6mj5")); //mlkuuuuuuuuulmmmmmmj
console.log(decompress("kl5uk5liy7gr5a69")); //kluuuuukllllliygggggggraaaaa
