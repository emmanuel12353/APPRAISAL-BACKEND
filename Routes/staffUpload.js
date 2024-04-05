const express = require('express');
const uploadController = require('../Controller/uploadStaff');
const multer = require('multer');
const xlsx = require('xlsx');

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/v1/upload', upload.single('file'), uploadController.uploadStaff)

module.exports = router