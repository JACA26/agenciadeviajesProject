const {Sequelize,DataTypes} = require('sequelize');
const db = require('../config/databases');

const Viaje = db.define('viajes',{
    titulo :{
        type: DataTypes.STRING,
    },
    precio:{
        type: DataTypes.STRING,
    },
    fecha_ida:{
        type: DataTypes.DATE,
    },
    fecha_vuelta:{
        type: DataTypes.DATE,
    },
    imagen:{
        type: DataTypes.STRING,
    },
    descripcion:{
        type: DataTypes.STRING,
    },
    disponibles:{
        type: DataTypes.STRING,
    }
});

module.exports = Viaje;