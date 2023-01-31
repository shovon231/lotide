// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
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

const tail = function(arr) {
  return arr.splice(1);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const num = tail([1, 2, 3]);
assertEqual(num.length, 2); // ensure we get back two elements
assertEqual(num[0], 2); // ensure first element is "Lighthouse"
assertEqual(num[1], 5); // ensure second element is "Labs"
// .../ Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
