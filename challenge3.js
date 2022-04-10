let a = "Elzero web school";

//take Zero from string with first chrachter capital and it iclude methods [slice, charAt]
console.log(a.slice(2, 6).substring());

//take  a and take charakter h and make it 8 times
console.log(a.slice(13, 14).toUpperCase().repeat(8));

//returen array [elzero]
console.log(a.split(" ", 1));

//take elzero school and just user only substr method + template literals is your solution
console.log(a.substr(0, 6) + " " + a.substr(11, 6));

//solution must be dynamic and sting may change

console.log(a.startsWith("E").toLowerCase);

let userName = "Elzero";
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.charAt(0)); // e
console.log(userName.substr(0, 1)); // e
console.log(userName.slice(0, 1)); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName[0].repeat(3).toLowerCase()); // eee
