"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class GainNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    });
    this.gain = new AudioParam(1);
  }
}

module.exports = GainNode;
