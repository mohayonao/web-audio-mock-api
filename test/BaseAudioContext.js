"use strict";

const assert = require("assert");
const sinon = require("sinon");
const BaseAudioContext = require("../src/BaseAudioContext");
const AudioDestinationNode = require("../src/AudioDestinationNode");
const AudioListener = require("../src/AudioListener");
const AudioBuffer = require("../src/AudioBuffer");
const AudioBufferSourceNode = require("../src/AudioBufferSourceNode");
const AudioWorker = require("../src/AudioWorker");
const ScriptProcessorNode = require("../src/ScriptProcessorNode");
const AnalyserNode = require("../src/AnalyserNode");
const GainNode = require("../src/GainNode");
const DelayNode = require("../src/DelayNode");
const BiquadFilterNode = require("../src/BiquadFilterNode");
const IIRFilterNode = require("../src/IIRFilterNode");
const WaveShaperNode = require("../src/WaveShaperNode");
const PannerNode = require("../src/PannerNode");
const SpatialPannerNode = require("../src/SpatialPannerNode");
const StereoPannerNode = require("../src/StereoPannerNode");
const ConvolverNode = require("../src/ConvolverNode");
const ChannelSplitterNode = require("../src/ChannelSplitterNode");
const ChannelMergerNode = require("../src/ChannelMergerNode");
const DynamicsCompressorNode = require("../src/DynamicsCompressorNode");
const OscillatorNode = require("../src/OscillatorNode");
const PeriodicWave = require("../src/PeriodicWave");

describe("BaseAudioContext", () => {
  describe("constructor()", () => {
    it("create a BaseAudioContext", () => {
      let context = new BaseAudioContext();

      assert(context instanceof BaseAudioContext);
      assert(context.destination instanceof AudioDestinationNode);
      assert(context.sampleRate === 44100);
      assert(context.currentTime === 0);
      assert(context.listener instanceof AudioListener);
      assert(context.state === "running");
      assert(context.onstatechange === null);
    });
  });
  describe("suspend()", () => {
    it("resolve with void", () => {
      let context = new BaseAudioContext();

      return context.suspend().then(function(result) {
        assert(typeof result === "undefined");
      });
    });
  });
  describe("resume()", () => {
    it("resolve with void", () => {
      let context = new BaseAudioContext();

      return context.resume().then(function(result) {
        assert(typeof result === "undefined");
      });
    });
  });
  describe("close()", () => {
    it("resolve with void", () => {
      let context = new BaseAudioContext();

      return context.close().then(function(result) {
        assert(typeof result === "undefined");
      });
    });
  });
  describe("createBuffer(numberOfChannels, length, sampleRate)", () => {
    it("create an AudioBuffer", () => {
      let context = new BaseAudioContext();
      let retVal = context.createBuffer(2, 1024, 44100);

      assert(retVal instanceof AudioBuffer);
      assert(retVal.numberOfChannels === 2);
      assert(retVal.length === 1024);
      assert(retVal.sampleRate === 44100);
    });
  });
  describe("decodeAudioData(audioData, successCallback)", () => {
    it("resolve with an AudioBuffer", () => {
      let context = new BaseAudioContext();

      return context.decodeAudioData().then((result) => {
        assert(result instanceof AudioBuffer);
      });
    });
    it("call successCallback with an AudioBuffer if given", (done) => {
      let context = new BaseAudioContext();
      let successCallback = sinon.spy((result) => {
        assert(result instanceof AudioBuffer);
        done();
      });

      context.decodeAudioData(null, successCallback);
    });
  });
  describe("createBufferSource()", () => {
    it("create an AudioBufferSourceNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createBufferSource();

      assert(retVal instanceof AudioBufferSourceNode);
      assert(retVal.context === context);
    });
  });
  describe("createAudioWorker()", () => {
    it("resolve with an AudioWorker", () => {
      let context = new BaseAudioContext();

      return context.createAudioWorker().then((result) => {
        assert(result instanceof AudioWorker);
      });
    });
  });
  describe("createScriptProcessor()", () => {
    it("create a ScriptProcessorNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createScriptProcessor(1024, 1, 1);

      assert(retVal instanceof ScriptProcessorNode);
      assert(retVal.context === context);
      assert(retVal.bufferSize === 1024);
      assert(retVal.channelCount === 1);
    });
  });
  describe("createAnalyser()", () => {
    it("create an AnalyserNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createAnalyser();

      assert(retVal instanceof AnalyserNode);
      assert(retVal.context === context);
    });
  });
  describe("createGain()", () => {
    it("create an GainNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createGain();

      assert(retVal instanceof GainNode);
      assert(retVal.context === context);
    });
  });
  describe("createDelay()", () => {
    it("create an DelayNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createDelay();

      assert(retVal instanceof DelayNode);
      assert(retVal.context === context);
    });
  });
  describe("createBiquadFilter()", () => {
    it("create an BiquadFilterNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createBiquadFilter();

      assert(retVal instanceof BiquadFilterNode);
      assert(retVal.context === context);
    });
  });
  describe("createIIRFilter()", () => {
    it("create an IIRFilterNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createIIRFilter();

      assert(retVal instanceof IIRFilterNode);
      assert(retVal.context === context);
    });
  });
  describe("createWaveShaper()", () => {
    it("create an WaveShaperNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createWaveShaper();

      assert(retVal instanceof WaveShaperNode);
      assert(retVal.context === context);
    });
  });
  describe("createPanner()", () => {
    it("create an PannerNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createPanner();

      assert(retVal instanceof PannerNode);
      assert(retVal.context === context);
    });
  });
  describe("createSpatialPanner()", () => {
    it("create an SpatialPannerNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createSpatialPanner();

      assert(retVal instanceof SpatialPannerNode);
      assert(retVal.context === context);
    });
  });
  describe("createStereoPanner()", () => {
    it("create an StereoPannerNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createStereoPanner();

      assert(retVal instanceof StereoPannerNode);
      assert(retVal.context === context);
    });
  });
  describe("createConvolver()", () => {
    it("create an ConvolverNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createConvolver();

      assert(retVal instanceof ConvolverNode);
      assert(retVal.context === context);
    });
  });
  describe("createChannelSplitter()", () => {
    it("create an ChannelSplitterNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createChannelSplitter();

      assert(retVal instanceof ChannelSplitterNode);
      assert(retVal.context === context);
      assert(retVal.numberOfOutputs === 6);
    });
  });
  describe("createChannelMerger()", () => {
    it("create an ChannelMergerNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createChannelMerger();

      assert(retVal instanceof ChannelMergerNode);
      assert(retVal.context === context);
      assert(retVal.numberOfInputs === 6);
    });
  });
  describe("createDynamicsCompressor()", () => {
    it("create an DynamicsCompressorNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createDynamicsCompressor();

      assert(retVal instanceof DynamicsCompressorNode);
      assert(retVal.context === context);
    });
  });
  describe("createOscillator()", () => {
    it("create an OscillatorNode", () => {
      let context = new BaseAudioContext();
      let retVal = context.createOscillator();

      assert(retVal instanceof OscillatorNode);
      assert(retVal.context === context);
    });
  });
  describe("createPeriodicWave()", () => {
    it("create an PeriodicWave", () => {
      let context = new BaseAudioContext();
      let retVal = context.createPeriodicWave();

      assert(retVal instanceof PeriodicWave);
    });
  });
  describe("addEventListener()", () => {
    it("works", () => {
      let context = new BaseAudioContext();

      assert.doesNotThrow(() => {
        context.addEventListener();
      });
    });
  });
  describe("removeEventListener()", () => {
    it("works", () => {
      let context = new BaseAudioContext();

      assert.doesNotThrow(() => {
        context.removeEventListener();
      });
    });
  });
  describe("dispatchEvent()", () => {
    it("works", () => {
      let context = new BaseAudioContext();

      assert.doesNotThrow(() => {
        context.dispatchEvent();
      });
    });
  });
});
