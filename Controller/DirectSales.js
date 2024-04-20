
const express = require('express');
const mongoose = require('mongoose');
// const xlsx = require('xlsx');
const csv = require('csvtojson');
const Direct = require('../Model/dse')




exports.DseList = async(req, res) => {
    const direct = await Direct.find();
   return res.send(direct)
}
// ---------------------------------------------------------------------------------
exports.Upload = async(req, res) => {
    const csvFilePath = req.file.path;
     const file = await csv().fromFile(csvFilePath);
    //  return res.send(file)
     if(!file) {
       return res.send('kindly upload a file')
     }
  const direct = Direct.insertMany(file)

     return res.status(200).json({ data: direct});
   
     };
     

     exports.downloadExcel = async (req, res) => {
      try {
          const data = await Direct.find({}); // Assuming using Mongoose
    
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

