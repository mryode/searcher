require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose connection is open');
});

const videoSearchRouter = require('./routes/videoSearch');
const videoHistoryRouter = require('./routes/videoHistory');

app.use('/search', videoSearchRouter);
app.use('/history', videoHistoryRouter);

app.listen(port, () => console.log(`Running on ${port}`));

module.exports = app;