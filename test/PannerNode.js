"use strict";

const assert = require("assert");
const PannerNode = require("../src/PannerNode");
const AudioNode = require("../src/AudioNode");

describe("PannerNode", () => {
  describe("constructor()", () => {
    it("create an PannerNode", () => {
      let node = new PannerNode();

      assert(node instanceof PannerNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "clamped-max");
      assert(node.channelInterpretation === "speakers");
      assert(node.refDistance === 1);
      assert(node.maxDistance === 10000);
      assert(node.rolloffFactor === 1);
      assert(node.coneInnerAngle === 360);
      assert(node.coneOuterAngle === 360);
      assert(node.coneOuterGain === 0);
    });
  });
  describe("setPosition()", () => {
    it("works", () => {
      let node = new PannerNode();

      assert.doesNotThrow(() => {
        node.setPosition();
      });
    });
  });
  describe("setOrientation()", () => {
    it("works", () => {
      let node = new PannerNode();

      assert.doesNotThrow(() => {
        node.setOrientation();
      });
    });
  });
  describe("setVelocity()", () => {
    it("works", () => {
      let node = new PannerNode();

      assert.doesNotThrow(() => {
        node.setVelocity();
      });
    });
  });
});
