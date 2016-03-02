"use strict";

const AudioNode = require("./AudioNode");

class AudioDestinationNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 0,
      channelCount: 2,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    });
    this.maxChannelCount = 2;
  }
}

module.exports = AudioDestinationNode;
