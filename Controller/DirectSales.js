
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
     

