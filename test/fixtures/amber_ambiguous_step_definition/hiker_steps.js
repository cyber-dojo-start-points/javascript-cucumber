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

// A second Then matching the same sentence. Both are found, so cucumber
// cannot choose between them.
Then(/^the score is (\d+)$/, function(expectedScore) {
  assert.equal(score, expectedScore);
});

Then(/^the score is (.+)$/, function(expectedScore) {
  assert.equal(String(score), expectedScore);
});
