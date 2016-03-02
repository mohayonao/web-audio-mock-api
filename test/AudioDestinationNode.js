"use strict";

const assert = require("assert");
const AudioDestinationNode = require("../src/AudioDestinationNode");
const AudioNode = require("../src/AudioNode");

describe("AudioDestinationNode", () => {
  describe("constructor()", () => {
    it("create an AudioDestinationNode", () => {
      let node = new AudioDestinationNode();

      assert(node instanceof AudioDestinationNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 0);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "explicit");
      assert(node.channelInterpretation === "speakers");
      assert(node.maxChannelCount === 2);
    });
  });
});
