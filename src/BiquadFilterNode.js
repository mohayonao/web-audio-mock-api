"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class BiquadFilterNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    });
    this.type = "lowpass";
    this.frequency = new AudioParam(350);
    this.detune = new AudioParam(0);
    this.Q = new AudioParam(1);
    this.gain = new AudioParam(0);
  }

  getFrequencyResponse() {}
}

module.exports = BiquadFilterNode;
