const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('User',{
    email: {
        type: DataTypes.STRING(150), 
        allowNull: false,
        unique : true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING(180), 
        allowNull: false 
    },
}, {
    tableName: 'user',
    underscored: true
})