"use strict";

const assert = require("assert");
const PeriodicWave = require("../src/PeriodicWave");

describe("PeriodicWave", () => {
  describe("constructor()", () => {
    it("create a PeriodicWave", () => {
      let wave = new PeriodicWave();

      assert(wave instanceof PeriodicWave);
      assert(wave.disableNormalization === false);
    });
  });
});
