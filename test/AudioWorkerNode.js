"use strict";

const assert = require("assert");
const AudioWorkerNode = require("../src/AudioWorkerNode");
const AudioNode = require("../src/AudioNode");

describe("AudioWorkerNode", () => {
  describe("constructor()", () => {
    it("create an AudioWorkerNode", () => {
      let node = new AudioWorkerNode(null, 1, 2);

      assert(node instanceof AudioWorkerNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 2);
      assert(node.channelCount === 1);
      assert(node.channelCountMode === "explicit");
      assert(node.channelInterpretation === "speakers");
      assert(node.onmessage === null);
    });
  });
  describe("postMessage()", () => {
    it("works", () => {
      let node = new AudioWorkerNode(null, 1, 2);

      assert.doesNotThrow(() => {
        node.postMessage();
      });
    });
  });
});
