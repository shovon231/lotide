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
const takeUntil = function (array, callback) {
  let result = [];
  for (let element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
