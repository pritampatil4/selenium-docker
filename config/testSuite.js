const landingPageTests = require("../tests/landingPageTests");
const LoadDriver = require("../services/loadDriverFile");

jest.setTimeout(50000);

const HomePageTests = require("../tests/homePageTests");
const LoadDriver = require("../services/loadDriver");
jest.setTimeout(50000);

let runTestSuite = (driver) => {
  describe("Cross Browser Testing with Docker", () => {
    beforeAll(async () => {
      global.DRIVER = LoadDriver(driver);
      global.TIME = 5000;
    });
    afterAll(async () => {
      await DRIVER.quit();
    });
    describe("Home Page test", HomePageTests);
  });
};
// Single process run
if (process.env.LOCALBROWSER) {
  runTestSuite({ "browserName": process.env.LOCALBROWSER});
  exit();
}
// Run all browsers
const caps = [
  { browserName: "firefox", "version": "latest" },
  { browserName: "chrome", "version": "latest" }
];
caps.map(cap => {
  runTestSuite(cap);
});