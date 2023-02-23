const eqArrays = require("./eqArrays");
const letterPositions = function (sentence) {
  const results = {};
  let str = sentence.replace(/\s+/g, "");
  // logic to update results here
  for (let index in str) {
    const letter = str[index];
    if (results[letter]) {
      //console.log([index]);
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
  }
  return results;
};

//console.log(letterPositions("hheello"));
module.exports = letterPositions;
