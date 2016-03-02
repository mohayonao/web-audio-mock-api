"use strict";

const assert = require("assert");
const ChannelSplitterNode = require("../src/ChannelSplitterNode");
const AudioNode = require("../src/AudioNode");

describe("ChannelSplitterNode", () => {
  describe("constructor()", () => {
    it("create a ChannelSplitterNode", () => {
      let node = new ChannelSplitterNode(null, 2);

      assert(node instanceof ChannelSplitterNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 2);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
    });
  });
});
