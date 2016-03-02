"use strict";

const AudioWorkerNode = require("./AudioWorkerNode");
const AudioParam = require("./AudioParam");

class AudioWorker {
  constructor(context) {
    this._context = context;

    this.parameters = [];
    this.onmessage = null;
    this.onloaded = null;
  }

  terminate() {}

  postMessage() {}

  createNode(numberOfInputs, numberOfOutputs) {
    return new AudioWorkerNode(this._context, numberOfInputs, numberOfOutputs);
  }

  addParameter(name, defaultValue) {
    return new AudioParam(defaultValue);
  }

  removeParameter() {}
}

module.exports = AudioWorker;
