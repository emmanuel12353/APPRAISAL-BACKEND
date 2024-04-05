

const AppError = require ('../Utils/apperror')




exports.forgotPassword = (req, res, next) {
    // get user based on posted email
const supervisor = await supervisor.findOne({emaill: req.body.email})
if(!supervisor) {
    return new AppError('there is no supervisor with this email', 404)
}

    // generate random reset token

    // send it to user's mail

}