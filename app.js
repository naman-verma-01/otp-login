require('dotenv').config()
const express = require("express");
const Otp = require("./models/otp");
const sequelize = require("./services/Connection");
const bodyParser = require('body-parser');
const app = express();
const jwt = require("jsonwebtoken");
const otp = require("./routes/otpVerify")
const apiDocs = require("./routes/apiDocs")
const otplogin = require("./routes/otpLogin")
const User = require("./models/User")
const signup = require("./routes/userSignup")



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/", apiDocs)
app.use("/otp", otp)
app.use("/otplogin",otplogin)
app.use("/signup", signup)
const port = 8000;

app.listen(process.env.PORT || port, () => console.log("server started on port " + port));

