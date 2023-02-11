// FUNCTION IMPLEMENTATION
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

const findKey = function (object, callback) {
  let result = "";

  for (const property in object) {
    let x = object[property];
    if (callback(x)) {
      result = property;
      break;
    }
  }
  return result;
};
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
    },
    (x) => x.stars === 2
  ),
  "noma"
); // => "noma"
