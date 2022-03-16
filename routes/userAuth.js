const express = require('express')
const router = express.Router()
require('dotenv').config()
const User = require("../models/User");
const authen = require("../services/UserLoginJWT.js")


router.get("/",authen,async (req,res)=>{

    res.send(req.user)
})




module.exports = router

