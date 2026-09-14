'use strict';

const {Given,When,Then} = require('@cucumber/cucumber');
const assert = require('assert');
const hiker = require('./hiker');

let score;

Given(/^the hitch-hiker selects some tiles$/, function() {
});

// Returning 'pending' is how a learner marks a step whose body they have not
// finished writing, and cucumber skips the steps that follow it.
When(/^they spell (\d+) times (\d+)$/, function(a, b) {
  score = hiker.answer(parseInt(a), parseInt(b));
  return 'pending';
});

Then(/^the score is (\d+)$/, function(expectedScore) {
  assert.equal(score, expectedScore);
});
