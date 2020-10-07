const {Sequelize,DataTypes} = require('sequelize');
const db = require('../config/databases');

const Testimonial = db.define('testimoniales',{
    nombre :{
        type: DataTypes.STRING,
    },
    correo:{
        type: DataTypes.STRING,
    },
    mensaje:{
        type: DataTypes.STRING,
    }
});

module.exports = Testimonial;