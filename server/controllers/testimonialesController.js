const Testimoniales = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req,res) => {
    const testimoniales = await Testimoniales.findAll()
    res.render('testimoniales',{
        pagina: 'Testimoniales',
        testimoniales
    })
}

exports.formTestimonial = async (req,res) => {
    
    let {nombre, correo, mensaje} = req.body;
    let errores = [];
    
    //validando los campos
    if (!nombre){
        errores.push({'mensaje': 'Agrega tu nombre'});
    }
    if (!correo){
        errores.push({'mensaje': 'Agrega tu correo'});
    }
    if (!mensaje){
        errores.push({'mensaje': 'Agrega tu testimonio'});
    }
    
    //revisar errores
    if (errores.length > 0) {
        //mostrar errores
        const testimoniales = await Testimoniales.findAll()
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje,
            pagina:'Testimoniales',
            testimoniales
        }); 
    } else {
        //guardar el testimonio
        const testimonial = await Testimoniales.create({
            nombre,
            correo,
            mensaje
        })
        
        res.redirect('/testimoniales');
    }
}