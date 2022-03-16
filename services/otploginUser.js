const Otp = require("../models/otp");
const User = require("../models/User")


const person = async (req,res,next) =>{
    const otp = req.body.otp;
    
    const ne = await Otp.findAll({
        raw: true,
        where: {
            Otp: otp
        }
    });

   // const mobileno = ne[0].MobileNumber  

    const person = await User.findAll({
        raw: true,
        where: {
            MobileNumber: ne[0].MobileNumber  
        }
    });

    req.person = person;

    next()


}

module.exports = person;
