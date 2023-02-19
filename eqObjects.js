// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//function assertEqual
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
//function eqArrays
const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i <= arr1.length - 1; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (arr1[i].length !== arr2[i].length) {
          return false;
        }
        eqArrays(arr1[i], arr2[i]);
      } else if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
        return false;
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};
//function eqObject
const eqObjects = function (object1, object2) {
  let firstObjKey = Object.keys(object1);
  let secondObjkey = Object.keys(object2);
  let firstObjValue = Object.values(object1);
  let secondObjValue = Object.values(object2);
  if (firstObjKey.length !== secondObjkey.length) {
    return false;
  } else {
    for (let key in firstObjValue) {
      let typeofObj1 = typeof firstObjValue[key];
      let typeofObj2 = typeof secondObjValue[key];
      if ((typeofObj1 = "object" && typeofObj2 == "object")) {
        if (
          Array.isArray(firstObjValue[key]) &&
          Array.isArray(secondObjValue[key])
        ) {
          return eqArrays(firstObjValue[key], secondObjValue[key]);
        } else {
          return eqObjects(firstObjValue[key], secondObjValue[key]);
        }
      } else {
        if (firstObjValue[key].length !== secondObjValue[key].length) {
          return false;
        } else {
          if (firstObjKey[key] !== secondObjkey[key]) {
            return false;
          }
          if (firstObjValue[key] !== secondObjValue[key]) {
            return false;
          }
        }
      }
    }
    return true;
  }
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
