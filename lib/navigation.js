var isFullUrl = require('highly-attractive-node-utils').url.isFullUrl;

module.exports = function() {
  this.Given(/^I visit "([^"]*)"$/, function (url, callback) {
    if (!isFullUrl(url)) {
      callback.fail(new Error('Expected URL to be a fully-qualified URL. Instead saw "' + url + '".'));
    }

    this.client.url(url);

    this.client.url(function(err, res) {
      if (err) {
        callback.fail(err);
      }

      if (!isFullUrl(res.value)) {
        callback.fail(new Error('Expected "' + url + '" to resolve. Instead saw "' + res.value + '".'));
      }

      callback();
    });
  });
}
