"use strict";

const assert = require("assert");
const IIRFilterNode = require("../src/IIRFilterNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("IIRFilterNode", () => {
  describe("constructor()", () => {
    it("create a IIRFilterNode", () => {
      let node = new IIRFilterNode();

      assert(node instanceof IIRFilterNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
    });
  });
  describe("getFrequencyResponse()", () => {
    it("works", () => {
      let node = new IIRFilterNode();

      assert.doesNotThrow(() => {
        node.getFrequencyResponse();
      });
    });
  });
});
