module.exports = function (title, callback) {
  this.client.title(function (err, res) {
    if (err) callback.fail(err);

    var detectedTitle = res.value;

    if (title == detectedTitle) {
      callback();
    }
    else {
      callback.fail('Detected title does not match. Expected "' + title + '", but found "' + detectedTitle + '".');
    }
  });
}
