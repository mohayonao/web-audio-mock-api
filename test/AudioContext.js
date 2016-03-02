"use strict";

const assert = require("assert");
const AudioContext = require("../src/AudioContext");
const BaseAudioContext = require("../src/BaseAudioContext");
const MediaElementAudioSourceNode = require("../src/MediaElementAudioSourceNode");
const MediaStreamAudioSourceNode = require("../src/MediaStreamAudioSourceNode");
const MediaStreamAudioDestinationNode = require("../src/MediaStreamAudioDestinationNode");

describe("AudioContext", () => {
  describe("constructor()", () => {
    it("create an AudioContext", () => {
      let context = new AudioContext();

      assert(context instanceof AudioContext);
      assert(context instanceof BaseAudioContext);
    });
  });
  describe("createMediaElementSource()", () => {
    it("create a MediaElementAudioSourceNode", () => {
      let context = new AudioContext();
      let retVal = context.createMediaElementSource();

      assert(retVal instanceof MediaElementAudioSourceNode);
      assert(retVal.context === context);
    });
  });
  describe("createMediaStreamSource()", () => {
    it("create a MediaStreamAudioSourceNode", () => {
      let context = new AudioContext();
      let retVal = context.createMediaStreamSource();

      assert(retVal instanceof MediaStreamAudioSourceNode);
      assert(retVal.context === context);
    });
  });
  describe("createMediaStreamDestination()", () => {
    it("create a MediaStreamAudioDestinationNode", () => {
      let context = new AudioContext();
      let retVal = context.createMediaStreamDestination();

      assert(retVal instanceof MediaStreamAudioDestinationNode);
      assert(retVal.context === context);
    });
  });
});
