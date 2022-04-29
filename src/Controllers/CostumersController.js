const knex = require('../database')
module.exports={
    async index(req,res){
        const data = await knex('costumers')
        return res.json(data)
    },
    async show(req,res,next){
        const id = req.params.id
        try {
            const data = await knex('costumers').where('id',id)
            return res.json(data)
        } catch (err) {
            return res.json(err)
        }
    },
    async store(req,res){
        const {full_name,address,born_date,phone_number} = req.body;
        try {
            const new_costumer = await knex('costumers').insert([{
                full_name,
                address,
                born_date,
                phone_number
            }])
            return res.json(new_costumer)
        } catch (error) {
            return res.json(error)
        }
    },
    async update(req,res){
        const {address,phone_number} = req.body;
        const id = req.params.id
        try {
            const update_costumer = await knex('costumers').where('id',id)
            .update({address,phone_number},['address','phone_number'])
            return res.json(update_costumer)
        } catch (error) {
            return res.json(error)
        }
    },
    async delete(req,res){
        const id = req.params.id
        try {
            const costumer_for_delete = await knex('costumers')
            .where('id',id)
            .del()
            return res.json({msg:"deleted"})
        } catch (error) {
            return res.json(error)
        }
    }
}