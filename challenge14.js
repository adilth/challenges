//Find the vowels
// function findVowels(str){
// let vowelsCount = 0;
// for (let char of str) {
//   if (vowels.includes(char)) {
//     vowelsCount++;
//   }
// }
//}

// return vowelsCount;

const arr1 = [
  ["name", "id", "age", "weight", "Cool"],
  ["Susan", "3", "20", "120", true],
  ["John", "1", "21", "150", true],
  ["Bob", "2", "23", "90", false],
  ["Ben", "4", "20", "100", true],
];

const arr2 = [
  ["name", "id", "height"],
  ["Bob", "2", "50"],
  ["John", "1", "45"],
  ["Ben", "4", "43"],
  ["Susan", "3", "48"],
];

const arr3 = [
  ["name", "id", "parent"],
  ["Bob", "2", "yes"],
  ["John", "1", "yes"],
];

const database = [];
const headings = [];

//Begin precessing each array
[arr1, arr2, arr3].forEach((arr) => {
  const [keys, ...data] = arr;

  //Identify each unique heading
  keys.forEach((key) => {
    if (!headings.find((name) => name === key)) {
      headings.push(key);
    }
  });
  //process each entry
  data.forEach((entry) => {
    //turn entry into user object
    const profile = entry.reduce(
      (acc, curr, idx) => ({
        ...acc,
        [keys[idx]]: curr,
      }),
      {}
    );

    //check if user already exists
    const existingProfileIndx = database.findIndex(
      ({ id }) => id === profile.id
    );

    if (existingProfileIndx > -1) {
      //if user exists , merge data
      database[existingProfileIndx] = {
        ...database[existingProfileIndx],
        ...profile,
      };
    } else {
      // else add user as new entry
      database.push(profile);
    }
  });
});

//convert entries back to arrays
const table = [
  headings,
  ...database.map((entry) => headings.map((headings) => entry[headings])),
];
console.table(table);
