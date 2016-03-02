# web-audio-mock-api
[![Build Status](http://img.shields.io/travis/mohayonao/web-audio-mock-api.svg?style=flat-square)](https://travis-ci.org/mohayonao/web-audio-mock-api)
[![NPM Version](http://img.shields.io/npm/v/web-audio-mock-api.svg?style=flat-square)](https://www.npmjs.org/package/web-audio-mock-api)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

This module is a mock API which implements the Web Audio API's interfaces only. This mock API simulates Web Audio API's methods, return value and properties. It is useful to test your web audio application.

## Installation

```
$ npm install -D web-audio-mock-api
```

## API

_The API is based on the latest specification of Web Audio API._

- [Web Audio API - W3C Working Draft 08 December 2015](http://www.w3.org/TR/2015/WD-webaudio-20151208/)

## Example

```js
const assert = require("assert");
const wamock = require("web-audio-mock-api");

function beep(audioContext) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const t0 = audioContext.currentTime;
  const t1 = t0 + 0.25;

  oscillator.type = "sine";
  oscillator.frequency.value = 880;
  oscillator.start(t0);
  oscillator.stop(t1);
  oscillator.onended = () => {
    oscillator.disconnect();
    gain.disconnect();
  };

  gain
    .setValueAtTime(1, t0)
    .linearRampToValueAtTime(0, t1);

  oscillator.connect(gain).connect(audioContext.destination);
}

const audioContext = new wamock.AudioContext();

assert.doesNotThrow(() => beep(audioContext));
```

## Licsense

MIT
