const assertObjectsEqual = require("../assertObjectsEqual");
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium" };
//eqObjects(shirtObject, anotherShirtObject); // => true

assertObjectsEqual(shirtObject, anotherShirtObject);
