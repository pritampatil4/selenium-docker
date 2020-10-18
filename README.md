# selenium-docker

Running Selenium Tests Written in JavaScript on Docker

# Tools & Environment

Language : Node.js

Assertion & Test Runner: Jest 

Automation Framework: Selenium WebDriver

# Part 1 - Installing Tools and Frameworks

Let's get started...

1. Install Node 
Download link: https://nodejs.org/en/

2. Get an IDE (Visual Studio)

Download Link: https://code.visualstudio.com/

3. Github Desktop App (very handy)

Download Link: https://desktop.github.com/

4. Install Docker

Download Link: https://www.docker.com/

# Part 2 - Running the Tests

Note: You need to have chromedriver/geckodriver installed on your machine to run tests locally. 

1. Clone/Download the Project from Github
Open GitHub Desktop App, pull from URL - https://github.com/pritampatil4/selenium-docker.git

On your terminal  - 

npm install (installs all the dependencies)

2. Start Docker: docker-compose -f {path-to-docker-compose-file} up -d

# Part 3 - Run the Tests

To run locally you'll need browser drivers. 
*Your browser version should match the binary/driver version you're downloading.

For chrome - https://chromedriver.chromium.org/

For Firefox - https://github.com/mozilla/geckodriver/releases

For Safari - Go to Safari →develop → Allow Remote Automation

*Set PATH for drivers in bash_profile/system environment.

Running Tests

On Docker Containers - uitests-cross-browser-docker

On Browsers Directly  - uitests-cross-browser

