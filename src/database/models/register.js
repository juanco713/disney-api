const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index')


function createRegisterModel(connection) {
    const Register = connection.define('Register', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });
    return Register;
};

module.exports = { 
    createRegisterModel
};