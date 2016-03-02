"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class DynamicsCompressorNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    });
    this.threshold = new AudioParam(-24);
    this.knee = new AudioParam(30);
    this.ratio = new AudioParam(12);
    this.reduction = 0;
    this.attack = new AudioParam(0.003);
    this.release = new AudioParam(0.250);
  }
}

module.exports = DynamicsCompressorNode;
