'use strict';

const {Given,When,Then} = require('@cucumber/cucumber');
const assert = require('assert');
const hiker = require('./hiker');
const sums = require('./checksum');

let score;

Given(/^the hitch-hiker selects some tiles$/, function() {
});

When(/^they spell (\d+) times (\d+)$/, function(a, b) {
  score = hiker.answer(parseInt(a), parseInt(b));
});

Then(/^the score is (\d+) and its checksum is (\d+)$/, function(expected, sum) {
  assert.equal(score, expected);
  assert.equal(sums.checksum(String(score)), sum);
});
