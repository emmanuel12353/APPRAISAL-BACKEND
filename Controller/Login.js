const { JsonWebTokenError } = require('jsonwebtoken');
const AppError = require('../Utils/apperror');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Supervisor = require('../Model/supervisor');
const signedToken = require('../Utils/signedToken')

// const signedToken = id => {
//     return JWT.sign({id: id}, process.env.SECRET_KEY,{
//       expiresIn: process.env.JWT_EXPIRES_IN
//     })
// }

exports.supervisorSignup = async(req, res, next)=>{
  // if(!req.body){
  //   return next(new AppError('bad request', 400))
  // }
  // if(!req.body.email || !req.body.password) return next(new AppError('please provide a valid email and password', 400))
  // if(!req.body.email) return next(new AppError('please provide a valid email', 400))
  // if(!req.body.password) return next(new AppError('please provide a valid password', 400))
  // if(!req.body.solid) return next(new AppError('please provide your business office soi id', 400))
                        const id = req.body.id
                        const firstname = req.body.firstname;
                        const lastname= req.body.lastname;
                       const  email = req.body.email;
                       const password = req.body.password;
                       const JobRole = req.body.JobRole
                        const solid =  req.body.solid;
                       const  city = req.body.city;
                        const state= req.body.state;
                        const country=  req.body.country;
                       const  phoneNumber= req.body.phoneNumber;
                        const Appraisal= req.body.Appraisal;
                        const staff= req.body.staff;

  const newSupervisor = await new Supervisor({
                        id: id,
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        password: password,
                        JobRole: JobRole,
                        solid: solid,
                        city: city,
                        state: state,
                        country: country,
                        phoneNumber: phoneNumber,
                        Appraisal: Appraisal,
                        staff: staff,
                       

  })
  const token = signedToken(newSupervisor._id);
 await newSupervisor.save()
  res.status(201).json({
    status: 'success',
    token,
    data: {
      supervisor: newSupervisor
    }
  })
}




exports.supervisorlogin = async(req, res, next)=> {
    console.log('it is working');
    // res.send('i  still dey try am');
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password)
   if(!email || !password) return next(new AppError('please provide a valid email and password', 400))


// check if the user exist and the password is correct

const existingsupervisor = await Supervisor.findOne({email: email}).select('+password')
if(!existingsupervisor) return next(new AppError('user does not exist', 400))

  //  // compare passwords
const correct = existingsupervisor.correctPassword(password, existingsupervisor.password)
    
 

    if(!correct){
        return next(new AppError('username or password has been wrongly filled', 400))
    }
  const token = signedToken(existingsupervisor.id)
  res.status(200).json({
    status: 'success',
    existingsupervisor,
    token
  })
  next()
}