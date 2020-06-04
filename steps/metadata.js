var compareTypes = require('../lib/helpers/stringHelperCompareTypeMapper');

module.exports = function() {
  this.Given(/^the (?:page )?title (does not )?(strictly )?(match(?:es)?|contain(?:s)?|start(?:s)? with|end(?:s)? with) (?:the text )?"([^""]*)"$/, function(negate, strict, compareType, expectedValue, callback) {
    var options = {
      caseSensitive: !!strict,
      type: compareTypes[compareType],
      negate: !!negate,
      descriptor: 'title'
    };

    require('../lib/pageTitleMatches').call(this, callback, expectedValue, options);
  });
}
