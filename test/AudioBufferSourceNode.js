"use strict";

const assert = require("assert");
const AudioBufferSourceNode = require("../src/AudioBufferSourceNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("AudioBufferSourceNode", () => {
  describe("constructor()", () => {
    it("create an AudioBufferSourceNode", () => {
      let node = new AudioBufferSourceNode();

      assert(node instanceof AudioBufferSourceNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 0);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
      assert(node.buffer === null);
      assert(node.playbackRate instanceof AudioParam);
      assert(node.detune instanceof AudioParam);
      assert(node.loop === false);
      assert(node.loopStart === 0);
      assert(node.loopEnd === 0);
      assert(node.onended === null);
    });
  });
  describe("start()", () => {
    it("works", () => {
      let node = new AudioBufferSourceNode();

      assert.doesNotThrow(() => {
        node.start();
      });
    });
  });
  describe("stop()", () => {
    it("works", () => {
      let node = new AudioBufferSourceNode();

      assert.doesNotThrow(() => {
        node.stop();
      });
    });
  });
});
