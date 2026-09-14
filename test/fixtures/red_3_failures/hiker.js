'use strict';

module.exports = {
  answer
};

// 543 is three digits and odd, so each of the three scenarios disagrees
// with it.
function answer(a, b) {
  return a * b + 501;
}
