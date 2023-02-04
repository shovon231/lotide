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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
