let registeredIdToken;
const axios = require("axios");
const config = require('./config')

//write all resuable code here for generating auth token and use this in actual test
async function registerUserForValidToken() {
    const response = await axios.post(config.authURL.registrationEndpoint, {
        name: "API_Test",
        email: "Devl@ha.com",
        password: 123456
    })
        .catch(err => console.log(err));
    return response.data.data.Token;
}

async function loginAsRegisteredUser() {
    registeredIdToken = await registerUserForValidToken();
    const response = await axios.post(config.authURL.loginEndpoint, {
        email: "Devl@ha.com",
        password: 123456
    }, {
        headers: {
            Authorization: 'bearer' + registeredIdToken
        }
    }).catch(err => console.log(err));
    return response.data.data.Token;
}

module.exports = { registerUserForValidToken, loginAsRegisteredUser };