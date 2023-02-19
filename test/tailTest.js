const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [Hello, Lighthouse, Labs] for [Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns [1,2,3] for [2]", () => {
    assert.deepEqual(tail([1, 2, 3]).length, 2);
  });
  it("returns [Yo Yo, Lighthouse, Labs] for [3]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
});
