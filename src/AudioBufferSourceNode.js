"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class AudioBufferSourceNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 0,
      numberOfOutputs: 1
    });
    this.buffer = null;
    this.playbackRate = new AudioParam(1);
    this.detune = new AudioParam(0);
    this.loop = false;
    this.loopStart = 0;
    this.loopEnd = 0;
    this.onended = null;
  }

  start() {}

  stop() {}
}

module.exports = AudioBufferSourceNode;
