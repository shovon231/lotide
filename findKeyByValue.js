const findKeyByValue = function (obj, val) {
  for (let keys in obj) {
    if (obj[keys] === val) {
      return keys;
    }
  }
};

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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
