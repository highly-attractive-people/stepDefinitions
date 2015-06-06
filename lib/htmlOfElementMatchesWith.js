var stringHelper = require('./helpers/stringHelper');
var minifyHelper = require('./helpers/minifyHelper');

module.exports = function(callback, selector, includeSelectorTag, expectedHtml, options ) {
  this.client.getHTML(selector, includeSelectorTag, function(err, actualHtml) {
    if (err) {
      callback.fail(err)
    }
    else {
      // Minify HTML into a simple string to make it possible to match.
      expectedHtml = minifyHelper(expectedHtml);
      actualHtml = minifyHelper(actualHtml);
      stringHelper(callback, expectedHtml, actualHtml, options);
    }
  });
}
