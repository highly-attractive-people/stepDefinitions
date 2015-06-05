var assign = require('lodash/object/assign');

module.exports = function(callback, expected, actual, options) {
  var optionsDefault = {
    type: 'match',
    negate: false,
    caseSensitive: false,
    descriptor: 'string'
  };

  // Merge in default options
  options = assign(optionsDefault, options || {});

  // Helper function to negate expressions.
  function _evaluate(predicate) {
    return options.negate ? !predicate : predicate;
  }

  // Helper function to negate a string description.
  function negated() {
    return (options.negate) ? '' : 'not ';
  }

  // Normalize all strings to lower-case.
  if (!options.caseSensitive) {
    expected = expected.toLowerCase();
    actual = actual.toLowerCase();
  }

  switch (options.type) {
    case 'contain':
      if (_evaluate(actual.indexOf(expected) > -1)) {
        callback();
      }
      else {
        callback.fail(new Error('The expected ' + options.descriptor + ' "' + expected + '" was ' + negated() + 'contained in the actual value of "' + actual + '".'));
      }
      break;

    case 'startWith':
      if (_evaluate(actual.startsWith(expected))) {
        callback();
      }
      else {
        callback.fail(new Error('The expected ' + options.descriptor + ' "' + expected + '" was ' + negated() + 'found at the start of the actual value of "' + actual + '".'));
      }
      break;

    case 'endWith':
      if (_evaluate(actual.endsWith(expected))) {
        callback();
      }
      else {
        callback.fail(new Error('The expected ' + options.descriptor + ' "' + expected + '" was ' + negated() + 'found at the end of the actual value of "' + actual + '".'));
      }
      break;

    case 'match':
    default:
      if (_evaluate(actual == expected)) {
        callback();
      }
      else {
        callback.fail(new Error('The expected ' + options.descriptor + ' "' + expected + '" did ' + negated() + 'match the actual value of "' + actual + '".'));
      }
      break;
  }
}
