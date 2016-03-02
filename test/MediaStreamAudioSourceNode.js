"use strict";

const assert = require("assert");
const MediaStreamAudioSourceNode = require("../src/MediaStreamAudioSourceNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("MediaStreamAudioSourceNode", () => {
  describe("constructor()", () => {
    it("create a MediaStreamAudioSourceNode", () => {
      let node = new MediaStreamAudioSourceNode();

      assert(node instanceof MediaStreamAudioSourceNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 0);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
    });
  });
});
