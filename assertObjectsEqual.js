const eqObjects = require("./eqObjects");
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  // Implement me!
  console.log(
    eqObjects(actual, expected)
      ? `${String.fromCodePoint(128512)} Assertion Passed: ${inspect(
          actual
        )} === ${inspect(expected)}`
      : `${String.fromCodePoint(0x1f621)}Assertion Failed: ${inspect(
          actual
        )} !== ${inspect(expected)}`
  );
};

module.exports = assertObjectsEqual;
