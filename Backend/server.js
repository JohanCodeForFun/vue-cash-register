const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const userRouter = require('./routes/users.js')
const {db} = require('./model/userModel.js');


app.use('/users', userRouter)

app
  .route('/')
    .get((req, res) => {
      db.GetAllUsers(res);
    })
    .post((req, res) => {
      db.GetAllUsers(res)
    })

// const cors = require('cors')
// const router = require('./routes/routes.js')


// Server.use(express.json())
// Server.use(cors()) // Accepts fetches from the frontend side
// Server.use(router())
//
// const test = require('./test.js')
// const product = require('./product.js');
// const db  = require('./config/db.js');
// const add = require('./model/userModel.js');

// const user = require('./model/user.js')


// Server.get('/user', (req, res) => {
//   res.send('Hello World!')
// })

// router.get('/new', (req, res) => {
//   res.send('Send')
// })

// router.get('/user', (req, res) => {
//   let sql = 'Select * from user'
//   db.query(sql, (err, results) => {
//     if(err) {
//       throw err
//     }
//     console.log(results)
//     res.send(results)
//   }))
// }).post('/user', (req, res) => {
//   let sql = 'Select * from user'
//   db.query(sql, (err, results) => {
//     if(err) {
//       throw err
//     }
//     console.log(results)
//     res.send(results)
// })

app.listen('5000', () => {
  console.log('Server started on port 5000')
})
