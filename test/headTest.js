const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("returns 'Lighthouse Labs' for ['Bootcamp']", () => {
    assert.strictEqual(head(["Lighthouse Labs"]), "Bootcamp");
  });
  it("returns '1' for ['1']", () => {
    assert.strictEqual(head("1"), "1");
  });
  it("returns '[5, 6, 7]' for ['5']", () => {
    assert.strictEqual(head([5, 6, 7]), "5");
  });
  it("returns '[Hello, Lighthouse, Labs]' for ['Hello']", () => {
    assert.strictEqual(head([Hello, Lighthouse, Labs]), "Hello");
  });
  it("returns '[]' for ['5']", () => {
    assert.strictEqual(head([]), "5");
  });
});
