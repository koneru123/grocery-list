const db = require('./index.js'); //connection
const {genericQueryHandler} = require('./handlers.js');

module.exports = {
  findAll: (res) => {
    db.query('SELECT * FROM groceries', genericQueryHandler(res));
  },
  insertGrocery: (grocery, res) => {
    db.query(`INSERT INTO groceries(item, quantity) VALUES ("${grocery.item}", ${grocery.quantity})`, genericQueryHandler(res));
  },
  deleteItemByID: (id, res) => {
    db.query(`DELETE FROM groceries WHERE id = ${id}`, genericQueryHandler(res));
  }
}
