"use strict";

const AudioNode = require("./AudioNode");

class PannerNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers"
    });
    this.panningModel = "equalpower";
    this.distanceModel = "inverse";
    this.refDistance = 1;
    this.maxDistance = 10000;
    this.rolloffFactor = 1;
    this.coneInnerAngle = 360;
    this.coneOuterAngle = 360;
    this.coneOuterGain = 0;
  }

  setPosition() {}

  setOrientation() {}

  setVelocity() {}
}

module.exports = PannerNode;
