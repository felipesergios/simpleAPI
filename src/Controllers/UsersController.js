const knex = require('../database')
module.exports={
    async index(req,res){
        const data = await knex('users')
        return res.json(data)
    }
}