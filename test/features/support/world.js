wd = require('wd');

var browser;

function World() {

  if (!browser) {
    browser = wd.promiseChainRemote();
    browser = browser.init({browserName:'firefox'});
  }

  this.browser = browser;
}
module.exports = function() {
  this.World = World;

  this.After(function () {
    return browser.execute('window.localStorage.clear();');
  });

  this.registerHandler('AfterFeatures', function (e, done) {
    browser.quit()
      .then(done);
  });
};
