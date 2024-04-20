const mongoose = require('mongoose');
const connectDB = require('../Data/config');
// const validator = require('validator')

const appraiseSchema = new mongoose.Schema(
  {
    staffId: {
         type: String,
         trim: true
    },
    firstname: {
        type: String,
        required: true,
        min: 2,
        max: 30,
        trim: true
      },
      lastname: {
        type: String,
        required: true,
        min: 2,
        max: 30,
        trim: true
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
        lowercase: true,
      
      },
      solId:{
        type: Number,
        required: true,
       
        trim: true
    
      },
    
      score: {
        type: Number,
        required: true,
      },
      supervisorId: String,
    
    },
  { timestamps: true }
);

module.exports = mongoose.model("Appraise", appraiseSchema)