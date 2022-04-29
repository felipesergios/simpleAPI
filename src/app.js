require("dotenv-safe").config()

const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({error: error.menssage})
  })

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
  })