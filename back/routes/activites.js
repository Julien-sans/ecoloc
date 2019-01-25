const express = require('express');
const db = require('../sql/db');
const router = express.Router();
const { secretKey } = require('../settings.json');
const jwt = require('express-jwt');

router.get('/', (req, res) => {
    db.query('SELECT * FROM activite', (err, activite) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(activite);
    });
});

router.post('/activitesliste',
    jwt({ secret: secretKey }),
    (req, res) => {
        const activite = { ...req.body, association_id: req.user.id }
        db.query('INSERT INTO activite SET ?', activite, (err, result) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.json(result);
        });
    });

module.exports = router;