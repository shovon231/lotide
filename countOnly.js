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

const countOnly = function (allIteams, itemsToCount) {
  const results = {};
  for (const item of allIteams) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    console.log(results);
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
