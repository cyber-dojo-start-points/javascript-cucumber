'use strict';

const {Given,When,Then} = require('@cucumber/cucumber');
const assert = require('assert');
const hiker = require('./hiker');

let score;

Given(/^the hitch-hiker selects some tiles$/, function() {
});

When(/^they spell (\d+) times (\d+)$/, function(a, b) {
  score = hiker.answer(parseInt(a), parseInt(b));
});

Then(/^the score is (\d+)$/, function(expectedScore) {
  assert.equal(score, expectedScore);
});

Then(/^the score has (\d+) digits$/, function(digits) {
  assert.equal(String(score).length, digits);
});
