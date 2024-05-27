const express = require('express');
const Staff = require('../Model/staff');
const Appraise = require('../Model/appraised');

const StaffListController = require('../Controller/staffList')


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


function excelToJson(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet

  const sheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

  return jsonData;
}

const router = express.Router();

router.get('/v1/staff', StaffListController.list).post('/v1/uploadStaff',upload.single("Csvpath"), StaffListController.Upload).get('/v1/downloadstaff', StaffListController.downloadExcel)

router.post('/v1/staff/apppraisal', StaffListController.appraisalScore).get('/v1/staff/apppraisal', StaffListController.AppraisedStaff)
router.post('/v1/AppraisalUpload',upload.single("Csvpath"), StaffListController.telappUpload)


module.exports = router