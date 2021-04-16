const Model = require('../models/model')


class Controller {
  
  static taxCount (req, res) {
    req.body.price = +req.body.price
    req.body.qty = +req.body.qty
    let result = Model.TaxCounting(req.body)
    res.status(200).json(result)
  }
}

module.exports = Controller