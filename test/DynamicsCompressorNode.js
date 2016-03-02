"use strict";

const assert = require("assert");
const DynamicsCompressorNode = require("../src/DynamicsCompressorNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("DynamicsCompressorNode", () => {
  describe("constructor()", () => {
    it("create a DynamicsCompressorNode", () => {
      let node = new DynamicsCompressorNode();

      assert(node instanceof DynamicsCompressorNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "explicit");
      assert(node.channelInterpretation === "speakers");
      assert(node.threshold instanceof AudioParam);
      assert(node.knee instanceof AudioParam);
      assert(node.ratio instanceof AudioParam);
      assert(node.reduction === 0);
      assert(node.attack instanceof AudioParam);
      assert(node.release instanceof AudioParam);
    });
  });
});
