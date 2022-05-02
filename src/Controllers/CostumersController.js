const knex = require('../database')
module.exports={
    async index(req,res){
        const data = await knex('costumers')
        return res.status(200).json(data)
    },
    async show(req,res,next){
        const id = req.params.id
        try {
            const data = await knex('costumers').where('id',id)
            return res.status(200).json(data)
        } catch (err) {
            return res.status(400).json(err)
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
            return res.status(201).json(new_costumer)
        } catch (error) {
            return res.status(400).json(error)
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
            return res.status(400).json(error)
        }
    },
    async delete(req,res){
        const id = req.params.id
        try {
            const costumer_for_delete = await knex('costumers')
            .where('id',id)
            .del()
            return res.status(204).json({msg:"deleted"})
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}