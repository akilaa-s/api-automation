# api-automation
Automate APIs and validate server side for better performance and early feedback
Rest API automation using axios, chai and mocha
The intent of this repo is to emphasize of code hygine, folder structure, code resuability and dynamic authentication token generation
---------
Script to run test - npx mocha test/*/*.js
---------
# initial setup - from scratch
1. npm init
and install dependencies
# dependencies
axios - npm i axios
falso - npm i @ngneat/falso
chai - npm install mocha chai --save-dev
mocha
dotenv - npm install dotenv --save
2. add .gitignore and place nodemodules in it
-------------
# stack
nodejs
assertion library - chai
runtime - mocha
axios
-------------
# possible errors in nodejs
1. use module.exports = {} if you have a lot of common methods,variables to be exported -> EX: module.exports = {getValidToken, getAccessUsingIdToken}
2. use module.exportS = variable or single method without {} -> EX: module.exports = config
3. in actual test or js file, while importing, use const abc = require('falso') if there is only method to be imported , i.e sans {}
4. in actual test or js file, while importing, use const {assert, should} = require('chai') if there is are more methods to be imported at once , i.e avec {}
-------------
# possible errors in axios
1. For get calls, check the params and auth params - they should be as one object
axios.get(config.API.yourGetAPI, {
            headers: {
                "x-api-key": config.apiKey,
                "Authorization": idtoken
            },
            params: {
                name: 'test',
                projectID: 'Sparrow'
            },
        })
2. For post calls, body params and auth params are two different entities
await axios.post(config.API.yourPostAPI,
                    { projectName: "Animal" },
                    {
                        headers: {
                            "X-Api-Key": "your api key",
                            "Authorization": idToken
                        },
                    });
3. Always use catch block for catching error responses in case of error
Example:
 const response = await axios
                .post(
                    config.API.yourAPU,
                    { batchName: "Animal" },
                    {
                        headers: {
                            "X-Api-Key": "abcdhajhd1231asda",
                            "Authorization": idToken
                        },
                    }
                )
                .catch(function (error) {
                    errorResponse = error.response;
                });
Instantiate them globally as let errorResponse;

4. For post requests, the order of params are important (with or wothout body params being sent) i.e axios.post(url,{body},{headers}) -> If this order is not maintained when body or some block is not passed, unauthorized error will be thrown. 
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
-------------
# code hygiene
1. Have folder structure 
    Place common utilities like config.js, scripts, commonly used methods to export in one folder called utils
    split userjourneys into different folders ex: One folder for teacher APIs, one folder for students APIs
2. Always have README.md
3. make sure gitignore is properly setup
4. Do not push .env file to git