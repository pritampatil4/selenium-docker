const webdriver = require("selenium-webdriver");

module.exports = () => {
    return new webdriver.Builder()
    .forBrowser(process.env.LOCALBROWSER)
    .usingServer('http://localhost:4444/wd/hub')
    .build();
};
