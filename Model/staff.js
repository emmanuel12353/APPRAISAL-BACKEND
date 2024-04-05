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
        // validate(value) {
        // if(!validator.isEmail(value)) {
        //   throw new error ('email is invalid')
        // }
        
      },
      solId:{
        type: Number,
        required: true,
       
        trim: true
    
      },
      jobRole: String,
      // phoneNumber: String,
      employmentDate: Date,

      // supervisor: {
      //      type: mongoose.Schema.ObjectId,
      //      ref: 'Supervisor',
      //      require: [true, 'fill in the supervisors details']
      // },

  //     Appraisal: {
  //       type: mongoose.Schema.ObjectId,
  //       ref: 'Appraisal',
  //       require: [true, 'fill in the supervisors details']
  //  },
      // role: {
      //   type: String,
      //   required: true,
      //   min: 5,
      // },
    
    },
  { timestamps: true }
);
// StaffSchema.pre(/^find/, function(next) {
//   this.populate({
//     path:'supervisor',
//     select: 'name'
//   }).populate({
//     path: 'appraisal',
//     select: 'score1 score2 score3 score4'
//   })
//   next();
// })
module.exports = mongoose.model("Staff", staffSchema)