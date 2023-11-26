const { Sequelize, DataTypes } = require('sequelize');

const User = {
    _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    _password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tokenjwt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    _role:{
        type:DataTypes.STRING,
        allowNull:false
    }

}


module.exports = User;