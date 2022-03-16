const express = require('express')
const router = express.Router()
const Otp = require("../models/otp");
const User = require("../models/User");
const person = require("../services/otploginUser")
const jwt = require("jsonwebtoken");
require('dotenv').config()

router.get("/",person ,async (req, res) => {
    jwt_user = {user: req.person[0].username,pass: req.person[0].password};
        
    const accesstoken = jwt.sign(jwt_user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ "Person": req.person[0],"Token": accesstoken })
})


module.exports = router;
