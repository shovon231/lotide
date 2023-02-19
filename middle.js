const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  //...
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      result.push(array[Math.floor((array.length - 1) / 2)]);
      result.push(array[Math.floor(array.length / 2)]);
      return result;
    } else {
      result.push(array[Math.floor(array.length / 2)]);
      return result;
    }
  } else {
    return result;
  }
};

module.exports = middle;
