module.exports = function (callback, selector, type) {
  this.client.click(selector).call(callback);
}
