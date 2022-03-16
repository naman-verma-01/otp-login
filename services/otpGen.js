const Otp = require("../models/otp");

const optgenerate = async (req,res,next)=>{
    const mobile1 = req.body.mobile;
    
    var seq = parseInt((Math.floor(Math.random() * 1000000) + 1000000).toString().substring(1));
    
    let otp = seq;
    await Otp.create({ MobileNumber: mobile1, Otp : otp })

    next()
}

module.exports = optgenerate;