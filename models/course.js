const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../utils/db-connection');

const Course = sequelize.define('Course', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },

    courseName:{
        type:DataTypes.STRING,
        allowNull:false
    }

})

module.exports = Course;
