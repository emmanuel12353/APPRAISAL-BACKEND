
const express = require('express');
const mongoose = require('mongoose');
// const xlsx = require('xlsx');
const csv=require('csvtojson');


const json2xls = require('json2xls');

const staff = require("../Model/staff");
const multer = require('multer');
// .................................................................................................




// -------------------------------------------------------------------------------------------------
exports.list = async(req, res) => {
    // res.send('Hello, Express!');
    console.log('just testing')
    const staffList = await staff.find();
  res.status(200).json({
    status: 'success',
    data: {
      staffList
    }
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

  return res.status(200).json({ message: 'Data inserted successfully'});
  // });

  };
  
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