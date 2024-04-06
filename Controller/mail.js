var nodemailer = require('nodemailer');




/** send mail from testing account */
exports.email1 = async (req, res, next)=>  {

    /** testing account */
    let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.Host,
        port: process.env.Port,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.Username, // generated ethereal user
            pass: process.env.Password, // generated ethereal password
        },
    });

    let message = {
        from: process.env.Username, // sender address
        to: "[olubobokun98@gmail.com, olubobokun97@.com]", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Register with us.", // plain text body
        html: "<b>Successfully Register with us.</b>", // html body
      }


    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("Signup Successfully...!");
}


/** send mail from testing account */
exports.email = async (req, res, next)=>  {

    /** testing account */
    let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "[olubobokun98@gmail.com, olubobokun97@.com]", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Register with us.", // plain text body
        html: "<b>Successfully Register with us.</b>", // html body
      }


    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("Signup Successfully...!");
}

