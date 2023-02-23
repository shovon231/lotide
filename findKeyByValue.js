const assertEqual = require("./assertEqual");
const findKeyByValue = function (obj, val) {
  for (let keys in obj) {
    if (obj[keys] === val) {
      return keys;
    }
  }
};
module.exports = findKeyByValue;
