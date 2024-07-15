const mongoose = require('mongoose');
const connectDB = require('../Data/config');
// const validator = require('validator')

const staffSchema = new mongoose.Schema(
  {
    staffId: {
         type: String,
         trim: true
    },
    firstname: {
        type: String,
        // required: true,
        min: 2,
        max: 30,
        trim: true
      },
      lastname: {
        type: String,
        // required: true,
        min: 2,
        max: 30,
        trim: true
      },
      email: {
        type: String,
        // required: true,
        max: 50,
        unique: true,
        lowercase: true,
   
      },
      solId:{
        type: Number,
        // required: true,
       
        trim: true
    
      },
      jobRole: String,
      supervisorId: String,
      supervisor_name: String,
   



    
    },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", staffSchema)