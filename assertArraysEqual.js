const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arr1, arr2) {
  console.log(
    eqArrays(arr1, arr2)
      ? `${String.fromCodePoint(128512)} Assertion Passed`
      : `${String.fromCodePoint(0x1f621)}Assertion Failed`
  );
};

module.exports = assertArraysEqual;
