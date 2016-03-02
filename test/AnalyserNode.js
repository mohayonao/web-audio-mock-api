"use strict";

const assert = require("assert");
const AnalyserNode = require("../src/AnalyserNode");
const AudioNode = require("../src/AudioNode");

describe("AnalyserNode", () => {
  describe("constructor()", () => {
    it("create an AnalyserNode", () => {
      let node = new AnalyserNode();

      assert(node instanceof AnalyserNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
      assert(node.fftSize === 2048);
      assert(node.frequencyBinCount === 1024);
      assert(node.minDecibels === -100);
      assert(node.maxDecibels === -30);
      assert(node.smoothingTimeConstant === 0.8);
    });
  });
  describe("getFloatFrequencyData()", () => {
    it("works", () => {
      let node = new AnalyserNode();

      assert.doesNotThrow(() => {
        node.getFloatFrequencyData();
      });
    });
  });
  describe("getByteFrequencyData()", () => {
    it("works", () => {
      let node = new AnalyserNode();

      assert.doesNotThrow(() => {
        node.getByteFrequencyData();
      });
    });
  });
  describe("getFloatTimeDomainData()", () => {
    it("works", () => {
      let node = new AnalyserNode();

      assert.doesNotThrow(() => {
        node.getFloatTimeDomainData();
      });
    });
  });
  describe("getByteTimeDomainData()", () => {
    it("works", () => {
      let node = new AnalyserNode();

      assert.doesNotThrow(() => {
        node.getByteTimeDomainData();
      });
    });
  });
});
