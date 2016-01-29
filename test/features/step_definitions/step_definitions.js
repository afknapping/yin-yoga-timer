var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function (callback) {
    // Express the regexp above with the code you wish you had.
    // `this` is set to a World instance.
    // i.e. you may use this.browser to execute the step:

    this.visit('https://github.com/cucumber/cucumber-js', callback);

    // The callback is passed to visit() so that when the job's finished, the next step can
    // be executed by Cucumber.
  });

  this.When(/^I go to the README file$/, function (callback) {
    // Express the regexp above with the code you wish you had. Call callback() at the end
    // of the step, or callback.pending() if the step is not yet implemented:

    callback.pending();
  });

  this.Then(/^I should see the time budget displayed$/, function (callback) {
    this.browser.get('http://localhost:3000/')
    .waitForElementById('TimeBudgetDisplay')
    .then(function() {
        callback();
    })
  });

  var initialValue; // make global

  this.When(/^I click on the time budget increase button 3 times$/, function () {


    return this.browser.get('http://localhost:3000/')
      .elementById('TimeBudgetDisplay')
      .text()
      .then(function(value) {
        initalValue = value
      })
      .elementByCss('.section.time .plus')
      .click().click().click()

  });

  this.Then(/^the time budget shoud be (\d+) times higher than before$/, function (arg1, callback) {

    this.browser
      .elementById('TimeBudgetDisplay')
      .text()
      .then(function(value) {
        if (value - initalValue == 3) {
          callback();
        } else {
          callback(new Error('Das stimmt gar nicht #sadface'));
        }
      });
  });
};

