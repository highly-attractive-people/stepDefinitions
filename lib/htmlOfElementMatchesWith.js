module.exports = function(isNotInclusive, selector, html, callback) {
  var includeSelectorTag = (typeof isNotInclusive != 'undefined') ? false : true;
  this.client.getHTML(selector, includeSelectorTag, function(err, res) {
    if (err) {
      callback.fail(err)
    }
    else {
      if (res !== html) {
        callback.fail('Detected html does not match. Expected "' + html + '" but found "' + res + '".');
      }
      else {
        callback();
      }
    }
  });
}
