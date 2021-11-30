const conf = require('../../nightwatch.conf.js');

module.exports = {
  'Open aonprd.com (Archive of Nethys)': function (browser) {
    browser
        .url("https://www.aonprd.com/")
        .waitForElementVisible("body")
        .saveScreenshot(`${conf.imgpath(browser)}archive-of-nethys-frontpage.png`);

    browser
        .assert.title("Home - Archives of Nethys: Pathfinder RPG Database");

    browser
        .setWindowSize(800, 800)
        .saveScreenshot(`${conf.imgpath(browser)}archive-of-nethys-frontpage-800.png`);

    browser
        .click('div.page h2 a')
        .waitForElementVisible("body", 2000, false)
        .saveScreenshot(`${conf.imgpath(browser)}archive-of-nethys-click.png`);

    browser.end();
  }
};