
const express = require('express');
const mongoose = require('mongoose');
// const xlsx = require('xlsx');
const csv=require('csvtojson');

const xlsx = require('xlsx');
const fs = require('fs');

const json2xls = require('json2xls');

const staff = require("../Model/staff");
const Appraise = require("../Model/appraised")
const multer = require('multer');
// .................................................................................................



// -------------------------------------------------------------------------------------------------
exports.list = async(req, res) => {
    // res.send('Hello, Express!');
    console.log('just testing')
    const staffList = await staff.find();
  res.status(200).json({
    status: 'success',
    staffList
  })

  };

  // ...........................................................................................................

exports.Upload = async(req, res) => {
 const csvFilePath = req.file.path;
  const file = await csv().fromFile(csvFilePath);
  // return res.send(file)
  if(!file) {
    return res.send('kindly upload a file')
  }



  // Insert data into MongoDB

  staff.insertMany(file)
    //  (err, result) => {
    // if (err) {
      
  //     return res.status(500).send('Error inserting data into MongoDB');
  //   }

  return res.status(200).json( file );
  // });

  };




  function excelToJson(filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
  
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  
    return jsonData;
  }
  
  
  
// ------------------------------------------------------------------------

exports.downloadExcel = async (req, res) => {
  try {
      const data = await staff.find({}); // Assuming using Mongoose

      // Convert data to JSON
      const jsonData = JSON.parse(JSON.stringify(data));

      // Convert JSON to Excel
      const xls = json2xls(jsonData);

      
      // Set response headers
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename="data.xlsx"');

      // Send Excel file
      res.end(xls, 'binary');
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.appraisalScore= async(req, res) => {
  const staffId = req.body.staffId;
  const firstname= req.body.firstname;
 const  lastname = req.body.lastname;
 const  email = req.body.email;
  const solid =  req.body.solId;
 const  score = req.body.score;
 const  supervisorId = req.body.supervisorId;
 if(!req.body) {
  return res.json("please fill in the appropriate info")
 }

 const newAppraised =  new Appraise({
staffId: staffId,
firstname: firstname,
 lastname: lastname,
 email: email,
 solId: solid,
 score: score,
 supervisorId: supervisorId
})

await newAppraised.save();
return res.json({
  newAppraised
})



}

exports.AppraisedStaff= async(req, res) => {

  const AppraisalList = await Appraise.find();
res.status(200).json({
  status: 'success',
  AppraisalList
})
}