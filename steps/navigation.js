module.exports = function() {
  this.Given(/^I visit "([^"]*)"$/,   require('../lib/iVisit'));
  this.Given(/^I go back$/,           require('../lib/iGoBack'));
  this.Given(/^I go forward$/,        require('../lib/iGoForward'));
}
