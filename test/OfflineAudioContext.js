"use strict";

const assert = require("assert");
const sinon = require("sinon");
const OfflineAudioContext = require("../src/OfflineAudioContext");
const BaseAudioContext = require("../src/BaseAudioContext");
const AudioBuffer = require("../src/AudioBuffer");

describe("OfflineAudioContext", () => {
  describe("constructor(numbferOfChannels, length, sampleRate)", () => {
    it("creates an OfflineAudioContext", () => {
      let context = new OfflineAudioContext(2, 1024, 44100);

      assert(context instanceof OfflineAudioContext);
      assert(context instanceof BaseAudioContext);
    });
  });
  describe("startRendering()", () => {
    it("resolve with an AudioBuffer", () => {
      let context = new OfflineAudioContext(2, 1024, 44100);

      return context.startRendering().then((result) => {
        assert(result instanceof AudioBuffer);
        assert(result.numberOfChannels === 2);
        assert(result.length === 1024);
        assert(result.sampleRate === 44100);
      });
    });
    it("call oncomplete with an AudioBuffer if given", (done) => {
      let context = new OfflineAudioContext(2, 1024, 44100);

      context.oncomplete = sinon.spy((result) => {
        assert(result instanceof AudioBuffer);
        assert(result.numberOfChannels === 2);
        assert(result.length === 1024);
        assert(result.sampleRate === 44100);
        done();
      });

      context.startRendering();
    });
  });
});
