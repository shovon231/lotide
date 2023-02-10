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

const assertArraysEqual = function (arr1, arr2) {
  console.log(
    eqArrays(arr1, arr2)
      ? `${String.fromCodePoint(128512)} Assertion Passed`
      : `${String.fromCodePoint(0x1f621)}Assertion Failed`
  );
};
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

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(
  map(words, (word) => word[0]),
  map(words1, (word) => word[0])
);
assertArraysEqual(
  map(words2, (word) => word[0]),
  map(words3, (word) => word[1])
);
