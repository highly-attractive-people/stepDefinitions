module.exports = function() {
  this.Given(/^the (?:page )?title matches "([^"]*)"$/, require('../lib/pageTitleMatches'));
}
