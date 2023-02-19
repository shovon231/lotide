// FUNCTION IMPLEMENTATION
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

const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length - 1; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (arr1[i].length !== arr2[i].length) {
          return false;
        }
        eqArrays(arr1[i], arr2[i]);
      } else if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
        return false;
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
