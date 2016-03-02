"use strict";

const assert = require("assert");
const MediaElementAudioSourceNode = require("../src/MediaElementAudioSourceNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("MediaElementAudioSourceNode", () => {
  describe("constructor()", () => {
    it("create a MediaElementAudioSourceNode", () => {
      let node = new MediaElementAudioSourceNode();

      assert(node instanceof MediaElementAudioSourceNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 0);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
    });
  });
});
