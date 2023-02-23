const assertArraysEqual = require("./assertArraysEqual");
const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["ground", "control", "to", "major", "tom1"];

const words2 = ["ground", "control", "to", "major", "tom"];
const words3 = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
