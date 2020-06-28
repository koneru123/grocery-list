const model = require('../db/model.js');

module.exports = {
  getGroceries: (req, res) => {
    //res.send('GET Groceries route working');
    model.findAll(res);
  },
  addGrocery: (req, res) => {
    model.insertGrocery(req.body, res);
  }
}