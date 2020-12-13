const router = require('express').Router();
const  models  = require('../../models'); //las llves {} se utilizan para crear varios modelos -- esto debería usarse es desde el controlador 
const bcrypt = require('bcryptjs'); //esto debería usarse es desde el controlador 
const usuarioController = require('../../controllers/UserController.js');

router.get('/', async(req,res)=>{
    const users = await models.user.findAll();
    res.status(200).json(users);
}); //ruta que necesitamos, se pueden crear tantas como necesitemos

//.com/api/usuario/register
router.post('/register', async(req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password,10);
    const users = await models.user.create(req.body);
    res.status(200).json(users)
})


//.com/api/usuarios/Login
router.post('/signin', usuarioController.signin);

module.exports = router;