"use strict";

const AudioNode = require("./AudioNode");

class ConvolverNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers"
    });
    this.buffer = null;
    this.normalize = true;
  }
}

module.exports = ConvolverNode;
