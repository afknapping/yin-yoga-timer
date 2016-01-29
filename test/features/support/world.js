wd = require('wd');

var browser;

function World() {
  browser = wd.promiseChainRemote();
  this.browser = browser.init({browserName:'firefox'});
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
