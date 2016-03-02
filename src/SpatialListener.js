"use strict";

const AudioParam = require("./AudioParam");

class SpatialListener {
  constructor() {
    this.positionX = new AudioParam(0);
    this.positionY = new AudioParam(0);
    this.positionZ = new AudioParam(0);
    this.forwardX = new AudioParam(0);
    this.forwardY = new AudioParam(0);
    this.forwardZ = new AudioParam(0);
    this.upX = new AudioParam(0);
    this.upY = new AudioParam(0);
    this.upZ = new AudioParam(0);
  }
}

module.exports = SpatialListener;
