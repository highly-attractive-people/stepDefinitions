module.exports = function(options) {
  // Polyfills
  require('./lib/helpers/endWith.polyfill.js');
  require('./lib/helpers/startWith.polyfill.js');

  require('./lib/world') .call(this, options);
  require('./steps/metadata').call(this);
  require('./steps/navigation').call(this);
  require('./steps/source').call(this);
  require('./steps/text').call(this);
  require('./steps/user-interaction').call(this);
}
