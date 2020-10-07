/* --IMPORTS-- */
const express = require('express');
const router = express.Router();


/* Controllers */
const nosotrosController = require('../controllers/nosotrosController');
const indexController = require('../controllers/indexController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function () {
    
    router.get('/',indexController.dobleConsulta);
    
    router.get('/nosotros',nosotrosController.infoNosotros);
    
    router.get('/viajes',viajesController.infoViajes);
    
    router.get('/viajes/:id',viajesController.infoUnViaje);
    
    router.get('/testimoniales',testimonialesController.mostrarTestimoniales);
    
    router.post('/testimoniales',testimonialesController.formTestimonial)
    
    return router;
    
}