"use strict";

const assert = require("assert");
const DelayNode = require("../src/DelayNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("DelayNode", () => {
  describe("constructor()", () => {
    it("create a DelayNode", () => {
      let node = new DelayNode();

      assert(node instanceof DelayNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
      assert(node.delayTime instanceof AudioParam);
    });
  });
});
