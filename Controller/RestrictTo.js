
const AppError = require('../Utils/apperror')

exports.RestrictTo =(...roles) => {
    return (req, res, next) => {

        if(!roles.includes(req.user.user)) {
          new AppError('you do not have  permission to perform this action', 403)
        }

    next()
    }

}