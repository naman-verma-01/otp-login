const express = require('express')
const router = express.Router()
const Otp = require("../models/otp");
const User = require("../models/User");
const person = require("../services/otploginUser")

router.get("/",person ,async (req, res) => {

    res.json({ "Person": req.person[0] })
})


module.exports = router;
