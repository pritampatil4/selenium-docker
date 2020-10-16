const webdriver = require("selenium-webdriver");
require('dotenv').config();

module.exports = (cap) => {
    // return new webdriver.Builder().forBrowser(process.env.LOCALBROWSER).build();
    return new webdriver.Builder()
                 .usingServer(process.env.SELENIUM_HUB_URL)
                 .withCapabilities(cap)
                 .build();
};
