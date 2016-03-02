"use strict";

const AudioNode = require("./AudioNode");
const AudioParam = require("./AudioParam");

class OscillatorNode extends AudioNode {
  constructor(context) {
    super(context, {
      numberOfInputs: 0,
      numberOfOutputs: 1
    });
    this.type = "sine";
    this.frequency = new AudioParam(440);
    this.detune = new AudioParam(0);
    this.onended = null;
  }

  start() {}

  stop() {}

  setPeriodicWave() {
    this.type = "custom";
  }
}

module.exports = OscillatorNode;
