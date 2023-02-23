// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

const countOnly = function (allIteams, itemsToCount) {
  const results = {};
  for (const item of allIteams) {
    //console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly