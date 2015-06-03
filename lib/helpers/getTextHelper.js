module.exports = function(type) {
  return function (selector, text, callback) {
    this.client.getText(selector, function(err, detectedText) {
      if (err) {
        callback.fail(err);
      }
      else {
        if (!detectedText) {
          callback.fail(new Error('No text found in the provided selector "' + selector + '".'));
        }
        else {
          switch (type) {
            case 'match':
              if (text.toLowerCase() != detectedText.toLowerCase()) {
                callback.fail(new Error('The detected text "' + detectedText + '" did not match the provided text "' + text + '".'));
              }
              else {
                callback();
              }
              break;

            case 'contain':
              if (text.toLowerCase().indexOf(detectedText.toLowerCase()) > -1 ) {
                callback.fail(new Error('The provided text "' + text + '" was not found in the detected text "' + detectedText + '".'));
              }
              else {
                callback();
              }
              break;
            }

        }
      }
    });
  }
}
