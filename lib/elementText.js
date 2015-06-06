var stringHelper = require('./helpers/stringHelper');

module.exports = function (callback, selector, expectedText, options) {
  this.client.getText(selector, function(err, actualText) {
    if (err) {
      callback.fail(err);
    }
    else {
      if (!actualText) {
        callback.fail(new Error('No text found in the provided selector "' + selector + '".'));
      }
      else {
        stringHelper(callback, expectedText, actualText, options);
      }
    }
  });
}
