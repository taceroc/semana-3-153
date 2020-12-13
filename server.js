//es parecido al import para traerse el modulo de express
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//constante que crea la aplicación de express
//el servidor web viviría dentro de 'app'
const app = express(); //objeto de express
//levantar un servidor
//app.listen(puerto, función para ver mensaje cuando se levanta un servidor)
// Los mensajes que se tienen en el backend aparecen en la terminal
// () es el call back function del navegador
app.use(cors());
app.use(morgan('dev'));//Uso de morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //sirve para leer lo datos de la urlencode
app.use('/api',apiRouter);



// app.get('/', (req,res) =>{
//     res.send('Conectado');
// })

// app.get('/about', (req,res) =>{
//     res.send('Conectado a about');
// })
// // Se utiliza * cuando se identifica que no se encontró la ruta
// app.get('*', (req,res) =>{
//     res.status(404).send('Ruta no encontrada');
// })


//se instala nodemon (es un liveserver que permite actualizar sin estar desmontando y montando el sevidor)
//nodemon es una herramienta que permite detectar los cambios de los archivos javascript, así con cualquier 
//cambio se reinicie ek servidor autoáticamente
app.set('PORT',process.env.PORT || 3000);


// app.listen(app.get('PORT'),() =>{
//     console.log('Server UP');
// });

//Code antiguo -->

app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;