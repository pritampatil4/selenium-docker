const { Builder,By } = require('selenium-webdriver');
const {getElement} = require('../services/locatingStrategy');
const BASE_URL = "http://www.zalando.de";


const landingPageTests = () => {
    beforeAll(async () => {
        await DRIVER.get(BASE_URL);
    });

    it('Checks logo on page', async () => {
        await DRIVER.sleep(6000);
        await getElement('.z-navicat-header_svgLogo').isDisplayed();      
    });
};
module.exports = landingPageTests;
