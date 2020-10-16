const landingPageTests = require("../tests/landingPageTests");
const LoadDriver = require("../services/loadDriver");

jest.setTimeout(50000);


const caps = [
  { browserName: 'chrome'},
  { browserName: 'firefox'}
];


caps.map(function (cap) {
  describe('Test Suite', () => {
      beforeAll(async () => {
          global.DRIVER = LoadDriver(cap);
          global.TIME = 50000;
      });
  
      afterAll(async () => {
          await DRIVER.quit();
      });
  
      describe("Landing Page Tests", landingPageTests);
      
  });
});

