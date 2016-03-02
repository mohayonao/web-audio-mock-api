"use strict";

const assert = require("assert");
const AudioParam = require("../src/AudioParam");

describe("AudioParam", () => {
  describe("constructor()", () => {
    it("create an AudioParam", () => {
      let param = new AudioParam(1);

      assert(param instanceof AudioParam);
      assert(param.value === 1);
      assert(param.defaultValue === 1);
    });
  });
  describe("setValueAtTime()", () => {
    it("return self", () => {
      let param = new AudioParam(1);
      let retVal = param.setValueAtTime();

      assert(retVal === param);
    })
  });
  describe("linearRampToValueAtTime()", () => {
    it("return self", () => {
      let param = new AudioParam(1);
      let retVal = param.linearRampToValueAtTime();

      assert(retVal === param);
    })
  });
  describe("exponentialRampToValueAtTime()", () => {
    it("return self", () => {
      let param = new AudioParam(1);
      let retVal = param.exponentialRampToValueAtTime();

      assert(retVal === param);
    })
  });
  describe("setTargetAtTime()", () => {
    it("return self", () => {
      let param = new AudioParam(1);
      let retVal = param.setTargetAtTime();

      assert(retVal === param);
    })
  });
  describe("setValueCurveAtTime()", () => {
    it("return self", () => {
      let param = new AudioParam(1);
      let retVal = param.setValueCurveAtTime();

      assert(retVal === param);
    })
  });
  describe("cancelScheduledValues()", () => {
    it("return self", () => {
      let param = new AudioParam(1);
      let retVal = param.cancelScheduledValues();

      assert(retVal === param);
    })
  });
});
