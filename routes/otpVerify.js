const express = require('express')
const router = express.Router()
const Otp = require("../models/otp");
const optgenerate = require("../services/otpGen")
router.post("/", optgenerate ,async (req, res) => {
    

    res.json({ "Status": "DONE" })
})


module.exports = router;
