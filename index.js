module.exports = function() {
  require('./lib/world') .call(this);
  require('./lib/navigation').call(this);
}
