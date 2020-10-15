const landingPageTests = require("../tests/landingPageTests");
const LoadDriver = require("../services/loadDriver");

jest.setTimeout(50000);

// Run single browser
const runTestSuite = () => {
  beforeAll(async () => {
    global.DRIVER = LoadDriver()
    global.TIME = 5000;
  });
  afterAll(async () => {
    await DRIVER.quit();
  });
  describe("Home Page test", landingPageTests);
};
runTestSuite();