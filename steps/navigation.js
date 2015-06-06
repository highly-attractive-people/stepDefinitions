module.exports = function() {
  this.Given(/^I visit "([^"]*)"$/, function (url, callback) {
    require('../lib/iVisit').call(this, callback, url);
  });
  this.Given(/^I go back$/,           require('../lib/iGoBack'));
  this.Given(/^I go forward$/,        require('../lib/iGoForward'));
  this.Given(/^I refresh the page$/,  require('../lib/iRefresh'));
}
