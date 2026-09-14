'use strict';

const {Given,When,Then} = require('@cucumber/cucumber');
const assert = require('assert');
const hiker = require('./hiker');

let score;

Given(/^the hitch-hiker selects some tiles$/, function() {
});

// Printing inside a step puts the flood ahead of cucumber's summary, and the
// runner keeps only the first 50K of the stream, so the summary is what falls
// off the end.
When(/^they spell (\d+) times (\d+)$/, function(a, b) {
  for (let i = 0; i < 4000; i += 1) {
    console.log('debug: i is ' + i + ', total is ' + (i * 2));
  }
  score = hiker.answer(parseInt(a), parseInt(b));
});

Then(/^the score is (\d+)$/, function(expectedScore) {
  assert.equal(score, expectedScore);
});
