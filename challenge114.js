/* Discription 6kyu // Simple Encryption #1 - Alternating Split

Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(s, n) {
  if (n <= 0 || !s) {
    return s;
  }
  let even = [];
  let odd = [];
  let sp = s.split("");

  sp.forEach((chr, i) => (i % 2 == 0 ? even.push(chr) : odd.push(chr)));

  return encrypt([].concat(odd, even).join(""), n - 1);
}

function decrypt(text, n) {
  if (n < 1 || !text) {
    return text;
  }
  let enc = [...text]
    .slice(text.length / 2)
    .map((v, i) => v + text[i])
    .join("")
    .slice(0, text.length);

  return decrypt(enc, n - 1);
}

const en = encrypt("hello", 2);
const en2 = encrypt("This is a test!", 2);

console.log(en); //lleho
console.log(en2); //s eT ashi tist!

console.log(decrypt(en, 2)); //hello
console.log(decrypt(en2, 2)); //This is a test!
