//imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');

//dotenv
require('dotenv').config({ path: 'variables.env' })


//sequelize
const db = require('./config/databases');
db.authenticate()
    .then(() => console.log('DB connected'))
    .catch(error => console.log('Error db'+ error));



//configurar express
const app = express();

//habilitar pug
app.set('view engine','pug');

//añadir las vistas
app.set('views',path.join(__dirname,'./views'));

//agregar una carpeta estatica llamada public
app.use(express.static('public'));

//validar si estamos en modo de desarrollo o produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo = config.nombreSitio;

//obtener el año actual y la ruta 
app.use((req,res,next) => {
    //crear una fecha en locals
    const year = new Date();
    res.locals.añoActual = year.getFullYear();
    res.locals.ruta = req.path;
    
    return next();
})

//configurar el body parser
app.use(bodyParser.urlencoded(
    { extended:true }
));

//cargar las rutas
app.use('/',routes());



/* Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


app.listen(port, host, ()=>{
    console.log('Server is working');
});

