const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../sql/db');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../settings.json');
const router = express.Router();

router.post('/signin', function (req, res) {
    db.query('SELECT * FROM association WHERE email=?', [req.body.email], function (error, results, fields) {
      if (error) {
        return res.status(500).send(error)
      }
      if (results.length === 0) {
        return res.status(401).json('Email ou mot de passe incorrect')
      }
      const user = {
        id: results[0].id,
        association: results[0].association
      }
      console.log(user, req.body.password, results[0].password)
      let isSame = bcrypt.compareSync(req.body.password, results[0].password)
      isSame ?
        jwt.sign(user, secretKey, (err, token) => {
          if (err) {
            return res.status(401).json({
              error: 'JWT generation failed'
            })
          }
          return res.json({
            token
          })
        })
        :
        res.status(401).send('Email ou mot de passe incorrect')
    })
  })

module.exports = router;