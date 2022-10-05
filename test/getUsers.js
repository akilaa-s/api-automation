const axios = require("axios");
const { assert, expect } = require("chai");
const config = require('../utils/config');
const idTokenGenerator = require('../utils/registerUser')
let idToken;
let errResponse;


//get idToken from the utils written. Import it and call the necessary function
describe('Get an user', async () => {
    it('should get users when logged in as a registered user', async () => {
        idToken = await idTokenGenerator.loginAsRegisteredUser();
        const response = await axios.get(config.API.getUsers, {
            headers: {
                'Authorization': 'Bearer ' + idToken
            },
            params: {
                page: '1'
            },
        })
            .catch(err => console.log(err));
        console.log(response);
        assert(response.status, 200)
    });

    //since this will throw error, catch block is a must. Declare variable globally and assert with the error response
    it('should throw auth error when invalid token is passed', async () => {
        idToken = await idTokenGenerator.loginAsRegisteredUser();
        const response = await axios.get(config.API.getUsers, {
            headers: {
                'Authorization': 'Bearer ' + 'abc'
            },
            params: {
                page: '1'
            },
        })
            .catch(err => {
                errResponse = err.response;
            });
        assert(errResponse.status, 401)
        assert(errResponse.statusText, 'Unauthorized')
    })
})