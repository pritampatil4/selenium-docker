const webdriver = require("selenium-webdriver");

module.exports = () => {
    return new webdriver.Builder()
    .forBrowser(process.env.LOCALBROWSER)
    .usingServer(process.env.SELENIUM_HUB_URL)
    .build();
};
