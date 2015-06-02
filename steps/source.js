module.exports = function() {
  this.Given(/^(?:the )?(inner )?html of "([^""]*)" element matches with:$/, require('../lib/htmlOfElementMatchesWith'));
}
