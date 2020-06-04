var compareTypes = require('../lib/helpers/stringHelperCompareTypeMapper');

module.exports = function() {
  this.Given(/^the "([^""]*)" element (does not )?(strictly )?(match(?:es)?|contain(?:s)?|start(?:s)? with|end(?:s)? with) (?:the text )?"([^""]*)"$/, function(selector, negate, strict, compareType, expectedText, callback) {
    var options = {
      caseSensitive: !!strict,
      type: compareTypes[compareType],
      negate: !!negate
    };
    require('../lib/elementText').call(this, callback, selector, expectedText, options);
  });
}
