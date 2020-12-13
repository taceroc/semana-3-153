const router = require('express').Router();
const apiUsuarioRouter = require('./api/usuarios');


router.use('/auth',apiUsuarioRouter); //ruta que necesitamos, se pueden crear tantas como necesitemos

//categorías
// router.use('/categoria',apiCategoriaRouter); //ruta que necesitamos, se pueden crear tantas como necesitemos

//Articulos
// router.use('/articulo',apiArticuloRouter); //ruta que necesitamos, se pueden crear tantas como necesitemos

module.exports = router;

