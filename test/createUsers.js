const axios = require("axios");
const { assert, expect } = require("chai");
const config = require('../utils/config');
const idTokenGenerator = require('../utils/registerUser')
let idToken;
let errResponse;


//get idToken from the utils written. Import it and call the necessary function
describe('Create an user', async () => {
    it('should create user when logged in as a registered user', async () => {
        idToken = await idTokenGenerator.loginAsRegisteredUser();
        const response = await axios.post(config.API.createUsers,{
                name:"traveler",
                email:"travelerw@ajl.com",
                location:"USA"
        }, {
            headers: {
                'Authorization': 'Bearer ' + idToken
            }
        }).catch(err => console.log(err));
        console.log(response);
        assert(response.status, 200)
        assert.exists(response.data.name,'traveler')
    });

});