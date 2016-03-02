"use strict";

const AudioNode = require("./AudioNode");

class AnalyserNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    });
    this.fftSize = 2048;
    this.minDecibels = -100;
    this.maxDecibels = -30;
    this.smoothingTimeConstant = 0.8;
  }

  get frequencyBinCount() {
    return this.fftSize / 2;
  }

  getFloatFrequencyData() {}

  getByteFrequencyData() {}

  getFloatTimeDomainData() {}

  getByteTimeDomainData() {}
}

module.exports = AnalyserNode;
