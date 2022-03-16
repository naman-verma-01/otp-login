const Sequelize = require("sequelize");
const sequelize = require("../services/Connection");

const User = sequelize.define('userm', {
    // Model attributes are defined here
    
    username: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    password: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    emailid: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    MobileNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
}, {
    // Other model options go here
});


module.exports = User;
