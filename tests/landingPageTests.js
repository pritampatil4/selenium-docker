const { Builder,By } = require('selenium-webdriver');
const {getElement} = require('../services/locatingStrategy');

require('dotenv').config();

const landingPageTests = () => {
    beforeAll(async () => {
        await DRIVER.get(process.env.BASE_URL);
    });

    it('Checks logo on page', async () => {
        await DRIVER.sleep(6000);
        await getElement('.z-navicat-header_svgLogo').isDisplayed();      
    });
};
module.exports = landingPageTests;
