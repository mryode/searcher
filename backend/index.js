require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { google } = require('googleapis');

const videoSearchRouter = require('./routes/videoSearch');

const app = express();
const port = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;

console.log(API_KEY);
const youtubeApi = google.youtube({
    version: 'v3',
    auth: ''
})

// app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', videoSearchRouter);

app.listen(port, () => console.log(`Running on ${port}`));

module.exports = app;