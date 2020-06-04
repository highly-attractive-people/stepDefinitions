module.exports = function() {
  // this.Given('I click|tap on the $selector element');
  // TODO: no capture enumaral values
  this.Given(/^I (click|tap|doubleclick|doubletap) (?:on )?the "([^""]*)" (link|element|button)$/, function(interaction, selector, type, callback) {
    var interactionMap = {
      'click': 'click',
      'tap': 'click',
      'doubleclick': 'doubleclick',
      'doubletap': 'doubletap'
    };

    require('../lib/click').call(this, callback, interactionMap[interaction], selector, type);
  });
  // this.Given('I hover over the $selector element');
  // this.Given('I ')
}
