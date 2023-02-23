const assertEqual = require("./assertEqual");

const countLetters = function (str) {
  let result = {};
  str = str.replace(/\s+/g, "");
  for (let letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  //console.log(result);
  return result;
};

module.exports = countLetters;
