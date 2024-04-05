const express = require('express');
const Staff = require('../Model/staff');
const supervisor =require('../Model/supervisor')
const loginController = require('../Controller/Login')
const signUpController = require('../Controller/signUpController')
const router = express.Router();

router.post('/v1/login', loginController.supervisorlogin).post('/v1/signUp', loginController.supervisorSignup)


module.exports = router