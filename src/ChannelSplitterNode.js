"use strict";

const AudioNode = require("./AudioNode");

class ChannelSplitterNode extends AudioNode {
  constructor(context, numberOfOutputs) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: numberOfOutputs,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    });
  }
}

module.exports = ChannelSplitterNode;
