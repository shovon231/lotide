const assertEqual = require("./assertEqual");
// FUNCTION IMPLEMENTATION
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

module.exports = findKey;
