const Sequelize = require("sequelize");
const sequelize = require("../services/Connection");

const Otp = sequelize.define('otp', {
    // Model attributes are defined here
    MobileNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Otp: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    }
    
}, {
    // Other model options go here
});


module.exports = Otp;