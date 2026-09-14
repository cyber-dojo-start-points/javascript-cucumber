'use strict';

module.exports = {
  answer
};

// The eqeqeq option in .jshintrc makes == an error the linter reports, and
// node itself is happy with it. That is what makes this case say whether
// .jshintrc reached the sandbox, and whether cyber-dojo.sh stops on a
// linter error before cucumber runs.
function answer(a, b) {
  if (a == 0) {
    return 0;
  }
  return a * b;
}
