const req = require("express/lib/request");
const jwt = require("jsonwebtoken");
require('dotenv').config()


const authen = (req,res,next)=> {
    const user_token = req.body.token;
    
    jwt.verify(user_token,process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
            
            if(err) return res.sendStatus(403)
            else{
                
                console.log(user)
                
                req.user = user
                next()
                
            }
            
            
    })
}


module.exports = authen;