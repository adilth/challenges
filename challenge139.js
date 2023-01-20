/* Description // Set and decrease for counter
Modify the code of makeCounter() so that the counter can also decrease and set the number:

counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.
See the sandbox code for the complete usage example.

P.S. You can use either a closure or the function property to keep the current count. Or write both variants.
*/

function nextNum() {
  let count = 0;
  function counter() {
    return count++;
  }
  const next = (val) => (count = val);

  const decrease = () => count--;

  return { counter, next, decrease };
}

let { counter, next, decrease } = nextNum();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter()); // 2
console.log(next(10)); // 10

console.log(decrease()); // 10 (instead of 9)
console.log(counter()); //9 (instead of 10)
console.log(decrease()); //10 (instead of 9)
console.log(counter()); //9 (instead of 10)

//other solution

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

let counter2 = makeCounter();

console.log("==== solution two =====");
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2

console.log(counter2.set(10)); // set the new count

console.log(counter2.decrease()); // decrease the count by 1
console.log(counter2()); // 9

console.log(counter2.decrease()); // decrease the count by 1

console.log(counter2()); // 10 (instead of 11)
