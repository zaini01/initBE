require('dotenv').config()
const express = require('express')
const logger = require('./logger/logger')
const routs = require('./routs/rout')
const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(routs)

app.listen(port, ()=>{
    logger.info(`[START AT PORT ${port}]`)
})