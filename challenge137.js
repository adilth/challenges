/* Description //8kyu //Sort and Star

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
**/

function sortGetFirst(s) {
  let sorted = s.sort();
  return sorted[0].split("").join("***");
}

console.log(
  sortGetFirst([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "out",
    "basic",
    "ones",
  ])
); //a***r***e
console.log(
  sortGetFirst([
    "BTC",
    "Bitcoin",
    "Classic",
    "DarkCoin",
    "DarkCoin",
    "Dash",
    "Dogecoin",
    "Ethereum",
    "Factom",
    "Factom",
    "Lisk",
    "Lisk",
    "Lisk",
    "LiteCoin",
    "Monero",
    "Monero",
    "Ripple",
    "Steem",
    "Waves",
  ])
); //B***T***C
