var compareTypes = require('../lib//helpers/stringHelperCompareTypeMapper');

module.exports = function() {
  this.Given(/^(?:the )?(inner )?html of the "([^""]*)" element (does not )?(strictly )?(match(?:es)?|contain(?:s)?|start(?:s)? with|end(?:s)? with) with:$/, function (isNotInclusive, selector, negate, strict, compareType, expected, callback) {
    var includeSelectorTag = !!!isNotInclusive;
    var options = {
      caseSensitive: !!strict,
      type: compareTypes[compareType],
      negate: !!negate,
      descriptor: 'html source'
    };
    require('../lib/htmlOfElementMatches').call(this, callback, selector, includeSelectorTag, expected, options)
  });
  // this.Given('the $attr attribute value of the $selector element matches $value');
  // this.Given('the $attr attribute value of the $selector element contains $value');
}
