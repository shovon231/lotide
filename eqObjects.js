const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let firstObjKey = Object.keys(object1);
  let secondObjkey = Object.keys(object2);
  let firstObjValue = Object.values(object1);
  let secondObjValue = Object.values(object2);
  if (firstObjKey.length !== secondObjkey.length) {
    return false;
  } else {
    for (let key in firstObjValue) {
      let typeofObj1 = typeof firstObjValue[key];
      let typeofObj2 = typeof secondObjValue[key];
      if ((typeofObj1 = "object" && typeofObj2 == "object")) {
        if (
          Array.isArray(firstObjValue[key]) &&
          Array.isArray(secondObjValue[key])
        ) {
          return eqArrays(firstObjValue[key], secondObjValue[key]);
        } else {
          return eqObjects(firstObjValue[key], secondObjValue[key]);
        }
      } else {
        if (firstObjValue[key].length !== secondObjValue[key].length) {
          return false;
        } else {
          if (firstObjKey[key] !== secondObjkey[key]) {
            return false;
          }
          if (firstObjValue[key] !== secondObjValue[key]) {
            return false;
          }
        }
      }
    }
    return true;
  }
};

module.exports = eqObjects;

