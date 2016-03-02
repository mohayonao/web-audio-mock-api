"use strict";

const assert = require("assert");
const AudioBuffer = require("../src/AudioBuffer");

describe("AudioBuffer", () => {
  describe("constructor()", () => {
    it("create an AudioBuffer", () => {
      let buffer = new AudioBuffer(2, 1024, 44100);

      assert(buffer instanceof AudioBuffer);
      assert(buffer.sampleRate === 44100);
      assert(buffer.length === 1024);
      assert(buffer.duration === buffer.length / buffer.sampleRate);
      assert(buffer.numberOfChannels === 2);
    });
  });
  describe("getChannelData()", () =>{
    it("return a Float32Array", () => {
      let buffer = new AudioBuffer(2, 1024, 44100);
      let retVal = buffer.getChannelData();

      assert(retVal instanceof Float32Array);
      assert(retVal.length === 1024);
    });
  });
  describe("copyFromChannel()", () => {
    it("works", () => {
      let buffer = new AudioBuffer(2, 1024, 44100);

      assert.doesNotThrow(() => {
        buffer.copyFromChannel();
      });
    });
  });
  describe("copyToChannel()", () => {
    it("works", () => {
      let buffer = new AudioBuffer(2, 1024, 44100);

      assert.doesNotThrow(() => {
        buffer.copyToChannel();
      });
    });
  });
});
