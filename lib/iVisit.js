var isFullUrl = require('highly-attractive-node-utils').url.isFullUrl;

module.exports = function (callback, url) {
  if (!isFullUrl(url)) {
    callback.fail(new Error('Expected URL to be a fully-qualified URL. Instead saw "' + url + '".'));
  }

  // Navigate to the URL...
  this.client.url(url);

  // ... and do a couple more checks to make sure we're at a good place.
  this.client.url(function(err, res) {
    if (err) callback.fail(err);

    if (!isFullUrl(res.value)) {
      callback.fail(new Error('Expected "' + url + '" to resolve. Instead saw "' + res.value + '".'));
    }

    callback();
  });
}
