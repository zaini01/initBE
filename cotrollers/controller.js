const services = require('../services/service')

class Controller{
    static async welcome(req,res,next){
        let data = await services.welcome()
        if (data.Error) res.status(200).send(data.Error)
        res.send(data)
    }
}

module.exports = Controller
