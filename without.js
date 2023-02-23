const assertArraysEqual = require("./assertArraysEqual");

const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i <= source.length - 1; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    }
    //}
  }
  return newArr;
};
module.exports = without;
