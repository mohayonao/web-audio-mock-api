"use strict";

const assert = require("assert");
const WaveShaperNode = require("../src/WaveShaperNode");
const AudioNode = require("../src/AudioNode");

describe("WaveShaperNode", () => {
  describe("constructor()", () => {
    it("create a WaveShaperNode", () => {
      let node = new WaveShaperNode();

      assert(node instanceof WaveShaperNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
      assert(node.curve === null);
      assert(node.oversample === "4x");
    });
  });
});
