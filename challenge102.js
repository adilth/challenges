/* Description 5kyu //Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// function humanReadable(seconds) {
//   let hours = Math.floor(seconds / 3600);
//   seconds = seconds - hours * 3600;
//   let minutes = Math.floor(seconds / 60);
//   hours = hours.toString().padStart(2, "0");
//   minutes = minutes.toString().padStart(2, "0");
//   seconds = (seconds - minutes * 60).toString().padStart(2, "0");
//   return `${hours}:${minutes}:${seconds}`;
// }

function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map((v) => {
      return Math.floor(v).toString().padStart(2, "0");
    })
    .join(":");
}
console.log(humanReadable(4521));
