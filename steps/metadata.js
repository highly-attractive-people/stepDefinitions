module.exports = function() {
  this.Given(/^the title is "([^"]*)"$/, require('../lib/theTitleIs'));
}
