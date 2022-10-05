//this file will contain all the API endpoints extending from base URL, all commonly used keys and ids

//require dotenv.config() is needed to import variable from .env file using process.env
require('dotenv').config();
let baseURL = process.env.API_BASE_URL;
console.log(baseURL);

//here you can have all the list of APIs, ids, keys that are used as reference
const config = {
    API: {
        getUsers: `${baseURL}/api/users`,
        createUsers: `${baseURL}/api/users`
    },
    authURL: {
        registrationEndpoint: `${baseURL}/api/authaccount/registration`,
        loginEndpoint: `${baseURL}/api/authaccount/login`,
    }
};

module.exports = config;