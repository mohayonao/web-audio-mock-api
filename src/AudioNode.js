"use strict";

class AudioNode {
  constructor(context, spec) {
    spec = spec || {};

    this.context = context;
    this.numberOfInputs = spec.numberOfInputs || 0;
    this.numberOfOutputs = spec.numberOfOutputs || 0;
    this.channelCount = spec.channelCount || 2;
    this.channelCountMode = spec.channelCountMode || "max";
    this.channelInterpretation = spec.channelInterpretation || "speakers";
  }

  connect(destination) {
    if (destination instanceof AudioNode) {
      return destination;
    }
  }

  disconnect() {}

  addEventListener() {}

  removeEventListener() {}

  dispatchEvent() {}
}

module.exports = AudioNode;
