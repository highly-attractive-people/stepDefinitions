module.exports = function(options) {
  require('./lib/world') .call(this, options);
  require('./steps/metadata').call(this);
  require('./steps/navigation').call(this);
  require('./steps/source').call(this);
  require('./steps/text').call(this);
}
