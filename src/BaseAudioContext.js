"use strict";

const AudioDestinationNode = require("./AudioDestinationNode");
const AudioListener = require("./AudioListener");
const AudioBuffer = require("./AudioBuffer");
const AudioBufferSourceNode = require("./AudioBufferSourceNode");
const AudioWorker = require("./AudioWorker");
const ScriptProcessorNode = require("./ScriptProcessorNode");
const AnalyserNode = require("./AnalyserNode");
const GainNode = require("./GainNode");
const DelayNode = require("./DelayNode");
const BiquadFilterNode = require("./BiquadFilterNode");
const IIRFilterNode = require("./IIRFilterNode");
const WaveShaperNode = require("./WaveShaperNode");
const PannerNode = require("./PannerNode");
const SpatialPannerNode = require("./SpatialPannerNode");
const StereoPannerNode = require("./StereoPannerNode");
const ConvolverNode = require("./ConvolverNode");
const ChannelSplitterNode = require("./ChannelSplitterNode");
const ChannelMergerNode = require("./ChannelMergerNode");
const DynamicsCompressorNode = require("./DynamicsCompressorNode");
const OscillatorNode = require("./OscillatorNode");
const PeriodicWave = require("./PeriodicWave");

class BaseAudioContext {
  constructor(sampleRate) {
    this.destination = new AudioDestinationNode(this);
    this.sampleRate = sampleRate || 44100;
    this.currentTime = 0;
    this.listener = new AudioListener();
    this.state = "running";
    this.onstatechange = null;
  }

  suspend() {
    return Promise.resolve();
  }

  resume() {
    return Promise.resolve();
  }

  close() {
    return Promise.resolve();
  }

  createBuffer(numberOfChannels, length, sampleRate) {
    return new AudioBuffer(numberOfChannels, length, sampleRate);
  }

  decodeAudioData(audioData, successCallback) {
    return Promise.resolve().then(() => {
      let buffer = new AudioBuffer(2, 1024, this.sampleRate);

      if (successCallback) {
        successCallback(buffer);
      }

      return buffer;
    });
  }

  createBufferSource() {
    return new AudioBufferSourceNode(this);
  }

  createAudioWorker() {
    return Promise.resolve(new AudioWorker());
  }

  createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels) {
    return new ScriptProcessorNode(this, bufferSize, numberOfInputChannels, numberOfOutputChannels);
  }

  createAnalyser() {
    return new AnalyserNode(this);
  }

  createGain() {
    return new GainNode(this);
  }

  createDelay(maxDelayTime) {
    maxDelayTime = maxDelayTime || 1.0;
    return new DelayNode(this, maxDelayTime);
  }

  createBiquadFilter() {
    return new BiquadFilterNode(this);
  }

  createIIRFilter() {
    return new IIRFilterNode(this);
  }

  createWaveShaper() {
    return new WaveShaperNode(this);
  }

  createPanner() {
    return new PannerNode(this);
  }

  createSpatialPanner() {
    return new SpatialPannerNode(this);
  }

  createStereoPanner() {
    return new StereoPannerNode(this);
  }

  createConvolver() {
    return new ConvolverNode(this);
  }

  createChannelSplitter(numberOfOutputs) {
    numberOfOutputs = numberOfOutputs || 6;
    return new ChannelSplitterNode(this, numberOfOutputs);
  }

  createChannelMerger(numberOfInputs) {
    numberOfInputs = numberOfInputs || 6;
    return new ChannelMergerNode(this, numberOfInputs);
  }

  createDynamicsCompressor() {
    return new DynamicsCompressorNode(this);
  }

  createOscillator() {
    return new OscillatorNode(this);
  }

  createPeriodicWave(real, imag) {
    return new PeriodicWave(real, imag);
  }

  addEventListener() {}

  removeEventListener() {}

  dispatchEvent() {}
}

module.exports = BaseAudioContext;
