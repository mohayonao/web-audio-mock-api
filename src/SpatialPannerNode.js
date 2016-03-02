"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class SpatialPannerNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers"
    });
    this.panningModel = "equalpower";
    this.positionX = new AudioParam(0);
    this.positionY = new AudioParam(0);
    this.positionZ = new AudioParam(0);
    this.orientationX = new AudioParam(0);
    this.orientationY = new AudioParam(0);
    this.orientationZ = new AudioParam(0);
    this.distanceModel = "inverse";
    this.refDistance = 1;
    this.maxDistance = 10000;
    this.rolloffFactor = 1;
    this.coneInnerAngle = 360;
    this.coneOuterAngle = 360;
    this.coneOuterGain = 0;
  }
}

module.exports = SpatialPannerNode;
