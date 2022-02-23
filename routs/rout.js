const rout = require('express').Router()
const controller = require('../cotrollers/controller')

rout.get('/',controller.welcome)

module.exports = rout