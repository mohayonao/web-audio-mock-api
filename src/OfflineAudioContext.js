"use strict";

const BaseAudioContext = require("./BaseAudioContext");
const AudioBuffer = require("./AudioBuffer");

class OfflineAudioContext extends BaseAudioContext {
  constructor(numbferOfChannels, length, sampleRate) {
    super(sampleRate);

    this.state = "suspended";
    this.oncomplete = null;

    this._numbferOfChannels = numbferOfChannels;
    this._length = length;
  }

  startRendering() {
    return Promise.resolve().then(() => {
      let audioBuffer = new AudioBuffer(this._numbferOfChannels, this._length, this.sampleRate);

      if (this.oncomplete !== null) {
        this.oncomplete(audioBuffer);
      }

      return audioBuffer;
    });
  }
}

module.exports = OfflineAudioContext;
