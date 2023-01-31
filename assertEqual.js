// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? String.fromCodePoint(128512) +
          "Assertion Passed: " +
          actual +
          "===" +
          expected
      : String.fromCodePoint(0x1f621) +
          "Assertion Failed: " +
          actual +
          "!==" +
          expected
  );
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
