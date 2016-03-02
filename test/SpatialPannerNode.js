"use strict";

const assert = require("assert");
const SpatialPannerNode = require("../src/SpatialPannerNode");
const AudioNode = require("../src/AudioNode");
const AudioParam = require("../src/AudioParam");

describe("SpatialPannerNode", () => {
  describe("constructor()", () => {
    it("create a SpatialPannerNode", () => {
      let node = new SpatialPannerNode();

      assert(node instanceof SpatialPannerNode);
      assert(node instanceof AudioNode);
      assert(node.numberOfInputs === 1);
      assert(node.numberOfOutputs === 1);
      assert(node.channelCount === 2);
      assert(node.channelCountMode === "clamped-max");
      assert(node.channelInterpretation === "speakers");
      assert(node.panningModel === "equalpower");
      assert(node.positionX instanceof AudioParam);
      assert(node.positionY instanceof AudioParam);
      assert(node.positionZ instanceof AudioParam);
      assert(node.orientationX instanceof AudioParam);
      assert(node.orientationY instanceof AudioParam);
      assert(node.orientationZ instanceof AudioParam);
      assert(node.distanceModel === "inverse");
      assert(node.refDistance === 1);
      assert(node.maxDistance === 10000);
      assert(node.rolloffFactor === 1);
      assert(node.coneInnerAngle === 360);
      assert(node.coneOuterAngle === 360);
      assert(node.coneOuterGain === 0);
    });
  });
});
