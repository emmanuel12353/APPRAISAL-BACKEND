const express = require('express');
const Staff = require('../Model/staff');
const supervisor =require('../Model/supervisor')
const loginController = require('../Controller/Login')
const signUpController = require('../Controller/signUpController')
const forgotPassword = require('../Controller/forgotPassword');
const mail = require('../Controller/mail')
const router = express.Router();

router.post('/v1/login', loginController.supervisorlogin).post('/v1/signUp', loginController.supervisorSignup)
router.post('/v1/forgotPass', forgotPassword.forgot)
router.post('/v1/email', mail.email1)


module.exports = router