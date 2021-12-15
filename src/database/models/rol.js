const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index')


function createRoleModel(connection) {
    const Role = connection.define('Role', {
        rol: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Role;
};

module.exports = { 
    createRoleModel
};