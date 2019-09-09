const { google } = require('googleapis');

const API_KEY = process.env.API_KEY;

const youtubeApi = google.youtube({
    version: 'v3',
    auth: API_KEY
})

module.exports = youtubeApi;