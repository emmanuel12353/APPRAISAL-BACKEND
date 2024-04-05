const JWT = require('jsonwebtoken');


const signedToken = id => {
    return JWT.sign({id: id}, process.env.SECRET_KEY,{
      expiresIn: process.env.JWT_EXPIRES_IN
    })
}


module.exports = signedToken