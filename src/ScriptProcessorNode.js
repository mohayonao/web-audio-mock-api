"use strict";

const AudioNode = require("./AudioNode");

class ScriptProcessorNode extends AudioNode {
  constructor(context, bufferSize, numberOfInputChannels) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: numberOfInputChannels,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    });
    this.onaudioprocess = null;
    this.bufferSize = bufferSize;
  }
}

module.exports = ScriptProcessorNode;
