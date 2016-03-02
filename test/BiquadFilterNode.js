"use strict";

const assert = require("assert");
const BiquadFilterNode = require("../src/BiquadFilterNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("BiquadFilterNode", () => {
  describe("constructor()", () => {
    it("create a BiquadFilterNode", () => {
      let node = new BiquadFilterNode();

      assert(node instanceof BiquadFilterNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
      assert(node.type === "lowpass");
      assert(node.frequency instanceof AudioParam);
      assert(node.detune instanceof AudioParam);
      assert(node.Q instanceof AudioParam);
      assert(node.gain instanceof AudioParam);
    });
  });
  describe("getFrequencyResponse()", () => {
    it("works", () => {
      let node = new BiquadFilterNode();

      assert.doesNotThrow(() => {
        node.getFrequencyResponse();
      });
    });
  });
});
