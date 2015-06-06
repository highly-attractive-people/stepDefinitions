module.exports = function() {
  this.Given(/^(?:the )?(inner )?html of "([^""]*)" element matches with:$/, require('../lib/htmlOfElementMatchesWith'));
  // this.Given('the $attr attribute value of the $selector element matches $value');
  // this.Given('the $attr attribute value of the $selector element contains $value');
}
