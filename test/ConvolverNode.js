"use strict";

const assert = require("assert");
const ConvolverNode = require("../src/ConvolverNode");
const AudioNode = require("../src/AudioNode");

describe("ConvolverNode", () => {
  describe("constructor()", () => {
    it("create a ConvolverNode", () => {
      let node = new ConvolverNode();

      assert(node instanceof ConvolverNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "clamped-max");
      assert(node.channelInterpretation === "speakers");
      assert(node.buffer === null);
      assert(node.normalize === true);
    });
  });
});
