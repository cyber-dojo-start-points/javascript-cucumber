'use strict';

const {Given,When,Then} = require('@cucumber/cucumber');
const assert = require('assert');
const counter = require('./fizz_buzz');

let said;

Given(/^a fizz-buzz counter$/, function() {
});

When(/^it counts off (\d+)$/, function(n) {
  said = counter.fizzBuzz(parseInt(n));
});

Then(/^it says (\w+)$/, function(word) {
  assert.equal(said, word);
});
