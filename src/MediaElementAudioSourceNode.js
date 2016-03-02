"use strict";

const AudioNode = require("./AudioNode");

class MediaElementAudioSourceNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 0,
      numberOfOutputs: 1
    });
  }
}

module.exports = MediaElementAudioSourceNode;
