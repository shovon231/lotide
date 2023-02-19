// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length - 1; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (arr1[i].length !== arr2[i].length) {
          return false;
        }
        eqArrays(arr1[i], arr2[i]);
      } /*else if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
        return false;
      } */ else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

module.exports = eqArrays;
