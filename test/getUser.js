const axios = require("axios");
const { assert , expect} = require("chai");
const config = require('../utils/config');
const idTokenGenerator = require('../utils/registerUser')
let idToken;

describe('Get an user', async () => {
    it('should get users when logged in as a registered user', async () => {
        idToken = await idTokenGenerator.loginAsRegisteredUser();
        console.log(idToken);
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
        assert(response.status,200)
    })
})