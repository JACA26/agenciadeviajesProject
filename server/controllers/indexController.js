const Viaje = require('../models/Viajes');
const Testimoniales = require('../models/Testimoniales');

exports.dobleConsulta = async (req,res) => {
    
    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales = await Testimoniales.findAll({ limit: 3 });
    
    res.render('index',{
        clase:'home',
        viajes,
        testimoniales
    });
    
}