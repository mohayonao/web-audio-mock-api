"use strict";

const assert = require("assert");
const AudioListener = require("../src/AudioListener");

describe("AudioListener", () => {
  describe("constructor()", () => {
    it("create an AudioListener", () => {
      let listener = new AudioListener();

      assert(listener instanceof AudioListener);
    });
  });
  describe("setPosition()", () => {
    it("works", () => {
      let listener = new AudioListener();

      assert.doesNotThrow(() => {
        listener.setPosition();
      });
    });
  });
  describe("setOrientation()", () => {
    it("works", () => {
      let listener = new AudioListener();

      assert.doesNotThrow(() => {
        listener.setOrientation();
      });
    });
  });
});
