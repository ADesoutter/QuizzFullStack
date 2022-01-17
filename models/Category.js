const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Category', {
    title: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    icon: {
        type: DataTypes.STRING(255),
        allowNull: true
    } 
 }, {
     tableName: 'category',
     underscored: true
 })