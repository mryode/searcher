const router = require('express').Router();
const youtubeApi = require('../youtube');

let History = require('../models/history.model');

router.route('/').get((req, res) => {
    History.find()
        .then(history => res.json(history))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const { videoId, videoName } = req.body;

    const newRecord = new History({
        videoId, videoName
    });

    newRecord.save()
        .then(document => res.send(`${document} was added to history!`))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;