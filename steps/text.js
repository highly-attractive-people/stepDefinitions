module.exports = function() {
  this.Given(/^the "([^""]*)" element matches the text "([^""]*)"$/, require('../lib/elementMatchesTheText'));
  this.Given(/^the "([^""]*)" element contains the text "([^""]*)"$/, require('../lib/elementContainsTheText'));
}
