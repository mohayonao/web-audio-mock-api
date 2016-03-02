"use strict";

const assert = require("assert");
const AudioWorker = require("../src/AudioWorker");
const AudioWorkerNode = require("../src/AudioWorkerNode");
const AudioParam = require("../src/AudioParam");

describe("AudioWorker", () => {
  describe("constructor()", () => {
    it("create an AudioWorker", () => {
      let worker = new AudioWorker();

      assert(worker instanceof AudioWorker);
      assert.deepEqual(worker.parameters, []);
      assert(worker.onmessage === null);
      assert(worker.onloaded === null);
    });
  });
  describe("terminate()", () => {
    it("works", () => {
      let worker = new AudioWorker();

      assert.doesNotThrow(() => {
        worker.terminate();
      });
    });
  });
  describe("postMessage()", () => {
    it("works", () => {
      let worker = new AudioWorker();

      assert.doesNotThrow(() => {
        worker.postMessage();
      });
    });
  });
  describe("createNode(numberOfInputs, numberOfOutputs)", () => {
    it("return an AudioWorkerNode", () => {
      let worker = new AudioWorker();
      let retVal = worker.createNode(1, 2);

      assert(retVal instanceof AudioWorkerNode);
    });
  });
  describe("addParameter(name, defaultValue)", () => {
    it("return an AudioParam", () => {
      let worker = new AudioWorker();
      let retVal = worker.addParameter("foo", 10);

      assert(retVal instanceof AudioParam);
      assert(retVal.defaultValue === 10);
    });
  });
  describe("removeParameter()", () => {
    it("works", () => {
      let worker = new AudioWorker();

      assert.doesNotThrow(() => {
        worker.removeParameter();
      });
    });
  });
});
