const router = require('express').Router();
const youtubeApi = require('../youtube');

let History = require('../models/history.model');

router.route('/').get((req, res) => {
    History.find()
        .then(history => res.json(history))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const { videoId, videoTitle } = req.body;

    const newRecord = new History({
        videoId, videoTitle
    });

    newRecord.save()
        .then(document => res.json(document))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    History.findByIdAndDelete(req.params.id)
        .then(document => res.json(document))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

module.exports = router;