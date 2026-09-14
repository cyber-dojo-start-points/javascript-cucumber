'use strict';

const {Given,When,Then} = require('@cucumber/cucumber');
const assert = require('assert');
const hiker = require('./hiker');

let score;

Given(/^the hitch-hiker selects some tiles$/, function() {
});

When(/^they spell (\d+) times (\d+)$/, function(a, b) {
  console.log('debug: answer was called');
  score = hiker.answer(parseInt(a), parseInt(b));
});

Then(/^the score is (\d+)$/, function(expectedScore) {
  console.error('debug: and this print aimed at stderr');
  assert.equal(score, expectedScore);
});
