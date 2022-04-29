const knex = require('../database')
const bcrypt = require('bcrypt')

require("dotenv-safe").config();
const jwt = require('jsonwebtoken');


module.exports={
async login(req,res,next){

const {user,password}=req.body

const data = await knex('users')
    .where('username', user)
    bcrypt.compare(password,data[0].password).then(
        doMatch=>{
            if(doMatch){
                const id = data[0].id
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: '1h' 
                    });
                    return res.json({ auth: true, token: token });
            }
            res.status(404).json({message: 'Login inválido!'});
        }
    )

}

}