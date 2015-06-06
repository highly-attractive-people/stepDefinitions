module.exports = function() {
  this.Given(/^the title is "([^"]*)"$/, require('../lib/theTitleIs'));
  // this.Given('I enter $value into the $selector field');
  // this.Given('I upload $file to the $selector field');
  // this.Given('I empty the $selector field');
}
