"use strict";

const assert = require("assert");
const SpatialListener = require("../src/SpatialListener");
const AudioParam = require("../src/AudioParam");

describe("SpatialListener", () => {
  describe("constructor()", () => {
    it("create a SpatialListener", () => {
      let node = new SpatialListener();

      assert(node instanceof SpatialListener);
      assert(node.positionX instanceof AudioParam);
      assert(node.positionY instanceof AudioParam);
      assert(node.positionZ instanceof AudioParam);
      assert(node.forwardX instanceof AudioParam);
      assert(node.forwardY instanceof AudioParam);
      assert(node.forwardZ instanceof AudioParam);
      assert(node.upX instanceof AudioParam);
      assert(node.upY instanceof AudioParam);
      assert(node.upZ instanceof AudioParam);
    });
  });
});
