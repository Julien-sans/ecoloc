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

router.put('/activitesliste/:id', (req, res) => {
    db.query('UPDATE activite SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
                errorDetails: err.sql
            });
        }
        db.query('SELECT * FROM activite WHERE id = ?', [req.params.id], (err, activite) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    errorDetails: err.sql
                });
            }
            return res.json(activite[0]);
        })
    })
})

router.delete('/activitesliste/:id', (req, res) => {
    db.query('DELETE FROM activite where id = ?', [req.params.id], (err, activite) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la suppression d'une activité");
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;