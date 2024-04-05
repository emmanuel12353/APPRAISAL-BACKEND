const express = require('express');
const Staff = require('../Model/staff');
const StaffListController = require('../Controller/staffList')

const multer = require('multer');
const xlsx = require('xlsx');

const storage = multer.diskStorage({
    destination:(req,file,cb)=> {
      cb(null,"./Upload")
    },
    filename: (req, file,cb)=> {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage });

const router = express.Router();

router.get('/v1/staff', StaffListController.list).post('/v1/uploadStaff',upload.single("Csvpath"), StaffListController.Upload).get('/v1/downloadstaff', StaffListController.downloadExcel)

module.exports = router