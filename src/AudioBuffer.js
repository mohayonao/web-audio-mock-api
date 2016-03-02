"use strict";

class AudioBuffer {
  constructor(numberOfChannels, length, sampleRate) {
    this.sampleRate = sampleRate;
    this.length = length;
    this.numberOfChannels = numberOfChannels;
  }

  get duration() {
    return this.length / this.sampleRate;
  }

  getChannelData() {
    return new Float32Array(this.length);
  }

  copyFromChannel() {}

  copyToChannel() {}
}

module.exports = AudioBuffer;
