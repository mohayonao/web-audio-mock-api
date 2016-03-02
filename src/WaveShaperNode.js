"use strict";

const AudioNode = require("./AudioNode");

class WaveShaperNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    });
    this.curve = null;
    this.oversample = "4x";
  }
}

module.exports = WaveShaperNode;
