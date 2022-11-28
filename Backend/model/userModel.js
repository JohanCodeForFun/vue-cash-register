const db  = require('../database/db.js');

module.exports.db = {
  GetAllUsers: function(res) {
    let sql = 'Select * from user'
    db.query(sql, (err, results) => {
      if(err) {
        throw err
      }
      console.log(results)
      res.send(results)
    })
  },
  InsertUser: function(user, res) {  //username, password, nickname,
    let sql = `INSERT INTO user (username, password, nickname) VALUES('${user.username}', '${user.password}', '${user.nickname}')`

    db.query(sql, (err, result) => {
      if(err) {
        throw err
      }
      res.send(result)
    })
  }
}
