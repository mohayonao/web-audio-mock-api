"use strict";

const assert = require("assert");
const ScriptProcessorNode = require("../src/ScriptProcessorNode");
const AudioNode = require("../src/AudioNode");

describe("ScriptProcessorNode", () => {
  describe("constructor()", () => {
    it("create an ScriptProcessorNode", () => {
      let node = new ScriptProcessorNode(null, 1024, 2);

      assert(node instanceof ScriptProcessorNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "explicit");
      assert(node.channelInterpretation === "speakers");
      assert(node.onaudioprocess === null);
      assert(node.bufferSize === 1024);
    });
  });
});
