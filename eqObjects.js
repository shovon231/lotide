// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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
//eqArrays
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
//eqObject
const eqObjects = function (object1, object2) {
  let firstObj = Object.keys(object1);
  let secondObj = Object.keys(object2);
  if (firstObj.length !== secondObj.length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      //console.log(object1[key], typeof object1[key]);
      //if (typeof object1[key]) {
      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] === object2[key]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
