/* Description 7kyu //Regex validate PIN code

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validPIN(pin) {
  for (let i of pin) {
    if (!isFinite(parseInt(i))) return false;
  }
  return pin.length === 4 || pin.length === 6;
}

//other solution

// function validPIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }

console.log(validPIN("1234567")); //false
console.log(validPIN("1234566")); //false
console.log(validPIN("123456")); //true
console.log(validPIN("12345a")); //false
console.log(validPIN("-123454")); //false
console.log(validPIN("1.3454")); //false
console.log(validPIN("12.0")); //false
console.log(validPIN("123455")); //true
