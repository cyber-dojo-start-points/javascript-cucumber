'use strict';

function checksum(text) {
  return text.split('').reduce((sum, c) => sum + c.charCodeAt(0), 0
}
