const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');


// const validator = require('validator')

const supervisorSchema = new mongoose.Schema(
  {
    id:{
      type: String,
      min: 2,
      max: 30,
      trim: true,
      require: true
    },
    firstname: {
        type: String,
        min: 2,
        max: 30,
        trim: true,
        require: true
      },
      lastname: {
        type: String,
        min: 2,
        max: 30,
        trim: true
      },
      email: {
        type: String,
        max: 50,
        unique: true,
        lowercase: true,
     
        
      },
      // solid:{
      //   type: Number,
      //   trim: true      
      
      // },
      password:{
        type: String,
        min: 5,
        select: false
      },
      JobRole: {
        type: String,
        require: true,
        trim: true
      },
     
      // PasswordResetToken: String,
      // PasswordResetExpires: Date,
      // city: String,
      // state: String,
      country: String,
      // phoneNumber: String,
     

    },
  { timestamps: true }
);



supervisorSchema.methods.correctPassword = async function(candidatePassword, supervisorPassword) {
  return await bcrypt.compare(candidatePassword, supervisorPassword)
}



module.exports = mongoose.model("Supervisor", supervisorSchema)