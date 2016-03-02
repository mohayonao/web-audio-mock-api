"use strict";

class AudioParam {
  constructor(defaultValue) {
    this.value = defaultValue;
    this.defaultValue = defaultValue;
  }

  setValueAtTime() {
    return this;
  }

  linearRampToValueAtTime() {
    return this;
  }

  exponentialRampToValueAtTime() {
    return this;
  }

  setTargetAtTime() {
    return this;
  }

  setValueCurveAtTime() {
    return this;
  }

  cancelScheduledValues() {
    return this;
  }
}

module.exports = AudioParam;
