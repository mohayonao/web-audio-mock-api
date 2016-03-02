"use strict";

const AudioNode = require("./AudioNode");

class ChannelMergerNode extends AudioNode {
  constructor(context, numberOfInputs) {
    super(context, {
      numberOfInputs: numberOfInputs,
      numberOfOutputs: 1,
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    });
  }
}

module.exports = ChannelMergerNode;
