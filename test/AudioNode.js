"use strict";

const assert = require("assert");
const AudioNode = require("../src/AudioNode");

describe("AnalyserNode", () => {
  describe("constructor()", () => {
    it("create an AudioNode", () => {
      let node = new AudioNode();

      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 0);
      assert(node.numberOfOutputs === 0);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "max");
      assert(node.channelInterpretation === "speakers");
    });
  });
  describe("connect()", () => {
    it("return destination if given AudioNode", () => {
      let node = new AudioNode();
      let destination = new AudioNode();
      let retVal = node.connect(destination);

      assert(retVal === destination);
    });
    it("return void if given not AudioNode", () => {
      let node = new AudioNode();
      let destination = {};
      let retVal = node.connect(destination);

      assert(typeof retVal === "undefined");
    });
  });
  describe("disconnect()", () => {
    it("works", () => {
      let node = new AudioNode();

      assert.doesNotThrow(() => {
        node.disconnect();
      });
    });
  });
  describe("addEventListener()", () => {
    it("works", () => {
      let node = new AudioNode();

      assert.doesNotThrow(() => {
        node.addEventListener();
      });
    });
  });
  describe("removeEventListener()", () => {
    it("works", () => {
      let node = new AudioNode();

      assert.doesNotThrow(() => {
        node.removeEventListener();
      });
    });
  });
  describe("dispatchEvent()", () => {
    it("works", () => {
      let node = new AudioNode();

      assert.doesNotThrow(() => {
        node.dispatchEvent();
      });
    });
  });
});
