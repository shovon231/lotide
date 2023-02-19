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

const tail = function (arr) {
  return arr.splice(1);
};

module.exports = tail;
