"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class AudioWorkerNode extends AudioNode {
  constructor(context, numberOfInputs, numberOfOutputs) {
    super(context, {
      numberOfInputs: numberOfInputs,
      numberOfOutputs: numberOfOutputs,
      channelCount: numberOfInputs,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    });
    this.onmessage = null;
  }

  postMessage() {}
}

module.exports = AudioWorkerNode;
