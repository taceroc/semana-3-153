const Usuario  = require('../models'); //las llves {} se utilizan para crear varios modelos -- esto debería usarse es desde el controlador 
const bcrypt = require('bcryptjs'); //esto debería usarse es desde el controlador
var jwt = require('jsonwebtoken');
const models = require('../models/');

exports.signin = async(req,res,next) => {
    try {
        const user = await models.user.findOne({where: {email: req.body.email} });
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password,user.password); //(Contraseña ingresada,Contraseña de BD)
            
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    nombre: user.nombre,
                    rol: user.rol,
                    email: user.email, 
                }, 'Cadena encryptada',{
                    expiresIn: 86400,
                } );

                res.status(200).send({
                    auth: true, 
                    accessToken: token, 
                    user: user
                })

            }else{
                res.status(401).json({
                    error: 'Información errada'
                })
            };
        }else{
            res.status(404).json({
                error: 'Validación errada'
            })
        };
    } catch (error) {

        res.status(500).send({
            message: '¡Error!'
        })
        next(error);
    }
};