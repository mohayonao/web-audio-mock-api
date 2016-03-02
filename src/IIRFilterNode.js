"use strict";

const AudioNode = require("./AudioNode");

class IIRFIlterNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    });
  }

  getFrequencyResponse() {}
}

module.exports = IIRFIlterNode;
