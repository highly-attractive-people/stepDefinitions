var assign = require('lodash/object/assign');
var wd = require('webdriverio');

var defaults = {
  browserName: 'chrome'
};

module.exports = function(options) {
  this.World = function World(callback) {
    this.client = wd
                    .remote(assign(options || {}, defaults))
                    .init(callback);
  }
}
