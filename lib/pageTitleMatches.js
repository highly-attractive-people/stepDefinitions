var stringHelper = require('./helpers/stringHelper');

module.exports = function (callback, expectedValue, options) {
  this.client.title(function (err, res) {
    if (err) callback.fail(err);

    var actualValue = res.value;

    stringHelper(callback, expectedValue, actualValue, options);
  });
}
