const express = require('express')
const router = express.Router()
const User = require("../models/User");
const signup_func = require("../services/signUpFunc")


router.post("/" ,signup_func,async (req, res) => {
    

    res.json({ "Status": "DONE" })
})


module.exports = router;
