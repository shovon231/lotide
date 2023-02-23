const map = require("../map");
const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(
  map(words, (word) => word[0]),
  map(words1, (word) => word[0])
);
assertArraysEqual(
  map(words2, (word) => word[0]),
  map(words3, (word) => word[1])
);
