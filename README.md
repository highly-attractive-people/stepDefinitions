## Highly Attractive (Gherkin) Step Definitions

### Prerequesites
- [Cucumber.js][cucumberjs]
- A webdriver ([PhantomJS][phantomjs], [Selenium][selenium], [BrowserStack][browserstack], etc.)
- [Node.js/NPM][nodejs]

### Install
Run `$ npm install --save-dev highly-attractive-step-definitions` to include this library into your package.json's devDependencies.

### Usage
In your `features/step_definitions/myStepDefinitions.js` (or similar):
```javascript
module.exports = function() {
  require('highly-attractive-step-definitions').call(this);
}
```

That's the bare minimum to have these step definitions available to you. Take a peak into the `steps` directory to see the provided step definitions.

At this point, use the documentation on [Cucumber-JS][cucumberjs] on how to write and execute your features.

Oh yeah, make sure You're running a web driver on `localhost:4444` (ability to customize coming soon)!

[cucumberjs]: https://github.com/cucumber/cucumber-js
[phantomjs]: http://phantomjs.org/
[selenium]: http://www.seleniumhq.org/
[browserstack]: https://www.browserstack.com/
[nodejs]: http://nodejs.org/
