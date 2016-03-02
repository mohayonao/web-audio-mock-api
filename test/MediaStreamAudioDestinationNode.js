"use strict";

const assert = require("assert");
const MediaStreamAudioDestinationNode = require("../src/MediaStreamAudioDestinationNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("MediaStreamAudioDestinationNode", () => {
  describe("constructor()", () => {
    it("create a MediaStreamAudioDestinationNode", () => {
      let node = new MediaStreamAudioDestinationNode();

      assert(node instanceof MediaStreamAudioDestinationNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 0);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "explicit");
      assert(node.channelInterpretation === "speakers");
      assert(node.stream === null);
    });
  });
});
