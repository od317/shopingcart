const express = require('express');
const cors = require('cors');



const stytch = require("stytch")


    "https://test.stytch.com/v1/public/oauth/google/start?public_token=public-token-test-1714908c-17e4-45ad-8f8d-1be2b5d3c4d0&login_redirect_url=https%3A%2F%2Fexample.com%2Flogin&signup_redirect_url=https%3A%2F%2Fexample.com%2Fsignup"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


require('./app/router')(app);










app.listen(3500,console.log('server is running'));