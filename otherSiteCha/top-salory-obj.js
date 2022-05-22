/*Description
There is a salaries object:


Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function getPerson(person) {
  let maxSalary = 0;
  let name = null;

  for (const [key, value] of Object.entries(person)) {
    if (maxSalary < value) {
      maxSalary = value;
      name = key;
    }
  }
  return `the person is ${name} and salary is ${maxSalary}`;
}

console.log(getPerson(salaries));
