const assertArraysEqual = require("./assertArraysEqual");
const flatten = function (arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j <= arr[i].length - 1; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
module.exports = flatten;
