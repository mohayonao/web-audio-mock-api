"use strict";

const assert = require("assert");
const StereoPannerNode = require("../src/StereoPannerNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("StereoPannerNode", () => {
  describe("constructor()", () => {
    it("create a SpatialPannerNode", () => {
      let node = new StereoPannerNode();

      assert(node instanceof StereoPannerNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "clamped-max");
      assert(node.channelInterpretation === "speakers");
      assert(node.pan instanceof AudioParam);
    });
  });
});
