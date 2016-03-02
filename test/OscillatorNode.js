"use strict";

const assert = require("assert");
const OscillatorNode = require("../src/OscillatorNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("OscillatorNode", () => {
  describe("constructor()", () => {
    it("create an OscillatorNode", () => {
      let node = new OscillatorNode();

      assert(node instanceof OscillatorNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 0);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
      assert(node.type === "sine");
      assert(node.frequency instanceof AudioParam);
      assert(node.detune instanceof AudioParam);
      assert(node.onended === null);
    });
  });
  describe("start()", () => {
    it("works", () => {
      let node = new OscillatorNode();

      assert.doesNotThrow(() => {
        node.start();
      });
    });
  });
  describe("stop()", () => {
    it("works", () => {
      let node = new OscillatorNode();

      assert.doesNotThrow(() => {
        node.stop();
      });
    });
  });
  describe("setPeriodicWave()", () => {
    it("change type to 'custom'", () => {
      let node = new OscillatorNode();

      node.setPeriodicWave();

      assert(node.type === "custom");
    });
  });
});
