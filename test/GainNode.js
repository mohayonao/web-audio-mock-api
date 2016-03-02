"use strict";

const assert = require("assert");
const GainNode = require("../src/GainNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("GainNode", () => {
  describe("constructor()", () => {
    it("create a GainNode", () => {
      let node = new GainNode();

      assert(node instanceof GainNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
      assert(node.gain instanceof AudioParam);
    });
  });
});
