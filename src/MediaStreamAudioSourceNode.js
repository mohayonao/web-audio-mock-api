"use strict";

const AudioNode = require("./AudioNode");

class MediaStreamAudioSourceNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 0,
      numberOfOutputs: 1
    });
  }
}

module.exports = MediaStreamAudioSourceNode;
