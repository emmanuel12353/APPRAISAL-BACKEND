const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// const validator = require('validator')

const supervisorSchema = new mongoose.Schema(
  {
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
        // validate(value) {
        // if(!validator.isEmail(value)) {
        //   throw new error ('email is invalid')
        // }
        
      },
      solid:{
        type: Number,
        trim: true      
      
      },
      password:{
        type: String,
        min: 5,
        select: false
      },
      ResetToken: {
        type: string
      },
      city: String,
      state: String,
      country: String,
      phoneNumber: String,
      role: {
        type: String,
        min: 5,
      },
//       Appraisal: {
//         type: mongoose.Schema.ObjectId,
//         ref: 'Appraisal',
//         require: [true, 'fill in the supervisors details']
//    },
//    staff: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'staff',
//     require: [true, 'fill in the supervisors details']
// },
    },
  { timestamps: true }
);

// supervisorSchema.pre('save', async function(next){
// // only run this function if the password was modified
// if(!this.password.isModified('password')) return next();
// // match the passwor with the cost at 12
// this.password = await bcrypt.hash(this.password, 12)

// next()

// })

supervisorSchema.methods.correctPassword = async function(candidatePassword, supervisorPassword) {
  return await bcrypt.compare(candidatePassword, supervisorPassword)
}

// supervisorSchema.pre(/^find/, function(next) {
//   this.populate({
//     path:'staff',
//     select: 'name'
//   }).populate({
//     path: 'appraisal',
//     select: 'score1 score2 score3 score4'
//   })
//   next();
// })
module.exports = mongoose.model("Supervisor", supervisorSchema)