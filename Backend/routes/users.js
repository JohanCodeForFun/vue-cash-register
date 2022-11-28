const express = require('express');
const { nextTick } = require('process');
const router = express.Router();

const {db} = require('../model/userModel.js')


router
  .route('/')
  .get((req, res) => {
    db.GetAllUsers(res)
  })
  .post((req, res) => {
    db.GetAllUsers(res)
  })

router.post('/new/:user', (req, res) => {
  const user = req.params.user;
  res.send('Tjenare')
  db.InsertUser(user, res)
})

module.exports = router;
