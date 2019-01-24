const express = require('express');
const db = require('../sql/db');
const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM activite', (err, activite) => {
        if(err) {
            return res.status(500).send(err.message);
        }
        res.json(activite);
    });
});

router.post('/activitesliste', (req, res) => {
    db.query('insert into activite set ?', req.body, (err, result) => {
        if(err) {
            return res.status(500).send(err.message);
        }
        res.json(result);
    });
});

module.exports = router;