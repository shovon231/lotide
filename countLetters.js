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

const countLetters = function (str) {
  let result = {};
  str = str.replace(/\s+/g, "");
  for (let letter of str) {
    console.log(letter);
    console.log((result[letter] = 5));
    // if (result[letter]) {
    //   result[letter] += 1;
    // } else {
    //   result[letter] = 1;
    // }
  }
  //console.log(result);
  return result;
};

console.log(countLetters("lighthouse in the house"));
