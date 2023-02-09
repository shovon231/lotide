const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? `${String.fromCodePoint(
          128512
        )} Assertion Passed: ${actual}===${expected}`
      : `${String.fromCodePoint(
          0x1f621
        )}Assertion Failed : ${actual} !== ${expected}`
  );
};
//eqArrays
const eqArrays = function (arr1, arr2) {
  //console.log(arr1.length, arr2.length);
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length - 1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
//eqObject
const eqObjects = function (object1, object2) {
  let firstObj = Object.keys(object1);
  let secondObj = Object.keys(object2);
  if (firstObj.length !== secondObj.length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      //console.log(object1[key], typeof object1[key]);
      //if (typeof object1[key]) {
      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] === object2[key]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  // Implement me!
  console.log(
    eqObjects(actual, expected)
      ? `${String.fromCodePoint(128512)} Assertion Passed: ${inspect(
          actual
        )} === ${inspect(expected)}`
      : `${String.fromCodePoint(0x1f621)}Assertion Failed: ${inspect(
          actual
        )} !== ${inspect(expected)}`
  );
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium" };
//eqObjects(shirtObject, anotherShirtObject); // => true

assertObjectsEqual(shirtObject, anotherShirtObject);

const myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);