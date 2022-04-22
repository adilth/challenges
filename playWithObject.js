/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * */
function takeeverytwo(obj) {
  let arr = [];
  for (const [type, key] of Object.entries(obj)) {
    arr.push([type, key]);
  }
  return arr;
}
let obj = { a: 1, b: 2, c: 4 };
let obj1 = { a: 1, b: 4, c: 4 };
console.log(takeeverytwo(obj));

const makePairs3 = (object) => {
  const result = [];

  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      result.push([prop, object[prop]]);
    }
  }

  return result;
};

console.log(makePairs3(obj));

// spreed to make the argument to an array and you can through two argument to delete
const without = (object, ...args) => {
  const obj = { ...object };
  console.log(obj);
  args.forEach((arg) => {
    delete obj[arg];
  });

  return obj;
};

console.log(without(obj, "a", "c"));
let obj2 = { a: undefined };
const isEmpty = (object) => {
  const objectKeys = Object.keys(object);
  //  if (objectKeys.length === 0) {
  //    return true;
  //  }

  return objectKeys.length === 0
    ? true
    : !objectKeys.filter(
        (key) => object[key] || object[key] === 0 || object[key] === false
      ).length;
};
console.log(isEmpty(obj2));

const isEquil = (obj, obj1) => {
  let key1 = Object.keys(obj);
  let key2 = Object.keys(obj1);
  if (key1.length !== key2.length) {
    return false;
  }
  // return !key1.filter((key) => key1[key] !== key2[key]).length;
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] !== obj1[prop]) {
      return false;
    }
  }
  return true;
};

// console.log(isEquil(obj, obj1));

const invoke = (object, path, func, args) => {
  const splittedPath = path.split(".");
  // console.log(splittedPath);
  const target = splittedPath.reduce((acc, key) => {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});
  // console.log(target);
  return Array.prototype[func].apply(target, args);
};
const data = { a: { b: [1, 2, 3, 4] } };
console.log(invoke(data, "a.b", "splice", [0, 2])); // [2, 3]

const isEmptyDeep = (element) => {
  if (element === null) {
    return true;
  }
  if (Array.isArray(element)) {
    if (element.length === 0) {
      return true;
    }

    let result;
    for (let i = 0; i < element.length; i++) {
      if (
        typeof element[i] === "boolean" ||
        (typeof element[i] === "number" && !Number.isNaN(element[i])) ||
        (typeof element[i] === "string" && element[i] !== "")
      ) {
        result = false;
        break;
      }
      if (
        Array.isArray(element[i]) ||
        (typeof element[i] === "object" && element[i] !== null)
      ) {
        result = isEmptyDeep(element[i]);
        break;
      }

      result = true;
    }

    return result;
  }
  if (typeof element === "object") {
    const objectKeys = Object.keys(element);
    if (objectKeys.length === 0) {
      return true;
    }

    let result;
    for (let i = 0; i < objectKeys.length; i++) {
      const value = element[objectKeys[i]];

      if (
        typeof value === "boolean" ||
        (typeof value === "number" && !Number.isNaN(value)) ||
        (typeof value === "string" && value !== "")
      ) {
        result = false;
        break;
      }
      if (
        Array.isArray(value) ||
        (typeof value === "object" && value !== null)
      ) {
        result = isEmptyDeep(value);
        break;
      }

      result = true;
    }

    return result;
  }
};
let obj3 = { a: 1, b: [, 4, 6] };
let obj4 = { a: 1, b: [, 4, 6] };
const isDeepEquil = (obj, obj1) => {
  let key1 = Object.keys(obj);

  return key1.reduce((acc = {}, key) => {
    if (obj[key] == obj1[key]) {
      acc = {
        ...acc,
        [key]: obj[key],
      };
    }
    if (Array.isArray(obj[key]) && Array.isArray(obj1[key])) {
      const isEqualArrays = isEquil(obj[key], obj1[key]);

      if (isEqualArrays) {
        acc = {
          ...acc,
          [key]: obj[key],
        };
      }
    } else if (typeof obj[key] === "object" && typeof obj1[key] === "object") {
      const hasIntersection = isDeepEquil(obj[key], obj1[key]);

      if (Object.keys(hasIntersection).length !== 0) {
        acc = {
          ...acc,
          [key]: hasIntersection,
        };
      }
    }
    return acc;
  }, {});
};

console.log(isDeepEquil(obj3, obj4));
