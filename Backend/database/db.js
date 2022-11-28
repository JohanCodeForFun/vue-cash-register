const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dennis12345",
  database: "dbtest"
})

db.connect((err) => {
  if(err) {
    throw err
  }
  console.log('MySQL Conncted')
})

module.exports = db;
