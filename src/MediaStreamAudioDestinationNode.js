"use strict";

const AudioNode = require("./AudioNode");

class MediaStreamAudioDestinationNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 0,
      channelCount: 2,
      channelCountMode: "explicit",
      channelInterpolation: "speakers"
    });
    this.stream = null;
  }
}

module.exports = MediaStreamAudioDestinationNode;
