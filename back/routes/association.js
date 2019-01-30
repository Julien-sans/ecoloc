const express = require('express');
const db = require('../sql/db');
const router = express.Router();
const jwt = require('express-jwt');
const { secretKey } = require('../settings.json');

router.get('/', (req, res) => {
    db.query('SELECT * FROM association', (err, association) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(association);
    });
});

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

router.get('/activites/:id',
    jwt({ secret: secretKey }),
    (req, res) => {
        db.query('SELECT * FROM activite WHERE id = ?', [req.params.id], (err, activite) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            return res.json(activite[0]);
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



router.delete('/:association_id/activites/:activite_id',
    jwt({ secret: secretKey }),
    (req, res) => {
        // récupérer activite avec id=activite_id
        // verifier que le association_id de l'activité === req.user.id
    });
module.exports = router;