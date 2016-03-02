"use strict";

const assert = require("assert");
const ChannelMergerNode = require("../src/ChannelMergerNode");
const AudioNode = require("../src/AudioNode");

describe("ChannelMergerNode", () => {
  describe("constructor()", () => {
    it("create a BiquadFilterNode", () => {
      let node = new ChannelMergerNode(null, 2);

      assert(node instanceof ChannelMergerNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 2);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 1);
      assert(node.channelCountMode === "explicit");
      assert(node.channelInterpretation === "speakers");
    });
  });
});
