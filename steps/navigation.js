module.exports = function() {
  this.Given(/^I visit "([^"]*)"$/, require('../lib/iVisit'));
  this.Given(/^I go back$/,         require('../lib/iGoBack'));
}
