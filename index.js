module.exports = function() {
  require('./lib/world') .call(this);
  require('./steps/metadata').call(this);
  require('./steps/navigation').call(this);
  require('./steps/source').call(this);
}
