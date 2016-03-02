"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class DelayNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    });
    this.delayTime = new AudioParam(0);
  }
}

module.exports = DelayNode;
