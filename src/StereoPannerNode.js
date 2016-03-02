"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class StereoPannerNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers"
    });
    this.pan = new AudioParam(0);
  }
}

module.exports = StereoPannerNode;
