# api-automation

Used Api Base Url- http://restapi.adequateshop.com which is dummy rest JSON API for testing in postman with dummy data

Automate APIs and validate server side for better performance and early feedback.

Rest API automation using axios, chai and mocha.

The intent of this repo is to emphasize of code hygine, folder structure, code resuability and dynamic authentication token generation

---------
Script to run test - npx mocha test/*/*.js
---------
# initial setup - from scratch
1. npm init and install dependencies
2. add .gitignore and place nodemodules in it
3. Create .env file and use 
API_BASE_URL = "http://restapi.adequateshop.com"

# dependencies
axios - npm i axios

falso - npm i @ngneat/falso

chai,mocha - npm install mocha chai --save-dev

dotenv - npm install dotenv --save

-------------
# stack
nodejs
assertion library - chai
runtime - mocha
axios
-------------
# .env
1. create an .env file locally to store all common variables needed for the code, can be imported using process.env
API_BASE_URL = "your url here"
API_KEY = "your api key here"
CLIENT_ID  = "your client id here"
2. Use these in config.js which contains all the API and links for reference -> npm install dotenv --save
-------------
# setUp and tear down
1. Use before() block to initiate token , random names and commonly used varaibles if you want to reuse the same variable for all the tests
2. Instantiate them globally as let variableName and use it everywhere
3. Falso will generate email, name dynamically and that can used in all the tests
-------------
# code hygiene
1. Have folder structure 
    Place common utilities like config.js, scripts, commonly used methods to export in one folder called utils
    split userjourneys into different folders ex: One folder for teacher APIs, one folder for students APIs
2. Always have README.md
3. make sure gitignore is properly setup
4. Do not push .env file to git