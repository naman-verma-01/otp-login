const User = require("../models/User")

const signFunc = async(req,res,next) =>{


    const username1 = req.body.username;
    const password1 = req.body.password;
    const email1 = req.body.emailid;
    const mobile = req.body.mobile;

    await User.create({ username: username1, password: password1, emailid: email1, MobileNumber: mobile })
    
    next()
}

module.exports = signFunc;