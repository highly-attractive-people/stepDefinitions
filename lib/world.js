var assign = require('lodash/object/assign');
var wd = require('webdriverio');

module.exports = function(options) {
  this.World = function World(callback) {
    this.client = wd
                    .remote(options)
                    .init(callback);
  }

  this.After(function(callback) {
    this.client.end(callback);
  });
}
