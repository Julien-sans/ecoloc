const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const activitesRouter = require('./routes/activites');
const associationRouter = require('./routes/association');
const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRouter);
app.use('/api/activites', activitesRouter);
app.use('/api/associations', associationRouter);

app.listen(8000);