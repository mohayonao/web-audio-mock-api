"use strict";

const BaseAudioContext = require("./BaseAudioContext");
const MediaElementAudioSourceNode = require("./MediaElementAudioSourceNode");
const MediaStreamAudioSourceNode = require("./MediaStreamAudioSourceNode");
const MediaStreamAudioDestinationNode = require("./MediaStreamAudioDestinationNode");

class AudioContext extends BaseAudioContext {
  createMediaElementSource() {
    return new MediaElementAudioSourceNode(this);
  }

  createMediaStreamSource() {
    return new MediaStreamAudioSourceNode(this);
  }

  createMediaStreamDestination() {
    return new MediaStreamAudioDestinationNode(this);
  }
}

module.exports = AudioContext;
