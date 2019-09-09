require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const videoSearchRouter = require('./routes/videoSearch');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', videoSearchRouter);

app.listen(port, () => console.log(`Running on ${port}`));

module.exports = app;