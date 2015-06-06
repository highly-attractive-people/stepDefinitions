var minify = require('html-minifier').minify;

module.exports = function(html) {
  return minify(html, {
    removeComments: true,
    collapseWhitespace: true,
    preserveLineBreaks: true,
    removeRedundantAttributes: true
  });
}
