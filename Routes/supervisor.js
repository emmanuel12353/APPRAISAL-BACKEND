const express = require('express');
const Staff = require('../Model/staff');
const supervisor =require('../Model/supervisor')
const loginController = require('../Controller/Login')
const signUpController = require('../Controller/signUpController')
const forgotPassword = require('../Controller/forgotPassword');
const mail = require('../Controller/mail')
const router = express.Router();


const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');

const storage = multer.diskStorage({
    destination:(req,file,cb)=> {
      cb(null,"./Upload")
    },
    filename: (req, file,cb)=> {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage });

router.post('/v1/login', loginController.supervisorlogin).post('/v1/signUp', upload.single("Supervisor"), loginController.supervisorSignup)
// loginController.supervisorSignup
router.post('/v1/forgotPass', forgotPassword.forgot)
router.post('/v1/email', mail.email1)


module.exports = router