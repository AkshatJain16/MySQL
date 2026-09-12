const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Payments = sequelize.define('Payments', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    amountPaid:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    paymentStatus:{
        type:DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Payments;