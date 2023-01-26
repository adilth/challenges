/*Description //8kyu //Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  var result = weight / Math.pow(height, 2);

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const result1 = bmi(20, 45);
console.log(result1);
const result2 = bmi(25, 1);
console.log("🚀 ~ file: challenge144.js:31 ~ result2", result2);
const result3 = bmi(14, 62);
console.log("🚀 ~ file: challenge144.js:33 ~ result3", result3);
