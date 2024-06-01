const mongoose = require('mongoose');
const connectDB = require('../Data/config');
// const validator = require('validator')

const telappraiseSchema = new mongoose.Schema(
  {
    staffId: {
         type: String,
         trim: true
    },
    firstname: {
        type: String,
        max: 30,
        trim: true
      },
      lastname: {
        type: String,
        min: 2,
        max: 30,
        trim: true
      },
      
      email: {
        type: String,
        min: 2,
        max: 30,
        trim: true
      },
      solId:{
        type: Number,
        trim: true
    
      },
     
      Score: {
        type: Number,
        require: true,
      },
     
     
    },
  { timestamps: true }
);

module.exports = mongoose.model("Telappraise", telappraiseSchema)