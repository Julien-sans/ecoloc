const express = require('express');
const db = require('../sql/db');
const router = express.Router();
const jwt = require('express-jwt');
const { secretKey } = require('../settings.json');

router.get('/activites',
    jwt({ secret: secretKey }),
    (req, res) => {
        db.query('SELECT * FROM activite WHERE association_id = ?', [req.user.id], (err, activite) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.json(activite);
        });
    });

router.get('/:association_id/activites', (req, res) => {
    db.query('SELECT * FROM activite WHERE association_id = ?', [req.params.association_id], (err, activite) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(activite);
    });
});

module.exports = router;