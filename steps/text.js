module.exports = function() {
  this.Given(/^the "([^""]*)" element (does not )?(strictly )?(match(?:es)?|contain(?:s)?|start(?:s)? with|end(?:s)? with) (?:the text )?"([^""]*)"$/, function(selector, negate, strict, compareType, expectedText, callback) {
    var compareTypeMapper = {
      'match': 'match',
      'matches': 'match',
      'contains': 'contain',
      'contain': 'contain',
      'starts with': 'startWith',
      'ends with': 'endWith',
      'start with': 'startWith',
      'end with': 'endWith'
    };

    var options = {
      caseSensitive: !!strict,
      type: compareTypeMapper[compareType],
      negate: !!negate
    };
    require('../lib/elementText').call(this, callback, selector, expectedText, options);
  });
}
