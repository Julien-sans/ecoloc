const express = require('express');
const bodyParser = require('body-parser');
const db = require('./sql/db');

const app = express();
app.use(bodyParser.json());

app.get('/api/activites', (req, res) => {
    db.query('select * from activite', (err, activite) => {
        if(err) {
            return res.status(500).send(err.message);
        }
        res.json(activite);
    });
});

app.post('/api/activites', (req, res) => {
    db.query('insert into activite set ?', req.body, (err, result) => {
        if(err) {
            return res.status(500).send(err.message);
        }
        res.json(result);
    });
});

app.listen(8000);