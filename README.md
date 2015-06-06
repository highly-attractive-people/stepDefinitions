## Highly Attractive (Gherkin) Step Definitions
[![npm version](https://badge.fury.io/js/highly-attractive-step-definitions.svg)](http://badge.fury.io/js/highly-attractive-step-definitions)

### Prerequesites
- [Cucumber.js][cucumberjs]
- A running webdriver ([PhantomJS][phantomjs], [Selenium][selenium], [BrowserStack][browserstack], etc.)
- [Node.js/NPM][nodejs]

### Install
Run `$ npm install --save-dev highly-attractive-step-definitions` to include this library into your package.json's devDependencies.

### Usage
In your `features/step_definitions/myStepDefinitions.js` (or similar):
```javascript
module.exports = function() {
  var options = {/* Optional configurations to pass to the web driver. */};
  require('highly-attractive-step-definitions').call(this, options);
}
```

That's the bare minimum to have these step definitions available to you. Take a peak into the `steps` directory to see the provided step definitions.

At this point, use the documentation on [Cucumber-JS][cucumberjs] on how to write and execute your features.

Oh yeah, make sure You're running a web driver on `127.0.0.1:4444`!

[cucumberjs]: https://github.com/cucumber/cucumber-js
[phantomjs]: http://phantomjs.org/
[selenium]: http://www.seleniumhq.org/
[browserstack]: https://www.browserstack.com/
[nodejs]: http://nodejs.org/
