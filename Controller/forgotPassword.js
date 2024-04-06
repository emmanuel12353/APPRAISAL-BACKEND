
const Supervisor = require('../Model/supervisor');
const AppError = require ('../Utils/apperror');
const bcrypt = require('bcrypt');
const crypto = require('crypto');




exports.forgot = async (req, res, next)=> {
    // get user based on posted email
const supervisor = await Supervisor.findOne({email: req.body.email})
if(!Supervisor) {
    return new AppError('there is no supervisor with this email', 404)
}

    // generate random reset token
    const ResetToken = crypto.randomBytes(32).toString('hex');

    console.log(ResetToken)


    // const ResetToken = Supervisor.createPasswordResetToken();
    // await supervisor.save({validateBeforeSave: false});


    // send it to user's mail

}
