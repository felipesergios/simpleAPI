const express = require('express');
const route = express.Router()
const verifyJWT = require('./services/auth')



const LoginController = require('./Controllers/LoginController')
const CostumersController = require('./Controllers/CostumersController')


route.get('/costumers',verifyJWT,CostumersController.index)
route.get('/costumers/:id',verifyJWT,CostumersController.show)
route.put('/costumers/:id',verifyJWT,CostumersController.update)
route.post('/costumers',verifyJWT,CostumersController.store)
route.delete('/costumers/:id',verifyJWT,CostumersController.delete)




route.get('/',verifyJWT,(req,res)=>{res.send('OK')})
route.post('/login',LoginController.login)


route.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})

module.exports = route